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

function Game32() {
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
            version: 2 // version是第几个group
        };

        try {
            const response = await fetch('https://judgementgame-instructor.onrender.com/submit', {
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
        fetch("https://judgementgame-instructor.onrender.com/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    setResultData(data.filter(item => item.survey_num === 9 && item.version === 2))
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
            <h1></h1>
            <Row>
                <Col className="ml-auto mr-auto" md="5.5" style={{padding: '50px', width: '100%'}}>
                    <FormGroup style={{width: '80%', margin: '0 auto'}}>
                        <Label htmlFor="ageComparisonDropdown" style={{fontWeight: 'bold', fontSize: '18px'}}>
                            AI will replace your current job in the next five years
                        </Label>
                        {!submitDisabled &&
                            <Label htmlFor="ageComparisonDropdown">
                                (Not likely, Don’t know, Likely)
                            </Label>}
                        {!submitDisabled &&
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
                        }
                    </FormGroup>
                </Col>
            </Row>

            {/*{*/}
            {/*    resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>*/}
            {/*        <h3>Result</h3>*/}
            {/*        <div style={{ height: '17rem', overflow: 'auto' }}>*/}
            {/*            <p style={{ fontWeight: 'bold' }}>Not likely percentage {Math.round((resultData.filter(item => item.q1_answer === 0).length / resultData.length * 100))}%</p>*/}
            {/*            <p style={{ fontWeight: 'bold' }}>Don’t know percentage {Math.round((resultData.filter(item => item.q1_answer === 1).length / resultData.length * 100))}%</p>*/}
            {/*            <p style={{ fontWeight: 'bold' }}>Likely percentage {Math.round((resultData.filter(item => item.q1_answer === 2).length / resultData.length * 100))}%</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*        :*/}
            {/*        ''*/}
            {/*}*/}

            <div style={{textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none'}}>
                <h3>Your response: {money === '0' ? 'Not likely' : money === '1' ? 'Don’t know' : 'Likely'}</h3>
            </div>


            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                    color="info"
                    type="submit"
                    style={{marginRight: '20px', display: submitDisabled ? 'none' : 'block'}}>Submit</Button>

            <Button className="btn-round pull-right" disabled={true}
                    color="success"
                    type="submit"
                    style={{marginRight: '20px', display: submitDisabled ? 'block' : 'none'}}><span
                style={{fontWeight: 'bold'}}>2/2</span></Button>


            {/* <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
                color="info"
                type="submit"
                onClick={_ => {
                    _.preventDefault()
                    getResult()
                }}
                style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >
                Refresh result
            </Button> */}

            <Button className="btn-round pull-right"
                    color="info"
                    style={{marginRight: '20px'}}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/presentation');
                    }}>
                Home Page
            </Button>

            <div style={{
                background: '#1e3246',
                position: 'absolute',
                bottom: '6px',
                left: '6px',
                padding: '10px',
                borderRadius: '4px',
                color: 'white',
                display: submitDisabled ? 'block' : 'none'
            }}>
                Please wait for Instructor
            </div>

        </form>
    );
}

export default Game32;
