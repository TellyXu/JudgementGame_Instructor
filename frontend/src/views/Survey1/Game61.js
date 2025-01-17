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
function Game61() {
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
            survey_number: 5, // survey_num是第几个survey
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
                    setResultData(data.filter(item => item.survey_num === 5 && item.version === 1))
                    return
                }
                alert('Data loading error')

            });
    }

    return (
        <form onSubmit={handleSubmit} className="gandhi-survey-form" style={{padding: '30px'}}>
            <Label>
                You go to an office end-of-year party where your colleagues have brought their partners. Your colleague
                introduces you to her partner, Mark, noting that Mark has a Ph.D., he loves poetry, and loved our cat!
            </Label>

            <Row>
                <Col className="ml-auto mr-auto">
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown">
                            <Label>
                                You have to guess if Mark plays Golf or Soccer
                            </Label>
                        </Label>
                        {!submitDisabled&&
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {select1 ? (select1 === '0' ? 'Golf' : 'Soccer') : 'Select Golf or Soccer'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setSelect1('0')}>Golf</DropdownItem>
                                <DropdownItem onClick={() => setSelect1('1')}>Soccer</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        }
                    </FormGroup>
                </Col>
            </Row>

            {/*<div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>*/}
            {/*    <h3>Result</h3>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>Golf total count:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{(resultData.filter(item => item.q1_answer === 0)).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>Soccer total count: &nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{(resultData.filter(item => item.q1_answer === 1)).length}</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>Golf percentage:&nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.q1_answer === 0).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
            {/*        <p>Soccer percentage: &nbsp;&nbsp;</p>*/}
            {/*        <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.q1_answer === 1).length / resultData.length * 100))}%</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div style={{textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none'}}>
                <h3>Your response: {select1 === '0' ? 'Golf' : 'Soccer'}</h3>
            </div>

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                    color="info"
                    type="submit"
                    style={{display: submitDisabled ? 'none' : 'block'}}>Submit</Button>

            {/* <Button className="btn-round pull-right"
                color="info"
                type="button"
                onClick={e => {
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

export default Game61;
