// import React, { useState } from 'react';
// import {
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     FormGroup,
//     Label,
//     Input,
//     Button,
//     Row,
//     Col
// } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
//
// function Game21() {
//     const [money, setMoney] = useState('');
//     const [money2, setMoney2] = useState(-1);
//     const [submitDisabled, setSubmitDisabled] = useState(false);
//     const [resultData, setResultData] = useState([]);
//     const navigate = useNavigate();
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//
//         const data = {
//             Q1: money, // q1 是value
//             Q2: -1,
//             survey_number: 8, // survey_num是第几个survey
//             version: 1 // version是第几个group
//         };
//
//         try {
//             const response = await fetch('http://localhost:8001/submit', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data)
//             });
//             const result = await response.json();
//             if (response.ok) {
//                 alert('Survey submitted successfully!');
//
//                 setSubmitDisabled(true)
//                 getResult()
//                 // navigate('/');  // 这里使用navigate来跳转
//             } else {
//                 alert(`Error: ${result.error}`);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
//
//     const getResult = async () => {
//         fetch("http://localhost:8001/find", { method: 'POST' })
//             .then((response) => response.json())
//             .then(({ data, code }) => {
//                 console.log('data' + code, data)
//                 if (code === 200) {
//                     setResultData(data.filter(item => item.survey_num === 8 && item.version === 1))
//                     return
//                 }
//                 alert('Data loading error')
//             });
//     }
//
//     const repeatCount = (val) => {
//         let count = 1
//         resultData.map(item => item.text_val)
//         for (let index = 0; index < resultData.length; index++) {
//             if (resultData[index].text_val === val) count++
//         }
//         return count
//     }
//
//     return (
//         <form onSubmit={handleSubmit} className="gandhi-survey-form">
//             <h1>  </h1>
//             <Row>
//                 <Col className="ml-auto mr-auto" md="5.5" style={{ padding: '50px', width: '100%' }}>
//                     <FormGroup style={{ width: '80%', margin: '0 auto' }}>
//                         <Label htmlFor="ageComparisonDropdown" style={{ fontWeight: 'bold', fontSize: '18px' }}>
//                             Rate the risk of committing a crime
//                         </Label>
//                         <Label htmlFor="ageComparisonDropdown" >
//                             (not a misdemeanor) on a scale of 1-10; 1=lowest risk, 10=highest risk
//                         </Label>
//                         <Input
//                             disabled={submitDisabled ? true : false}
//                             style={{ marginTop: '15px', width: '100%' }}
//                             aria-describedby="emailHelp"
//                             placeholder="Enter a Rate"
//                             type="number"
//                             min={0}
//                             max={10}
//                             required
//                             value={money}
//                             onChange={_ => setMoney(_.target.value)}
//                         ></Input>
//                     </FormGroup>
//                 </Col>
//             </Row>
//
//             {
//                 resultData.length > 0 ? <div style={{ textAlign: 'center', padding: '0 40px', display: submitDisabled ? 'block' : 'none' }}>
//                     <p style={{ fontWeight: 'bold' }}>0 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 0).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>1 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 1).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>2 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 2).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>3 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 3).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>4 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 4).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>5 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 5).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>6 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 6).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>7 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 7).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>8 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 8).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>9 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 9).length / resultData.length * 100))}%</p>
//                     <p style={{ fontWeight: 'bold' }}>10 percentage {Math.round((resultData.filter(item => item.Q1_Answer === 10).length / resultData.length * 100))}%</p>
//                 </div>
//                     :
//                     ''
//             }
//
//             <Button className="btn-round pull-right" disabled={submitDisabled ? true : false}
//                 color="info"
//                 type="submit"
//                 style={{ marginRight: '20px', display: submitDisabled ? 'none' : 'block' }} >Submit</Button>
//
//             <Button className="btn-round pull-right" disabled={submitDisabled ? false : true}
//                 color="info"
//                 type="submit"
//                 onClick={_ => {
//                     _.preventDefault()
//                     getResult()
//                 }}
//                 style={{ marginRight: '20px', display: submitDisabled ? 'block' : 'none' }} >Refresh result</Button>
//
//             <Button className="btn-round pull-right"
//         color="info"
//         style={{ marginRight: '20px' }}
//         onClick={(e) => {
//             e.preventDefault();
//             navigate('/presentation');
//         }}>
//     Home Page
// </Button>
//
//         </form>
//     );
// }
//
// export default Game21;

import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './game21.css';
import person1 from '../../../assets/svg/person1.svg';

