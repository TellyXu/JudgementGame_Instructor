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
import { useModal } from '../../components/Modal.js'
import '../../components/Modal.css';
function GandhiSurvey() {
    const [ageComparison, setAgeComparison] = useState('');
    const [gandhiAge, setGandhiAge] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);

    const { showModal } = useModal();
    const navigate = useNavigate();

    const handleDropdownSelect = (value) => {
        setAgeComparison(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Ensure that both fields are filled
        if (!ageComparison || !gandhiAge) {
            showModal('Please fill out both fields!');
            return;
        }

        // Convert 'before' to 0 and 'after' to 1
        const ageComparisonValue = ageComparison === 'before' ? 0 : 1;

        const data = {
            Q1: ageComparisonValue,
            Q2: parseInt(gandhiAge, 10),
            survey_number: 1,
            version: 1
        };

        try {
            const response = await fetch('https://judgementgame-instructor.onrender.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                //showModal('Survey submitted successfully!');

                setSubmitDisabled(true)

                getResult()

                // navigate('/');

            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            alert('Error:', error);
        }
    };

    const getResult = async () => {
        fetch("https://judgementgame-instructor.onrender.com/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    setResultData(data.filter(item => item.survey_num === 1 && item.version === 1))
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
            <h1>  </h1>
            <Row>
                <Col className="ml-auto mr-auto" md="5.5">
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown">
                            Did Gandhi die before or after the age of <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>144</span>?
                        </Label>
                        {!submitDisabled&&
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {ageComparison ? ageComparison : 'Select before/after'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => handleDropdownSelect('before')}>Before</DropdownItem>
                                <DropdownItem onClick={() => handleDropdownSelect('after')}>After</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>}
                    </FormGroup>
                </Col>
                <Col className="ml-auto mr-auto" md="4">
                    <FormGroup>
                        <Label htmlFor="gandhiAgeInput">What age did Gandhi die at?</Label>
                        {!submitDisabled&&<Input
                            disabled={submitDisabled ? true : false}
                            type="number"
                            name="gandhi_age"
                            id="gandhiAgeInput"
                            value={gandhiAge}
                            onChange={(e) => setGandhiAge(e.target.value)}
                            required
                        />}
                    </FormGroup>
                </Col>
            </Row>


            {/* <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                <h3>Result</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ width: '', textAlign: 'left' }}>Before:&nbsp;&nbsp;</p> <p style={{ marginRight: '60px' }}>{(resultData.filter(item => item.q1_answer === 0).length)} ({Math.round((resultData.filter(item => item.q1_answer === 0).length / resultData.length * 100))}%)</p>
                    <p style={{ width: '', textAlign: 'left' }}>After:&nbsp;&nbsp;</p> <p> {(resultData.filter(item => item.q1_answer === 1).length)}({Math.round((resultData.filter(item => item.q1_answer === 1).length / resultData.length * 100))}%)</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Average age:&nbsp;&nbsp;</p>
                    <p>{Math.round(getAvg(resultData.map(item => item.q2_answer)))}</p>
                </div>
            </div> */}
            <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                <h3>Your response: {ageComparison}, {gandhiAge} years</h3>
            </div>



            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>

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
                style={{ marginRight: '20px' }}
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
            }}

            >
                Please wait for Instructor
            </div>


        </form>
    );
}

export default GandhiSurvey;
