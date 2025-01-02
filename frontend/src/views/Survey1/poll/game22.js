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

function Game22() {
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
            survey_number: 8, // survey_num是第几个survey
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
                    setResultData(data.filter(item => item.survey_num === 8 && item.version === 2))
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
                            Rate the risk of committing a crime
                        </Label>
                        <Label htmlFor="ageComparisonDropdown" >
                            (not a misdemeanor) on a scale of 1-10; 1=lowest risk, 10=highest risk
                        </Label>
                        <Input
                            disabled={submitDisabled ? true : false}
                            style={{ marginTop: '15px', width: '100%' }}
                            aria-describedby="emailHelp"
                            placeholder="Enter a Rate"
                            type="number"
                            min={0}
                            max={10}
                            required
                            value={money}
                            onChange={_ => setMoney(_.target.value)}
                        ></Input>
                    </FormGroup>
                </Col>
            </Row>

            {
                resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
                    <p style={{ fontWeight: 'bold' }}>0 percentage {Math.round((resultData.filter(item => item.q1_answer === 0).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>1 percentage {Math.round((resultData.filter(item => item.q1_answer === 1).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>2 percentage {Math.round((resultData.filter(item => item.q1_answer === 2).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>3 percentage {Math.round((resultData.filter(item => item.q1_answer === 3).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>4 percentage {Math.round((resultData.filter(item => item.q1_answer === 4).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>5 percentage {Math.round((resultData.filter(item => item.q1_answer === 5).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>6 percentage {Math.round((resultData.filter(item => item.q1_answer === 6).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>7 percentage {Math.round((resultData.filter(item => item.q1_answer === 7).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>8 percentage {Math.round((resultData.filter(item => item.q1_answer === 8).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>9 percentage {Math.round((resultData.filter(item => item.q1_answer === 9).length / resultData.length * 100))}%</p>
                    <p style={{ fontWeight: 'bold' }}>10 percentage {Math.round((resultData.filter(item => item.q1_answer === 10).length / resultData.length * 100))}%</p>
                </div>
                    :
                    ''
            }

            <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
                color="info"
                type="submit"
                style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>

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
                style={{ marginRight: '20px' }}
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/presentation');
                }}>
                Home Page
            </Button>

            <div style={{ background: '#1e3246', position: 'absolute', bottom: '6px', left: '6px', padding: '10px', borderRadius: '4px', color: 'white' }} >
                Please wait for Instructor
            </div>

        </form>
    );
}

export default Game22;
