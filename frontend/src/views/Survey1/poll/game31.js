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

function Game31() {
    const [money, setMoney] = useState('');
    const [money2, setMoney2] = useState(-1);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Q1: money, // q1 是value
            Q2: -1,
            survey_number: 9, // survey_num是第几个survey
            version: 1 // version是第几个group
        };

        try {
            const response = await fetch('http://localhost:8001/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Survey submitted successfully!');

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
                    setResultData(data.filter(item => item.survey_num === 9 && item.version === 1))
                    return
                }
                alert('Data loading error')
            });
    }

    const repeatCount = (val) => {
        let count = 1
        resultData.map(item => item.text_val)
        for (let index = 0; index < resultData.length; index++) {
            if (resultData[index].text_val === val) count++
        }
        return count
    }

    return (
        <form onSubmit={handleSubmit} className="gandhi-survey-form">
            <h1>  </h1>
            <Row>
                <Col className="ml-auto mr-auto" md="5.5" style={{ padding: '50px', width: '100%' }}>
                    <FormGroup style={{ width: '80%', margin: '0 auto' }}>
                        <Label htmlFor="ageComparisonDropdown" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            AI will change how you do your current job in the next five years
                        </Label>
                        <Label htmlFor="ageComparisonDropdown">
                            (Not likely, Don’t know, Likely)
                        </Label>
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {money ? money === '0' ? 'Not likely' : money === '1' ? 'Don’t know' : 'Likely' : 'Select response'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setMoney('0')}>Not likely</DropdownItem>
                                <DropdownItem onClick={() => setMoney('1')}>Don’t know</DropdownItem>
                                <DropdownItem onClick={() => setMoney('2')}>Likely</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </FormGroup>
                </Col>
            </Row>

            {
                resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                    <h3>Result</h3>
                    <div style={{ height: '17rem', overflow: 'auto' }}>
                        <p style={{ fontWeight: 'bold' }}>Not likely percentage {Math.round((resultData.filter(item => item.Q1_Answer === 0).length / resultData.length * 100))}%</p>
                        <p style={{ fontWeight: 'bold' }}>Don’t know percentage {Math.round((resultData.filter(item => item.Q1_Answer === 1).length / resultData.length * 100))}%</p>
                        <p style={{ fontWeight: 'bold' }}>Likely percentage {Math.round((resultData.filter(item => item.Q1_Answer === 2).length / resultData.length * 100))}%</p>
                    </div>
                </div>
                    :
                    ''
            }


            <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
                    onClick={event => {
                        event.preventDefault();
                        setSubmitDisabled(false);
                        navigate('/poll_32');
                    }}
                    color="success"
                    type="submit"
                    style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >
                 <>Next question <span style={{ fontWeight: 'bold' }}>1/2</span></>
            </Button>

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>

            <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
                color="info"
                type="submit"
                onClick={_ => {
                    _.preventDefault()
                    getResult()
                }}
                style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >Refresh result</Button>

            <Button className="btn-round pull-right"
                color="info"
                style={{ marginRight: '20px' }}
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/presentation');
                }}>
            Home Page
            </Button>
        </form >
    );
}

export default Game31;