function CombinedGame() {
    const [money1, setMoney1] = useState('');
    const [money2, setMoney2] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resultData1, setResultData1] = useState([]);
    const [resultData2, setResultData2] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data1 = {
            Q1: money1,
            Q2: -1,
            survey_number: 8,
            version: 1
        };
        const data2 = {
            Q1: money2,
            Q2: -1,
            survey_number: 8,
            version: 2
        };

        try {
            const responses = await Promise.all([
                fetch('http://localhost:8001/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data1)
                }),
                fetch('http://localhost:8001/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data2)
                })
            ]);

            const results = await Promise.all(responses.map(res => res.json()));
            if (responses.every(res => res.ok)) {
                alert('All surveys submitted successfully!');
                setSubmitDisabled(true);
                getResult(); // Assuming getResult will handle results for both versions
            } else {
                const errors = results.map((result, index) => `Game ${index + 21}: ${result.error}`).join('\n');
                alert(`Error: ${errors}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting surveys');
        }
    };


    const getResult = async () => {
        try {
            const response = await fetch("http://localhost:8001/find", { method: 'POST' });
            const { data, code } = await response.json();
            if (code === 200) {
                setResultData1(data.filter(item => item.survey_num === 8 && item.version === 1));
                setResultData2(data.filter(item => item.survey_num === 8 && item.version === 2));
            } else {
                alert('Data loading error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load results');
        }
    };

    return (

        <form onSubmit={handleSubmit} className="gandhi-survey-form">
            <Col style={{height:'70vh',overflow: 'auto' }}>

                <Row className="ml-auto mr-auto" style={{padding: '50px'}}>


                    <Col md="5" style={{padding: '00px'}}>
                        <Label>
                            Person 1 and a friend were in a rush to pick up a child from school. They attempted to steal
                            a bike and a scooter (worth $80 collectively) belonging to a 6-year old. The mother saw the
                            two people and yelled. They ran away. Person 1 had 4 previous juvenile misdemeanor charges.
                        </Label>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url(" +
                                require("assets/img/personPicture1.png") +
                                ")",
                            backgroundSize: 'cover',
                            opacity: '0.2',
                            zIndex: 0
                        }}></div>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="5" style={{padding: '00px'}}>
                        <Label>
                            Person 2 stole tools from a hardware store worth $86.35. Previously Person 2 spent 5 years
                            in prison and armed robbery and attempted armed robber and was charged a 3rd time for
                            attempted armed robbery.
                        </Label>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url(" +
                                require("assets/img/personPicture2.png") +
                                ")",
                            backgroundSize: 'cover',
                            opacity: '0.2',
                            zIndex: 0
                        }}></div>
                    </Col>
                    <Col md="10" style={{padding: '00px'}}>
                        <Label htmlFor="ageComparisonDropdown" style={{fontWeight: 'bold', fontSize: '18px'}}>
                            You are the judge. You have to determine the risk of Person 1 or Person 2 committing a CRIME in
                            the next two years.
                        </Label>
                    </Col>
                    <Col md="2" style={{padding: '00px'}}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url(" +
                                require("assets/img/judgePicture3.png") +
                                ")",
                            backgroundSize: 'cover',
                            opacity: '0.8',
                            zIndex: 0
                        }}></div>
                    </Col>
                    <Label>
                        Rate the risk of committing a crime
                    </Label>
                    <Label htmlFor="ageComparisonDropdown">
                        (not a misdemeanor) on a scale of 1-10; 1=lowest risk, 10=highest risk
                    </Label>

                    <Col md="6" style={{padding: '20px'}}>
                        <FormGroup>
                            <Label style={{fontWeight: 'bold', fontSize: '18px'}}>
                                Person 1
                            </Label>
                            <Input
                                disabled={submitDisabled}
                                type="number"
                                min={1}
                                max={10}
                                value={money1}
                                onChange={e => setMoney1(e.target.value)}
                                required
                            ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="6" style={{padding: '20px'}}>
                        <FormGroup>
                            <Label style={{fontWeight: 'bold', fontSize: '18px'}}>
                                Person 2
                            </Label>
                            <Input
                                disabled={submitDisabled}
                                type="number"
                                min={1}
                                max={10}
                                value={money2}
                                onChange={e => setMoney2(e.target.value)}
                                required
                            ></Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="6" style={{padding: '0px'}}>
                        {
                            resultData1.length > 0 ? <div style={{
                                    textAlign: 'center',
                                    padding: '0 40px',
                                    display: submitDisabled ? 'block' : 'none',
                                fontSize: '10px'
                            }}>
                                {/*<p style={{fontWeight: 'bold'}}>0*/}
                                {/*    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 0).length / resultData1.length * 100))}%</p>*/}
                                <p style={{fontWeight: 'bold'}}>1
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 1).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>2
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 2).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>3
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 3).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>4
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 4).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>5
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 5).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>6
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 6).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>7
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 7).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>8
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 8).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>9
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 9).length / resultData1.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>10
                                    percentage {Math.round((resultData1.filter(item => item.Q1_Answer === 10).length / resultData1.length * 100))}%</p>
                            </div>
                            :
                            ''
                    }
                </Col>
                <Col md="6" style={{padding: '0px'}}>
                    {
                        resultData2.length > 0 ? <div style={{
                                textAlign: 'center',
                                padding: '0 40px',
                                display: submitDisabled ? 'block' : 'none',
                                fontSize: '10px'
                            }}>
                                {/*<p style={{fontWeight: 'bold'}}>0*/}
                                {/*    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 0).length / resultData2.length * 100))}%</p>*/}
                                <p style={{fontWeight: 'bold'}}>1
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 1).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>2
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 2).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>3
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 3).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>4
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 4).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>5
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 5).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>6
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 6).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>7
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 7).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>8
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 8).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>9
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 9).length / resultData2.length * 100))}%</p>
                                <p style={{fontWeight: 'bold'}}>10
                                    percentage {Math.round((resultData2.filter(item => item.Q1_Answer === 10).length / resultData2.length * 100))}%</p>
                            </div>
                            :
                            ''
                    }
                </Col>
            </Row>

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
            </Col>
        </form>
    );
}

export default CombinedGame;
