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

function Game11() {
    const [select1, setSelect1] = useState('');
    const [money2, setMoney2] = useState(-1);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Q1: select1, // q1 是value
            Q2: select1,
            survey_number: 7, // survey_num是第几个survey
            version: 1 // version是第几个group
        };

        try {
            const response = await fetch('https://judgementgame-instructor.onrender.com/submit', {
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
        fetch("https://judgementgame-instructor.onrender.com/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    setResultData(data.filter(item => item.survey_num === 7 && item.version === 1))
                    return
                }
                alert('Data loading error')

            });
    }

    const getAvg = (values) => {
        if (values.length === 0) {
            return ''
        }
        const sum = values.reduce((previous, current) => current += previous);
        const avg = sum / values.length;
        return avg
    }

    return (
        <form onSubmit={handleSubmit} className="gandhi-survey-form">
            <h1></h1>
            <Row>
                <Col className="ml-auto mr-auto" md="5.5" style={{padding: '50px'}}>
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown" style={{fontWeight: 'bold', fontSize: '18px'}}>
                            Have you personally used an AI productivity tool?
                        </Label>
                        {!submitDisabled &&
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {select1 ? (select1 !== '0' ? 'YES' : 'NO') : 'Select YES or NO'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setSelect1('1')}>YES</DropdownItem>
                                <DropdownItem onClick={() => setSelect1('0')}>NO</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>}
                    </FormGroup>
                </Col>
            </Row>

            {/*<div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>*/}
            {/*    <h3>Result</h3>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>YES total count:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{resultData.filter(item => item.q1_answer === 1).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>NO total count:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{resultData.filter(item => item.q1_answer === 0).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>YES percentage:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.q1_answer === 1).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>NO percentage:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.q1_answer === 0).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div style={{textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none'}}>
                <h3>Your response: {(select1 !== '0' ? 'YES' : 'NO')}</h3>
            </div>

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                    color="info"
                    type="submit"
                    style={{marginRight: '20px', display: submitDisabled ? 'none' : 'block'}}>Submit</Button>

            <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
                    onClick={event => {
                        event.preventDefault();
                        setSubmitDisabled(false);

                        if (select1 === '1') { // If "YES" is selected
                            navigate('/poll_12');
                        } else if (select1 === '0') { // If "NO" is selected
                            navigate('/presentation');
                        }

                        setSelect1('');
                    }}
                    color="success"
                    type="submit"
                    style={{marginRight: '20px', display: submitDisabled ? 'block' : 'none'}}>
                {select1 === '0' ? 'Home Page' : <>Next question <span style={{fontWeight: 'bold'}}>1/3</span></>}
            </Button>

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

export default Game11;
