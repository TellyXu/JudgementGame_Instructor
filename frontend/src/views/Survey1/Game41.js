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
// 6
function Game31() {
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
        fetch("http://localhost:8001/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    setResultData([...data.filter(item => item.survey_num === 3 && item.version === 1)])
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
        <form onSubmit={handleSubmit} className="gandhi-survey-form" style={{ padding: '30px' }}>

            <Label style={{ marginBottom: '5px' }}>
                Congratulations! You have just been elected as mayor of a small town in Cold Mountain with 600 inhabitants.
            </Label>
            <Label>
                Bad news! Just after you are elected, a mysterious epidemic disease (much worse than the H1N1 flu) will attack your small town very soon.
            </Label>
            <Label style={{ marginBottom: '20px', borderBottom: '1px solid red' }}>

                The doctors rush to look for cure for the disease, and find two kinds of vaccines. You can only choose one to use in your town.

            </Label>
            <Row>
                <Col className="ml-auto mr-auto" >
                    <FormGroup>
                        <Label htmlFor="ageComparisonDropdown">

                            <Label style={{ marginBottom: '0' }}>
                                Vaccine A: 400 (out of 600) people will die from this disease;
                            </Label>
                            <Label style={{ marginBottom: '0' }}>
                                Vaccine B: with 1/3 probability, nobody dies; with 2/3 probability all 600 will die.
                            </Label>

                            <Label style={{ marginBottom: '0', fontWeight: 'weight' }}>
                                Which one will you choose?
                            </Label>
                        </Label>
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                                {select1 ? (select1 === '1' ? 'A' : 'B') : 'Select A or B'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setSelect1('1')}>A</DropdownItem>
                                <DropdownItem onClick={() => setSelect1('2')}>B</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </FormGroup>
                </Col>
            </Row>

            <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                <h3>Result</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Vaccine A Count:&nbsp;&nbsp;</p>
                    <p style={{ fontWeight: 'bold' }}>{(resultData.filter(item => item.Q1_Answer === 1)).length}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Vaccine B Count:&nbsp;&nbsp;</p>
                    <p style={{ fontWeight: 'bold' }}>{(resultData.filter(item => item.Q1_Answer === 2)).length}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Vaccine A percentage:&nbsp;&nbsp;</p>
                    <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.Q1_Answer === 1).length / resultData.length * 100))}%</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Vaccine B percentage:&nbsp;&nbsp;</p>
                    <p style={{ fontWeight: 'bold' }}>{Math.round((resultData.filter(item => item.Q1_Answer === 2).length / resultData.length * 100))}%</p>
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

export default Game31;
