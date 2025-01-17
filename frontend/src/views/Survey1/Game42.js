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
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState(-1);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!select1) {
            alert('Please select data')
            return
        }

        const data = {
            Q1: select1, // q1 是value
            Q2: select2,
            survey_number: 3, // survey_num是第几个survey
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
                // navigate('/');  // 这里使用navigate来跳转
                setSubmitDisabled(true)
                getResult()
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
                    setResultData(data.filter(item => item.survey_num === 3 && item.version === 2))
                    return
                }
                alert('Data loading error')

            });
    }

    const getAvg = (values) => {
        try {
            if (values.length === 0) {
                return ''
            }
            const sum = values.reduce((previous, current) => current += previous);
            const avg = sum / values.length;
            return avg
        } catch (error) {
            return ''
        }
    }

    return (
        <form onSubmit={handleSubmit} className="gandhi-survey-form" style={{padding: '30px'}}>
            <Label style={{marginBottom: '5px'}}>
                Congratulations! You have just been elected as mayor of a small town in Cold Mountain with 600
                inhabitants.

            </Label>
            <Label>

                Bad news! Just after you are elected, a mysterious epidemic disease (much worse than the H1N1 flu) will
                attack your small town very soon.
            </Label>
            <Label style={{marginBottom: '20px', borderBottom: '1px solid red'}}>

                The doctors rush to look for cure for the disease, and find two kinds of vaccines. You can only choose
                one to use in your town.
            </Label>
            <Row>
                <Col className="ml-auto mr-auto">
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown">

                            <Label style={{marginBottom: '0'}}>
                                Vaccine C: it will save 200 (out of 600) people
                            </Label>
                            <Label style={{marginBottom: '0'}}>
                                Vaccine D: with 1/3 probability, all 600 will be saved, with 2/3 probability nobody of
                                the 600 will be saved.
                            </Label>

                            <Label style={{marginBottom: '0', fontWeight: 'weight'}}>
                                Which one will you choose?
                            </Label>
                        </Label>
                        {!submitDisabled&&
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {select1 ? (select1 === '3' ? 'C' : 'D') : 'Select C or D'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setSelect1('3')}>C</DropdownItem>
                                <DropdownItem onClick={() => setSelect1('4')}>D</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>}

                    </FormGroup>
                </Col>
            </Row>

            {/*<div style={{textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none'}}>*/}
            {/*    <h3>Result</h3>*/}
            {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*        <p>Vaccine C Count:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{fontWeight: 'bold'}}>{(resultData.filter(item => item.q1_answer === 3)).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*        <p>Vaccine D Count:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{fontWeight: 'bold'}}>{(resultData.filter(item => item.q1_answer === 4)).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*        <p>Vaccine C percentage:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{fontWeight: 'bold'}}>{Math.round((resultData.filter(item => item.q1_answer === 3).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*        <p>Vaccine D percentage:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{fontWeight: 'bold'}}>{Math.round((resultData.filter(item => item.q1_answer === 4).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div style={{textAlign: 'center', padding: '0 40px'}}>
                {submitDisabled && (
                    <h3>Your
                        response: {select1 === '1' ? 'A' : select1 === '2' ? 'B' : select1 === '3' ? 'C' : 'D'}</h3>
                )}
            </div>

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                    color="info"
                    type="submit"
                    style={{display: submitDisabled ? 'none' : 'block'}}>Submit</Button>

            {/* <Button className="btn-round pull-right"
                    color="info"
                    type="button"
                    onClick={e=>{
                        e.preventDefault()
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
