import React, { useState } from "react";
// javascript library that creates a parrallax effect
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PiA from "../components/Pia"
import Box from "../components/Box"
import combinedbox from "../components/combinedbox"
import { Button } from "reactstrap";
import FooterBlack from "../components/Footers/FooterBlack";
import { Card, Container, Row, Col, Alert } from "reactstrap";
import { useNavigate } from 'react-router-dom';

import "./base.scss"
import CombinedBoxEchart from "../components/combinedbox";
import DualBoxEchart from "../components/combinedbox";

function Dashboard({ show }) {
    const navigate = useNavigate();

    const [p0, setP0] = useState([]);
    const [p1, setP1] = useState([]);
    const [p2, setP2] = useState([]);
    const [p3, setP3] = useState([]);
    const [p4, setP4] = useState([]);
    // !~ survey2 data
    const [survey2Data, setSurvey2Data] = useState([]);
    //~!

    const [resultData, setResultData] = useState([]);


    // !~ survey3 data
    const [survey3Data, setSurvey3Data] = useState([]);
    // ~!

    // !~ survey4 data
    const [survey4Data, setSurvey4Data] = useState([]);
    // ~!

    // !~ survey5 data
    const [survey5Data, setSurvey5Data] = useState([]);
    // ~!

    // !~ survey6 data
    const [survey6Data, setSurvey6Data] = useState([]);
    // ~!

    // !~ poll1 data
    const [survey7Data, setSurvey7Data] = useState([]);
    // ~!

    // !~ poll2 data
    const [survey8Data, setSurvey8Data] = useState([]);
    // ~!

    // !~ poll3 data
    const [survey9Data, setSurvey9Data] = useState([]);
    // ~!

    const [_data, _setData] = useState([]);
    const getaData = () => {
        fetch("http://localhost:8001/find", { method: 'POST' })
            .then((response) => response.json())
            .then(({ data, code }) => {
                console.log('data' + code, data)
                if (code === 200) {
                    _setData(data)
                    setP0(data.filter(item => item.survey_num === 1 && item.version === 1))
                    setP1(data.filter(item => item.survey_num === 1 && item.version === 2))
                    setP2(data.filter(item => item.survey_num === 1 && item.version === 1))
                    setP3(data.filter(item => item.survey_num === 1 && item.version === 2))
                    setP4(data.filter(item => item.survey_num === 1))
                    // !~ survey2 data
                    setSurvey2Data(data.filter(item => item.survey_num === 2))
                    //~!

                    // !~ survey3 data
                    setSurvey3Data(data.filter(item => item.survey_num === 3))
                    //~!

                    // !~ survey4 data
                    setSurvey4Data(data.filter(item => item.survey_num === 4))
                    //~!

                    // !~ survey5 data
                    setSurvey5Data(data.filter(item => item.survey_num === 5))
                    //~!

                    // !~ survey6 data
                    setSurvey6Data(data.filter(item => item.survey_num === 6))
                    //~!

                    // !~ poll1 data
                    setSurvey7Data(data.filter(item => item.survey_num === 7))
                    setResultData(data.filter(item => item.survey_num === 7))
                    //~!

                    // !~ poll2 data
                    setSurvey8Data(data.filter(item => item.survey_num === 8))
                    //~!

                    // !~ poll3 data
                    setSurvey9Data(data.filter(item => item.survey_num === 9))
                    //~!

                    // alert('Refresh success')
                    return
                }
                alert('Data loading error')

            });
    }




    const normalizeText = (text) => {
        if (text == null) return ""; // 检查null和undefined
        return text.replace(/\s+/g, '').toLowerCase(); // 去除所有空格并转换为小写
    };

    const uniqueNormalizedValues = () => {
        const normalizedSet = new Set(resultData.map(item => normalizeText(item.text_val)));
        return Array.from(normalizedSet);
    };

    const repeatCount = (normalizedVal) => {
        let count = 0;
        resultData.forEach(item => {
            if (normalizeText(item.text_val) === normalizedVal) {
                count++;
            }
        });
        return count;
    }

    React.useEffect(() => {
        getaData()
    }, [])

    return (
        <>
            <ScrollTransparentNavbar />
            <div style={{ minHeight: '100vh' }}>

                <div className="contactus-1 section-image"
                    style={{

                        display: 'flex', // 使用flex布局
                        flexDirection: 'column', // 子元素垂直排列
                        justifyContent: 'center', // 垂直居中
                        alignItems: 'center', // 水平居中
                        minHeight: '100vh',
                        backgroundImage: "url(" + require("assets/img/HBC_JHU5704_c_3000x2000.jpg") + ")",
                        backgroundSize: 'cover', // 确保背景图片覆盖整个容器
                        backgroundRepeat: 'no-repeat', // 背景图片不重复
                        backgroundPosition: 'center center', // 背景图片居中显示
                    }}>
                    <Container>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
                            <Button color="info" onClick={() => { navigate('/presentation'); }}>Home Page</Button>
                            <Button color="info" onClick={_ => getaData()} style={{ marginLeft: '20px' }}>Refresh Dashboard</Button>
                            {(show <= 6) && <Button
                                color="info"
                                onClick={() => {
                                    if (show === 1 || show === 2) {
                                        navigate('/text12');
                                    } else if (show === 3 || show === 4) {
                                        navigate('/text34');
                                    } else if (show === 5) {
                                        navigate('/text5');
                                    } else if (show === 6) {
                                        navigate('/text6');
                                    }
                                }}
                                style={{ marginLeft: '20px' }}
                            >
                                {show === 1 || show === 2
                                    ? 'ANCHORING EFFECT BIAS'
                                    : show === 3 || show === 4
                                        ? 'FRAMING AND LOSS AVERSION'
                                        : show === 5
                                            ? 'MENTAL ACCOUNTING'
                                            : show === 6
                                                ? 'BASE RATE FALLACY'
                                                : 'DEFAULT TEXT'}
                            </Button>
                            }
                        </div>

                        {
                            show === 1 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 1</h2>
                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div style={{ background: '#ffffff', padding: '15px', borderRadius: '10px' }}>
                                        <p>
                                            Did Gandhi die before or after the age of <strong>144</strong>?
                                        </p>
                                        {/* <PiA filter={[1, 0]} pData={p0} keyName='Q1_Answer' tag={['Before', 'After']} /> */}
                                        <hr></hr>
                                        <p className="text-14">Before: {Math.round((p0.filter(item => item.Q1_Answer === 0).length / (_data.filter(item => item.survey_num === 1 && item.version === 1).length)) * 100)}%</p>
                                        <p className="text-14">After: {Math.round((p0.filter(item => item.Q1_Answer === 1).length / (_data.filter(item => item.survey_num === 1 && item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div style={{ marginLeft: '20px', background: '#ffffff', padding: '15px', borderRadius: '10px' }}>
                                        <p>
                                            Did Gandhi die before or after the age of <strong>32</strong>?
                                        </p>
                                        {/* <PiA filter={[1, 0]} pData={p1} keyName='Q1_Answer' tag={['Before', 'After']} /> */}
                                        <hr></hr>
                                        <p className="text-14">Before: {Math.round((p1.filter(item => item.Q1_Answer === 0).length / (_data.filter(item => item.survey_num === 1 && item.version === 2).length)) * 100)}%</p>
                                        <p className="text-14">After: {Math.round((p1.filter(item => item.Q1_Answer === 1).length / (_data.filter(item => item.survey_num === 1 && item.version === 2).length)) * 100)}%</p>
                                    </div>
                                </div>

                                <div className="mt-2" style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div>
                                        <Box pData={p2} name='Judgement 1 Group 1 answer' keyName='Q2_Answer' Xname=' ' Yname='age'/>
                                    </div>
                                    <div style={{ marginLeft: '20px' }}>
                                        <Box pData={p3} name='Judgement 1 Group 2 answer' keyName='Q2_Answer' Xname=' ' Yname='age'/>
                                    </div>
                                    {/*<div style={{ marginLeft: '20px' }}>*/}
                                    {/*    <DualBoxEchart*/}
                                    {/*        pData1={p2} name1='Judgement 1 Group 1 answer' keyName1='Q2_Answer' Xname1=' ' Yname1='age'*/}
                                    {/*        pData2={p3} name2='Judgement 1 Group 2 answer' keyName2='Q2_Answer' Xname2=' ' Yname2='age'*/}
                                    {/*    />*/}
                                    {/*</div>*/}

                                    <div>
                                        <Box pData={p4} name='Judgement 1 Total answer' keyName='Q2_Answer' Xname=' ' Yname='age'/>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 2 && <div style={{ marginTop: "10px" }}>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 2</h2>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md">
                                    <p className="m-0 text-center mt-4">How much would you donate?</p>
                                </div>


                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>

                                    <div className="bbg-white">
                                        <div class={'container-tips text-14'}>
                                            <p className="m-0 tips">You are generally a charitable person and regularly donate. Your favorite charity reached out recently and requested a donation of <strong>$400</strong>.
                                            </p>
                                        </div>

                                        <Box pData={survey2Data.filter(item => item.version === 1)} name='Judgement 2 Group 1 answer'
                                            keyName='Q1_Answer' Xname=' ' Yname='$'/>
                                    </div>

                                    <div className="bbg-white ml-20">
                                        <div class={'container-tips text-14'}>
                                            <p className="m-0 tips">You are generally a charitable person and regularly donate. Your favorite charity reached out recently and requested a donation of <strong>$5</strong>.
                                            </p>
                                        </div>

                                        <Box pData={survey2Data.filter(item => item.version === 2)} name='Judgement 2 Group 2 answer'
                                            keyName='Q1_Answer' Xname=' ' Yname='$' />
                                    </div>

                                    <div className="bbg-white ml-20 mt-20">
                                        <div class={'container-tips text-14'}>

                                        </div>

                                        {/*<CombinedBoxEchart*/}
                                        {/*    dataGroup1={survey2Data.filter(item => item.version === 1)}*/}
                                        {/*    dataGroup2={survey2Data.filter(item => item.version === 2)}*/}
                                        {/*    name1='Group 1'*/}
                                        {/*    name2='Group 2'*/}
                                        {/*    keyName='Q1_Answer'*/}
                                        {/*/>*/}


                                        <div>
                                            <Box pData={survey2Data.filter(item => item.version === 1 || item.version === 2)} name='Judgement 2 Total answer' keyName='Q1_Answer' Xname=' ' />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        }

                        {
                            show === 5 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 5</h2>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md">
                                    <p className="m-0 text-center mt-4">Will you shift to another store?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="bbg-white-400">
                                        <div class={'container-tips text-14'} style={{height:'150px'}}>
                                            <p className="m-0 tips">You are shopping for a luxurious gray pinstripe suit for $425. You are about to buy it, and then another customer whispers that the exact same suit is on sale for $418 at another store 15 minutes away.</p>
                                        </div>
                                        {/* <PiA filter={[0, 1]} pData={survey4Data.filter(item => item.version === 1)}
                                            name='survey4_Q1_Answer' keyName='Q1_Answer' tag={['YES', 'NO']} /> */}
                                        <hr></hr>
                                        <p>YES: {Math.round((survey4Data.filter(item => item.Q1_Answer === 0 && item.version === 1).length / (survey4Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        <p>NO: {Math.round((survey4Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey4Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div className="bbg-white-400 ml-20">
                                        <div class={'container-tips text-14'} style={{height:'150px'}}>
                                            <p className="m-0 tips">You go to a store and find a nice pen for $25. Then you remember that the same pen is on sale for $18 at another store 15 minutes away.</p>
                                        </div>
                                        {/* <PiA filter={[0, 1]} pData={survey4Data.filter(item => item.version === 2)}
                                            name='survey4_Q2_Answer' keyName='Q1_Answer' tag={['YES', 'NO']} /> */}
                                        <hr></hr>
                                        <p>YES: {Math.round((survey4Data.filter(item => item.Q1_Answer === 0 && item.version === 2).length / (survey4Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>NO: {Math.round((survey4Data.filter(item => item.Q1_Answer === 1 && item.version === 2).length / (survey4Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 4 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 4</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md">
                                    <p className="m-0 tips">Congratulations! You have just been elected as mayor of a small town in Cold Mountain with 600 inhabitants.Bad news! Just after you are elected, a mysterious epidemic disease (much worse than the H1N1 flu) will attack your small town very soon.The doctors rush to look for cure for the disease, and find two kinds of vaccines. You can only choose one to use in your town.</p>
                                    <p className="m-0 text-center mt-4">Which one will you choose?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="bbg-white">
                                        <div class={'container-tips text-14'}>
                                            <p className="m-0 text-left mt-4">A: 400 (out of 600) people will die from this disease;</p>
                                            <p className="m-0 text-left mt-4">B: with 1/3 probability, nobody dies; with 2/3 probability all 600 will die.</p>
                                        </div>
                                        {/* <PiA filter={[1, 2]} pData={survey3Data.filter(item => item.version === 1)}
                                            name='survey3_Q1_Answer' keyName='Q1_Answer' tag={['A', 'B']} /> */}
                                        <hr></hr>
                                        <p>A: {Math.round((survey3Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey3Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        <p>B: {Math.round((survey3Data.filter(item => item.Q1_Answer === 2 && item.version === 1).length / (survey3Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div className="bbg-white ml-20">
                                        <div class={'container-tips text-14'}>
                                            <p className="m-0 text-left mt-4">C: it will save 200 (out of 600) people </p>
                                            <p className="m-0 text-left mt-4">D: with 1/3 probability, all 600 will be saved, with 2/3 probability nobody of the 600 will be saved. </p>
                                        </div>
                                        {/* <PiA filter={[3, 4]} pData={survey3Data.filter(item => item.version === 2)}
                                            name='survey3_Q2_Answer' keyName='Q1_Answer' tag={['C', 'D']} /> */}
                                        <hr></hr>
                                        <p>C: {Math.round((survey3Data.filter(item => item.Q1_Answer === 3 && item.version === 2).length / (survey3Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>D: {Math.round((survey3Data.filter(item => item.Q1_Answer === 4 && item.version === 2).length / (survey3Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 6 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 6</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md">
                                    <p className="m-0 tips">You go to an office end-of-year party where your colleagues have brought their partners. Your colleague introduces you to her partner, Mark, noting that Mark has a Ph.D., he loves poetry, and loved our cat!</p>
                                    <p className="m-0 tips">You have to guess if Mark plays Golf or Soccer</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="bbg-white">
                                        {/* <PiA filter={[0, 1]} pData={survey5Data} name='survey2_Q1_Answer' keyName='Q1_Answer'
                                            tag={['Golf', 'Soccer']} /> */}
                                        <p>Golf: {Math.round((survey5Data.filter(item => item.Q1_Answer === 0).length / (survey5Data.length)) * 100)}%</p>
                                        <p>Soccer: {Math.round((survey5Data.filter(item => item.Q1_Answer === 1).length / (survey5Data.length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 3 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Judgement 3</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md">
                                    <p className="m-0 tips">MedCo Inc. just developed a breakthrough therapy for a rare disease and did a study on its effectiveness. On a "6-point scale" with 6 being very good, and 1 being very bad, how would you evaluate the drug’s effect?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="bbg-white">
                                        <div className="container-tips text-14">
                                            <p className="m-0 text-center mt-4"> 100 patients took the medicine
                                                and <strong>70 patients got better</strong>.</p>
                                        </div>
                                        <hr/>
                                        <PiA isDiyData filter={[1, 2, 3, 4, 5, 6]}
                                             pData={survey6Data.filter(item => item.version === 1)}
                                             name='survey4_Q1_Answer'
                                             keyName='Q1_Answer' tag={['1', '2', '3', '4', '5', '6']}/>

                                        {/*<p>1: {Math.round((survey6Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                        {/*<p>2: {Math.round((survey6Data.filter(item => item.Q1_Answer === 2 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                        {/*<p>3: {Math.round((survey6Data.filter(item => item.Q1_Answer === 3 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                        {/*<p>4: {Math.round((survey6Data.filter(item => item.Q1_Answer === 4 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                        {/*<p>5: {Math.round((survey6Data.filter(item => item.Q1_Answer === 5 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                        {/*<p>6: {Math.round((survey6Data.filter(item => item.Q1_Answer === 6 && item.version === 1).length / (survey6Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}


                                    </div>
                                    <div className="bbg-white ml-20">
                                        <div className="container-tips text-14">
                                            <p className="m-0 text-center mt-4">100 patients took the medicine
                                                and <strong>30
                                                    patients did not get better</strong>.</p>
                                        </div>
                                        <hr/>
                                        <PiA isDiyData filter={[1, 2, 3, 4, 5, 6]}
                                             pData={survey6Data.filter(item => item.version === 2)}
                                             name='survey4_Q2_Answer'
                                             keyName='Q1_Answer' tag={['1', '2', '3', '4', '5', '6']}/>

                                        {/*<p>1: {Math.round((survey6Data.filter(item => item.Q1_Answer === 1 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                        {/*<p>2: {Math.round((survey6Data.filter(item => item.Q1_Answer === 2 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                        {/*<p>3: {Math.round((survey6Data.filter(item => item.Q1_Answer === 3 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                        {/*<p>4: {Math.round((survey6Data.filter(item => item.Q1_Answer === 4 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                        {/*<p>5: {Math.round((survey6Data.filter(item => item.Q1_Answer === 5 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                        {/*<p>6: {Math.round((survey6Data.filter(item => item.Q1_Answer === 6 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                    </div>
                                </div>


                            </div>
                        }

                        {
                            show === 7 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Poll 1</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>
                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', color: 'white' }}>
                                    <div>
                                        <div style={{ textAlign: 'center', background: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>1-1</h5>
                                            <p style={{ marginBottom: 0 }}>Have you personally used an AI productivity tool?</p>
                                            {/* <PiA filter={[0, 1]} pData={survey7Data.filter(item => item.version === 1)}
                                                name='survey4_Q1_Answer' keyName='Q1_Answer' tag={['YES', 'NO']} /> */}
                                            <hr />
                                            <p>YES: {Math.round((survey7Data.filter(item => item.Q1_Answer === 0 && item.version === 1).length / (survey7Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                            <p>NO: {Math.round((survey7Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey7Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '50px', textAlign: 'center', background: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
                                        <h5 style={{ marginBottom: 0 }}>1-2</h5>
                                        <p style={{ marginBottom: 0 }}>If yes, which one </p>
                                        <div style={{ height: '18.8rem', overflow: 'auto', color: "black", background: 'white', padding: '15px' }}>
                                            {
                                                [...new Set(survey7Data.map(item => normalizeText(item.text_val)))].filter(item => item).map(normalizedItem => {
                                                    // Look for arrays of original items that match the normalized value
                                                    const originalItems = survey7Data.filter(item => normalizeText(item.text_val) === normalizedItem);
                                                    // Pick the first matched item as the representative for display, and ensure it is displayed in lowercase without spaces
                                                    const originalText = originalItems.length > 0 ? normalizeText(originalItems[0].text_val) : "no text available";
                                                    return (
                                                        <div key={normalizedItem} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
                                                            <p style={{ width: '200px', textAlign: 'left' }}>{originalText}</p>
                                                            <p>repeat: {repeatCount(normalizedItem)}</p>
                                                        </div>
                                                    );
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ marginTop: '20px', textAlign: 'center', background: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>1-3</h5>
                                            <p style={{ marginBottom: 0 }}>To what extent did you find the tool useful? </p>
                                            <p style={{ marginBottom: 0 }}>(5-point scale, 1=not at all useful, 5=very useful)</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2, 3, 4, 5]}
                                                    pData={survey7Data.filter(item => item.version === 3)} name='poll 1-3'
                                                    keyName='Q1_Answer' tag={['0', '1', '2', '3', '4', '5']} /> */}
                                                <hr />
                                                {/*<p>0: {Math.round((survey7Data.filter(item => item.Q1_Answer === 0 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>*/}
                                                <p>1: {Math.round((survey7Data.filter(item => item.Q1_Answer === 1 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>2: {Math.round((survey7Data.filter(item => item.Q1_Answer === 2 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>3: {Math.round((survey7Data.filter(item => item.Q1_Answer === 3 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>4: {Math.round((survey7Data.filter(item => item.Q1_Answer === 4 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>5: {Math.round((survey7Data.filter(item => item.Q1_Answer === 5 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>


                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        }

                        {
                            show === 8 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Poll 2</h2>
                                <div style={{ color: 'black', textAlign: 'center', background: 'white', padding: '10px', borderRadius: '4px' }}>
                                    <p style={{ marginBottom: 0 }}>Rate the risk of committing a crime</p>
                                    <p style={{ marginBottom: 0 }}>(not a misdemeanor) on a scale of 1-10; 1=lowest risk, 10=highest risk</p>
                                    <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <h5 style={{ marginBottom: 0 }}>Person 1</h5>
                                            <div>
                                                {/* <PiA isDiyData filter={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                                    pData={survey8Data.filter(item => item.version === 1)} name='poll 2-1'
                                                    keyName='Q1_Answer' tag={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} /> */}
                                                <hr />
                                                <p>1: {Math.round((survey8Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>1: {Math.round((survey8Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>3: {Math.round((survey8Data.filter(item => item.Q1_Answer === 3 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>4: {Math.round((survey8Data.filter(item => item.Q1_Answer === 4 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>5: {Math.round((survey8Data.filter(item => item.Q1_Answer === 5 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>6: {Math.round((survey8Data.filter(item => item.Q1_Answer === 6 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>7: {Math.round((survey8Data.filter(item => item.Q1_Answer === 7 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>8: {Math.round((survey8Data.filter(item => item.Q1_Answer === 8 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>9: {Math.round((survey8Data.filter(item => item.Q1_Answer === 9 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>10: {Math.round((survey8Data.filter(item => item.Q1_Answer === 10 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', marginLeft: '30px' }}>
                                            <h5 style={{ marginBottom: 0 }}>Person 2</h5>
                                            <div>
                                                {/* <PiA isDiyData filter={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                                    pData={survey8Data.filter(item => item.version === 2)} name='poll 2-2'
                                                    keyName='Q1_Answer' tag={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} /> */}

                                                <hr />
                                                <p>1: {Math.round((survey8Data.filter(item => item.Q1_Answer === 1 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>2: {Math.round((survey8Data.filter(item => item.Q1_Answer === 2 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>3: {Math.round((survey8Data.filter(item => item.Q1_Answer === 3 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>4: {Math.round((survey8Data.filter(item => item.Q1_Answer === 4 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>5: {Math.round((survey8Data.filter(item => item.Q1_Answer === 5 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>6: {Math.round((survey8Data.filter(item => item.Q1_Answer === 6 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>7: {Math.round((survey8Data.filter(item => item.Q1_Answer === 7 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>8: {Math.round((survey8Data.filter(item => item.Q1_Answer === 8 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>9: {Math.round((survey8Data.filter(item => item.Q1_Answer === 9 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>10: {Math.round((survey8Data.filter(item => item.Q1_Answer === 10 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 9 && <div>
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Poll 3</h2>
                                <div style={{ color: 'white', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center', background: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>2-1</h5>
                                            <p style={{ marginBottom: 0 }}>AI will change how you do your current job in the next five years</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2]}
                                                    pData={survey9Data.filter(item => item.version === 1)} name='poll 3-1'
                                                    keyName='Q1_Answer' tag={['Not likely', 'Don’t know', 'Likely']} /> */}
                                                <hr />
                                                <p>Not likely: {Math.round((survey9Data.filter(item => item.Q1_Answer === 0 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>Don’t know: {Math.round((survey9Data.filter(item => item.Q1_Answer === 1 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>Likely: {Math.round((survey9Data.filter(item => item.Q1_Answer === 2 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', marginLeft: '30px', background: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>2-2</h5>
                                            <p style={{ marginBottom: 0 }}>AI will replace your current job in the next five years</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2]}
                                                    pData={survey9Data.filter(item => item.version === 2)} name='poll 3-2'
                                                    keyName='Q1_Answer' tag={['Not likely', 'Don’t know', 'Likely']} /> */}
                                                <hr />
                                                <p>Not likely: {Math.round((survey9Data.filter(item => item.Q1_Answer === 0 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>Don’t know: {Math.round((survey9Data.filter(item => item.Q1_Answer === 1 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>Likely: {Math.round((survey9Data.filter(item => item.Q1_Answer === 2 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </Container>

                </div>

            </div>
            <FooterBlack style={{
                position: 'relative',
                width: '100%', // 宽度设置为100%
                boxSizing: 'border-box',
                margin: '0', // Resets any margin that might be present
                padding: '0', // Resets any padding that might be present
            }} />
        </>

    )
        ;
}

export default Dashboard;
