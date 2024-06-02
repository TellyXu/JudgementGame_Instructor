// src/components/GandhiSurvey.js
import React, { useState } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Game12() {
    const [money, setMoney] = useState('');
    const [money2, setMoney2] = useState(-1);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            text_val: money.trim(),
            Q1: -1, // q1 是value
            Q2: -1,
            survey_number: 7, // survey_num是第几个survey
            version: 2 // version是第几个group
        };

        try {
            const response = await fetch('http://localhost:8001/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Survey submission successful, please click to proceed to the next question');

                setSubmitDisabled(true)
                getResult()
                // navigate('/');  // 这里使用navigate来跳转
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getResult = async () => {
        fetch("http://localhost:8001/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    setResultData(data.filter(item => item.survey_num === 7 && item.version === 2))
                    return
                }
                alert('Data loading error')
            });
    }


    const normalizeText = (text) => {
        if (text == null) return ""; // 检查null和undefined
        return text.replace(/\s+/g, '').toLowerCase(); // 去除所有空格并转换为小写
    };

    const uniqueNormalizedValues = () => {
        const normalizedSet = new Set(resultData.map(item => normalizeText(item.text_val)));
        return Array.from(normalizedSet);
    };

    const repeatCount = (normalizedVal) => {
        let count = 0;
        resultData.forEach(item => {
            if (normalizeText(item.text_val) === normalizedVal) {
                count++;
            }
        });
        return count;
    }


    return (
        <form onSubmit={handleSubmit} className="gandhi-survey-form">
            <h1>  </h1>
            <Row>
                <Col className="ml-auto mr-auto" md="5.5" style={{ padding: '50px', width: '100%' }}>
                    <FormGroup style={{ width: '80%', margin: '0 auto' }}>
                        <Label htmlFor="ageComparisonDropdown" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            If yes, which one
                        </Label>
                        <Input
                            disabled={submitDisabled ? true : false}
                            style={{ marginTop: '15px', width: '100%' }}
                            aria-describedby="emailHelp"
                            placeholder="Enter an AI"
                            type="text"
                            required
                            value={money}
                            onChange={_ => setMoney(_.target.value)}
                        ></Input>
                    </FormGroup>
                </Col>
            </Row>

            {
                resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                    <h3>Result</h3>
                    <div style={{ height: '17rem', overflow: 'auto' }}>

                            {uniqueNormalizedValues().map(item => (
                                    <div key={item} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ display: 'flex' }}>
                                            <p style={{ width: '150px' }}>{item}</p>
                                            <p>repeat: {repeatCount(item)}</p>
                                        </div>
                                    </div>
                                ))}

                    </div>
                </div>
                    :
                    ''
            }

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>


            <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
                onClick={_ => {
                    _.preventDefault()
                    setSubmitDisabled(false)
                    setMoney('')
                    navigate('/poll_13')
                }}
                color="success"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >Next question <span style={{ fontWeight: 'bold' }}>2/3</span></Button>

            <Button className="btn-round pull-right"
                color="info"
                type="submit"
                onClick={_ => {
                    _.preventDefault()
                    getResult()
                }}
                style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >Refresh result</Button>

        </form>
    );
}

export default Game12;
