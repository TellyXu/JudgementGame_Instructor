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

function Game21() {
    const [money, setMoney] = useState('');
    const [money2, setMoney2] = useState(-1);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData, setResultData] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Q1: money, // q1 是value
            Q2: money2,
            survey_number: 2, // survey_num是第几个survey
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
                    setResultData(data.filter(item => item.survey_num === 2 && item.version === 1))
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
                <Col className="ml-auto mr-auto" md="5.5" style={{ padding: '50px' }}>
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown">
                            You are generally a charitable person and regularly donate.  Your favorite charity reached out recently and requested a donation of <span
                            style={{fontWeight: 'bold', fontSize: '1.5em'}}>$400</span>.
                        </Label>
                        <Label htmlFor="ageComparisonDropdown">
                            How much would you donate?
                        </Label>
                        <Input
                            disabled={submitDisabled ? true : false}
                            style={{ marginTop: '15px' }}
                            aria-describedby="emailHelp"
                            placeholder="Enter an Amount"
                            type="number"
                            required
                            value={money}
                            onChange={_ => setMoney(_.target.value)}
                        ></Input>
                    </FormGroup>
                </Col>
            </Row>

            <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                <h3>Result</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Average donation amount:&nbsp;&nbsp;</p>
                    <p style={{ fontWeight: 'bold' }}>{Math.round(getAvg(resultData.map(item => item.Q1_Answer)))}</p>
                </div>
            </div>

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>


            <Button className="btn-round pull-right"
                    color="info"
                    type="button"
                    onClick={e=>{
                        e.preventDefault()
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

export default Game21;
