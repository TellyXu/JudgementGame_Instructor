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

function Game13() {
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
            survey_number: 7, // survey_num是第几个survey
            version: 3 // version是第几个group
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
                    setResultData(data.filter(item => item.survey_num === 7 && item.version === 3))
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
                            To what extent did you find the tool useful?
                        </Label>
                        <Label htmlFor="ageComparisonDropdown">
                            5-point scale, 1=not at all useful, 5=very useful
                        </Label>
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {money ? money : 'Select point'}
                            </DropdownToggle>
                            <DropdownMenu>
                                {/*<DropdownItem onClick={() => setMoney('0')}>0</DropdownItem>*/}
                                <DropdownItem onClick={() => setMoney('1')}>1</DropdownItem>
                                <DropdownItem onClick={() => setMoney('2')}>2</DropdownItem>
                                <DropdownItem onClick={() => setMoney('3')}>3</DropdownItem>
                                <DropdownItem onClick={() => setMoney('4')}>4</DropdownItem>
                                <DropdownItem onClick={() => setMoney('5')}>5</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </FormGroup>
                </Col>
            </Row>

            {
                resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                    {/*<p style={{ fontWeight: 'bold' }}>0 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 0).length / resultData.length * 100))}%</p>*/}
                    <p style={{ fontWeight: 'bold' }}>1 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 1).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>2 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 2).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>3 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 3).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>4 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 4).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>5 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 5).length / resultData.length * 100))}%</p>
                </div>
                    :
                    ''
            }

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>



            <Button className="btn-round pull-right" disabled={true}
                color="success"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} ><span style={{ fontWeight: 'bold' }}>3/3</span></Button>

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

        </form>
    );
}

export default Game13;
