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
import * as echarts from 'echarts';
import "./Dashboard.css";
import "./base.scss";
import CombinedBoxEchart from "../components/combinedbox";
import DualBoxEchart from "../components/combinedbox";

function Dashboard({ show }) {

    const getAvg = (values) => {
        console.log('values', values);
        if (values.length === 0) {
            return 0; // 返回0而非空字符串，确保类型一致性
        }
        const sum = values.reduce((previous, current) => previous + current, 0); // 显式地设置初始值为0
        const avg = sum / values.length;
        return avg;
    }

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
        fetch("https://judgementgame-instructor.onrender.com/find", { method: 'POST' })
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

    React.useEffect(() => {
        console.log('resultData updated:', survey2Data);


        console.log('resultData', survey2Data)


        console.log('11 ', survey2Data.filter(item => item.version === 1).length);
        console.log('22 ', survey2Data.filter(item => item.version === 1).reduce((acc, cur) => acc + (cur.q1_answer || 0), 0));
        console.log('33 ', survey2Data.filter(item => item.version === 1).length);

    }, [resultData]);  // Dependency array, re-run the effect when resultData changes



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

    if (show === 3) {
        // <p>1: {}</p>
        // <p>2: {survey6Data.filter(item => item.q1_answer === 2 && item.version === 1).length}</p>
        // <p>3: {survey6Data.filter(item => item.q1_answer === 3 && item.version === 1).length}</p>
        // <p>4: {survey6Data.filter(item => item.q1_answer === 4 && item.version === 1).length}</p>
        // <p>5: {survey6Data.filter(item => item.q1_answer === 5 && item.version === 1).length}</p>
        // <p>6: {survey6Data.filter(item => item.q1_answer === 6 && item.version === 1).length}</p>

        setTimeout(() => {
            var chartDom = document.getElementById('t1');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            survey6Data.filter(item => item.q1_answer === 1 && item.version === 1).length,
                            survey6Data.filter(item => item.q1_answer === 2 && item.version === 1).length,
                            survey6Data.filter(item => item.q1_answer === 3 && item.version === 1).length,
                            survey6Data.filter(item => item.q1_answer === 4 && item.version === 1).length,
                            survey6Data.filter(item => item.q1_answer === 5 && item.version === 1).length,
                            survey6Data.filter(item => item.q1_answer === 6 && item.version === 1).length
                        ],
                        type: 'bar'
                    }
                ]
            };

            option && myChart.setOption(option);



            var chartDom2 = document.getElementById('t2');
            var myChart2 = echarts.init(chartDom2);
            var option2;

            option2 = {
                xAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            survey6Data.filter(item => item.q1_answer === 1 && item.version === 2).length,
                            survey6Data.filter(item => item.q1_answer === 2 && item.version === 2).length,
                            survey6Data.filter(item => item.q1_answer === 3 && item.version === 2).length,
                            survey6Data.filter(item => item.q1_answer === 4 && item.version === 2).length,
                            survey6Data.filter(item => item.q1_answer === 5 && item.version === 2).length,
                            survey6Data.filter(item => item.q1_answer === 6 && item.version === 2).length
                        ],
                        type: 'bar'
                    }
                ]
            };

            option2 && myChart2.setOption(option2);

        }, 0);


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
                                color="danger"
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
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 1</h2>
                                <div style={{
                                    display: "flex",
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    marginBottom: '20px'
                                }}>

                                    <div style={{ fontFamily: 'gentona',fontWeight: 400, fontSize: '20px', background: '#eb4a41', color: 'white', padding: '15px', borderRadius: '10px' }}>
                                        <p>
                                            Did Gandhi die before or after the age of <strong style={{ fontFamily: 'gentona',fontWeight: 900, fontSize: '22px'}}>144</strong>?
                                        </p>
                                        {/* <PiA filter={[1, 0]} pData={p0} keyName='q1_answer' tag={['Before', 'After']} /> */}
                                        <hr style={{ background:'white'}}></hr>
                                        <p className="text-14" style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >Before: {Math.round((p0.filter(item => item.q1_answer === 0).length / (_data.filter(item => item.survey_num === 1 && item.version === 1).length)) * 100)}%</p>
                                        <p className="text-14" style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >After: {Math.round((p0.filter(item => item.q1_answer === 1).length / (_data.filter(item => item.survey_num === 1 && item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div style={{
                                        fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',
                                        marginLeft: '20px',
                                        background: '#eb4a41', color: 'white',
                                        padding: '15px',
                                        borderRadius: '10px'
                                    }}>
                                        <p>
                                            Did Gandhi die before or after the age of <strong style={{ fontFamily: 'gentona',fontWeight: 900, fontSize: '22px'}}>32</strong>?
                                        </p>
                                        {/* <PiA filter={[1, 0]} pData={p1} keyName='q1_answer' tag={['Before', 'After']} /> */}
                                        <hr style={{ background:'white'}}></hr>

                                        <p className="text-14" style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >Before: {Math.round((p1.filter(item => item.q1_answer === 0).length / (_data.filter(item => item.survey_num === 1 && item.version === 2).length)) * 100)}%</p>
                                        <p className="text-14" style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >After: {Math.round((p1.filter(item => item.q1_answer === 1).length / (_data.filter(item => item.survey_num === 1 && item.version === 2).length)) * 100)}%</p>
                                    </div>

                                </div>

                                <div style={{
                                    fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',
                                    width: '350px',
                                    margin: '0 auto',
                                    marginTop: '20px',
                                    background: '#eb4a41', color: 'white',
                                    padding: '15px',
                                    borderRadius: '10px'
                                }}>
                                    <p>
                                        What age did Gandhi die at?
                                    </p>
                                    <hr></hr>
                                    <p className="text-14"  style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >Group 1 average : ${p2.length > 0 ?
                                        (p2.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p2.length).toFixed(2)
                                        : "No data available"}</p>


                                    <p className="text-14"  style={{fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',}} >Group 2 average : $
                                        {p3.length > 0 ?
                                            (p3.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p3.length).toFixed(2)
                                            : "No data available"}
                                    </p>
                                    {/* <p className="text-14">Total average age :

                                            {p4.length > 0 ?
                                                (p4.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p4.length).toFixed(2)
                                                : "No data available"}
                                        </p> */}
                                </div>

                                {/*<div className="mt-2" style={{
                                    display: "flex",
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    marginTop: '20px'
                                }}>
                                    <div>
                                        <h3>Group 1 answer average age:</h3>
                                        {p2.length > 0 ?
                                            (p2.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p2.length).toFixed(2)
                                            : "No data available"}

                                        <h3>Group 2 answer average age:</h3>
                                        {p3.length > 0 ?
                                            (p3.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p3.length).toFixed(2)
                                            : "No data available"}
                                        <h3>Total average age:</h3>
                                        {p4.length > 0 ?
                                            (p4.reduce((acc, cur) => acc + (cur.q2_answer || 0), 0) / p4.length).toFixed(2)
                                            : "No data available"}
                                    </div>


                                    {/*<div>*/}
                                {/*    <Box pData={p2} name='Judgement 1 Group 1 answer' keyName='q2_answer' Xname=' '*/}
                                {/*         Yname='age'/>*/}
                                {/*</div>*/}
                                {/*<div style={{marginLeft: '20px'}}>*/}
                                {/*    <Box pData={p3} name='Judgement 1 Group 2 answer' keyName='q2_answer' Xname=' '*/}
                                {/*         Yname='age'/>*/}
                                {/*</div>*/}
                                {/*<div style={{ marginLeft: '20px' }}>*/}
                                {/*    <DualBoxEchart*/}
                                {/*        pData1={p2} name1='Judgement 1 Group 1 answer' keyName1='q2_answer' Xname1=' ' Yname1='age'*/}
                                {/*        pData2={p3} name2='Judgement 1 Group 2 answer' keyName2='q2_answer' Xname2=' ' Yname2='age'*/}
                                {/*    />*/}
                                {/*</div>*/}


                                {/*<div>*/}
                                {/*    <Box pData={p4} name='Judgement 1 Total answer' keyName='q2_answer' Xname=' '*/}
                                {/*         Yname='age'/>*/}
                                {/*</div>


                                </div>*/}
                            </div>
                        }

                        {
                            show === 2 && <div style={{ marginTop: "10px" }}>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 2</h2>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '20px', background: '#eb4a41', color: 'white', }}>
                                    <p className="m-0 text-center mt-4">How much would you donate?</p>
                                </div>


                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>

                                    <div className="bbg-white" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '22px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14'} style={{ background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 tips text-white">You are generally a charitable person and regularly
                                                donate. Your favorite charity reached out recently and requested a
                                                donation of <strong style={{fontFamily: 'gentona', fontWeight: 800, fontSize: '22px',}}>$400</strong>.
                                            </p>
                                        </div>

                                        <hr></hr>
                                        <p className="text-14" style={{fontFamily: 'gentona', fontWeight: 600, fontSize: '22px',}}>Group 1 average :
                                            {survey2Data.filter(item => item.version === 1).length > 0 ? "$" +
                                                (survey2Data.filter(item => item.version === 1).reduce((acc, cur) => acc + (cur.q1_answer || 0), 0) / survey2Data.filter(item => item.version === 1).length).toFixed(2)
                                                : "No data available"}</p>


                                        {/*<Box pData={survey2Data.filter(item => item.version === 1)}*/}
                                        {/*     name='Judgement 2 Group 1 answer'*/}
                                        {/*     keyName='q1_answer' Xname=' ' Yname='$'/>*/}
                                    </div>

                                    <div className="bbg-white ml-20" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '22px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14'} style={{ background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 tips text-white">You are generally a charitable person and regularly
                                                donate. Your favorite charity reached out recently and requested a
                                                donation of <strong style={{fontFamily: 'gentona', fontWeight: 800, fontSize: '22px',}}>$5</strong>.
                                            </p>
                                        </div>

                                        <hr></hr>
                                        <p className="text-14" style={{fontFamily: 'gentona', fontWeight: 600, fontSize: '22px',}}>Group 2 average :

                                            {survey2Data.filter(item => item.version === 2).length > 0 ? "$" +
                                                (survey2Data.filter(item => item.version === 2).reduce((acc, cur) => acc + (cur.q1_answer || 0), 0) / survey2Data.filter(item => item.version === 2).length).toFixed(2)
                                                : "No data available"}

                                        </p>
                                        {/*<Box pData={survey2Data.filter(item => item.version === 2)}*/}
                                        {/*     name='Judgement 2 Group 2 answer'*/}
                                        {/*     keyName='q1_answer' Xname=' ' Yname='$'/>*/}
                                    </div>

                                    <div className="bbg-white ml-20 mt-20" style={{ background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14'}>

                                        </div>

                                        <p className="text-18 text-center" style={{fontFamily: 'gentona', fontWeight: 400, fontSize: '22px',}}>Overall average :
                                            {survey2Data.length > 0 ? "$" +
                                                (survey2Data.reduce((acc, cur) => acc + (cur.q1_answer || 0), 0) / survey2Data.length).toFixed(2)
                                                : "No data available"}</p>
                                        {/* <p className="text-18 text-center" >Total average :
                                            {survey2Data.length > 0 ?
                                                (survey2Data.reduce((acc, cur) => acc + (cur.q1_answer || 0), 0) / survey2Data.length).toFixed(2)
                                                : "No data available"}</p> */}

                                        {/*<CombinedBoxEchart*/}
                                        {/*    dataGroup1={survey2Data.filter(item => item.version === 1)}*/}
                                        {/*    dataGroup2={survey2Data.filter(item => item.version === 2)}*/}
                                        {/*    name1='Group 1'*/}
                                        {/*    name2='Group 2'*/}
                                        {/*    keyName='q1_answer'*/}
                                        {/*/>*/}


                                        {/*<div>*/}
                                        {/*    <Box pData={survey2Data.filter(item => item.version === 1 || item.version === 2)} name='Judgement 2 Total answer' keyName='q1_answer' Xname=' ' />*/}
                                        {/*</div>*/}
                                    </div>


                                </div>
                            </div>
                        }

                        {
                            show === 5 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 5</h2>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md" style={{ fontFamily: 'gentona', fontWeight: 800, fontSize: '20px',background: '#eb4a41', color: 'white', }}>
                                    <p className="m-0 text-center mt-4 text-white">Will you shift to another store?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="bbg-white-400" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14'} style={{ paddingBottom:"20px",height: '100px', background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 tips text-white">You are shopping for a luxurious gray pinstripe suit for $425. You are about to buy it, and then another customer whispers that the exact same suit is on sale for $418 at another store 15 minutes away.</p>
                                        </div>
                                        {/* <PiA filter={[0, 1]} pData={survey4Data.filter(item => item.version === 1)}
                                            name='survey4_q1_answer' keyName='q1_answer' tag={['YES', 'NO']} /> */}
                                        {/* <hr></hr> */}
                                        <p>YES: {Math.round((survey4Data.filter(item => item.q1_answer === 0 && item.version === 1).length / (survey4Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        <p>NO: {Math.round((survey4Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey4Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div className="bbg-white-400 ml-20" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14'} style={{ paddingBottom:"10px", Height: '100px', background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 tips text-white">You go to a store and find a nice pen for $25. Then you remember that the same pen is on sale for $18 at another store 15 minutes away.</p>
                                        </div>
                                        {/* <PiA filter={[0, 1]} pData={survey4Data.filter(item => item.version === 2)}
                                            name='survey4_q2_answer' keyName='q1_answer' tag={['YES', 'NO']} /> */}
                                        {/* <hr></hr> */}
                                        <p>YES: {Math.round((survey4Data.filter(item => item.q1_answer === 0 && item.version === 2).length / (survey4Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>NO: {Math.round((survey4Data.filter(item => item.q1_answer === 1 && item.version === 2).length / (survey4Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 4 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 4</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '16px', background: '#eb4a41', color: 'white', }}>
                                    <p className="m-0 tips text-white">Congratulations! You have just been elected as mayor of a small town in Cold Mountain with 600 inhabitants.Bad news! Just after you are elected, a mysterious epidemic disease (much worse than the H1N1 flu) will attack your small town very soon.The doctors rush to look for cure for the disease, and find two kinds of vaccines. You can only choose one to use in your town.</p>
                                    <p className="m-0 text-center mt-4">Which one will you choose?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', }}>
                                    <div className="bbg-white" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '16px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14 text-white'} style={{ background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 text-left mt-4">A: 400 (out of 600) people will die from this disease;</p>
                                            <p className="m-0 text-left mt-4">B: with 1/3 probability, nobody dies; with 2/3 probability all 600 will die.</p>
                                        </div>
                                        {/* <PiA filter={[1, 2]} pData={survey3Data.filter(item => item.version === 1)}
                                            name='survey3_q1_answer' keyName='q1_answer' tag={['A', 'B']} /> */}
                                        <hr></hr>
                                        <p>A: {Math.round((survey3Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey3Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        <p>B: {Math.round((survey3Data.filter(item => item.q1_answer === 2 && item.version === 1).length / (survey3Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                    </div>
                                    <div className="bbg-white ml-20" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '16px',background: '#eb4a41', color: 'white', }}>
                                        <div class={'container-tips text-14 text-white'} style={{ background: '#eb4a41', color: 'white', }}>
                                            <p className="m-0 text-left mt-4">C: it will save 200 (out of 600) people </p>
                                            <p className="m-0 text-left mt-4">D: with 1/3 probability, all 600 will be saved, with 2/3 probability nobody of the 600 will be saved. </p>
                                        </div>
                                        {/* <PiA filter={[3, 4]} pData={survey3Data.filter(item => item.version === 2)}
                                            name='survey3_q2_answer' keyName='q1_answer' tag={['C', 'D']} /> */}
                                        <hr></hr>
                                        <p>C: {Math.round((survey3Data.filter(item => item.q1_answer === 3 && item.version === 2).length / (survey3Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>D: {Math.round((survey3Data.filter(item => item.q1_answer === 4 && item.version === 2).length / (survey3Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 6 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 6</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md mx-auto" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px', background: '#eb4a41', color: 'white', width: '800px' }}>
                                    <p className="m-0 tips text-white">You go to an office end-of-year party where your colleagues have brought their partners. Your colleague introduces you to her partner, Mark, noting that Mark has a Ph.D., he loves poetry, and loves our cat!</p>
                                    <p className="m-0 tips text-white">You have to guess if Mark plays Golf or Soccer</p>
                                </div>

                                <div className="mx-auto text-center" style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', width: '150px' }}>
                                    <div className="bbg-white" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px', background: '#eb4a41', color: 'white' }}>
                                        {/* <PiA filter={[0, 1]} pData={survey5Data} name='survey2_q1_answer' keyName='q1_answer'
                                            tag={['Golf', 'Soccer']} /> */}
                                        <p>Golf: {Math.round((survey5Data.filter(item => item.q1_answer === 0).length / (survey5Data.length)) * 100)}%</p>
                                        <p style={{ marginBottom: '0' }}>Soccer: {Math.round((survey5Data.filter(item => item.q1_answer === 1).length / (survey5Data.length)) * 100)}%</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 3 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Judgement 3</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>

                                <div className="mb-20 cbg-white text-black p-4 rounded-md" style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px', background: '#eb4a41', color: 'white', }}>
                                    <p className="m-0 tips text-white">MedCo Inc. just developed a breakthrough therapy for a rare disease and did a study on its effectiveness. On a "6-point scale" with 6 being very good, and 1 being very bad, how would you evaluate the drug’s effect?</p>
                                </div>

                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', }}>
                                    <div className="bbg-white" style={{ fontFamily: 'gentona', fontWeight: 600, background: '#eb4a41', color: 'white', }}>
                                        <div className="container-tips text-14" style={{ background: '#eb4a41', color: 'white', height:"50px"}}>
                                            <p className="m-0 text-center mt-4"> 100 patients took the medicine
                                                and <strong style={{fontFamily: 'quadon', fontWeight: 900}}>70 patients got better</strong>.</p>
                                        </div>
                                        <hr />
                                        {/*<PiA isDiyData filter={[1, 2, 3, 4, 5, 6]}*/}
                                        {/*     pData={survey6Data.filter(item => item.version === 1)}*/}
                                        {/*     name='survey4_q1_answer'*/}
                                        {/*     keyName='q1_answer' tag={['1', '2', '3', '4', '5', '6']}/>*/}

                                        {/* <p>1: {survey6Data.filter(item => item.q1_answer === 1 && item.version === 1).length}</p>
                                        <p>2: {survey6Data.filter(item => item.q1_answer === 2 && item.version === 1).length}</p>
                                        <p>3: {survey6Data.filter(item => item.q1_answer === 3 && item.version === 1).length}</p>
                                        <p>4: {survey6Data.filter(item => item.q1_answer === 4 && item.version === 1).length}</p>
                                        <p>5: {survey6Data.filter(item => item.q1_answer === 5 && item.version === 1).length}</p>
                                        <p>6: {survey6Data.filter(item => item.q1_answer === 6 && item.version === 1).length}</p> */}

                                        <div id="t1" className="bbg-white mx-auto" style={{ padding: '10px', width: '400px', height: '300px' }}>

                                        </div>
                                        <div className="text-center"
                                             style={{fontFamily: 'quadon', fontWeight: 800, fontSize: "24px"}}>
                                            Average:
                                            {getAvg(survey6Data.filter(item => item.version === 1).map(item => item.q1_answer)).toFixed(1)}
                                        </div>


                                    </div>
                                    <div className="bbg-white ml-20" style={{background: '#eb4a41', color: 'white',}}>
                                        <div className="container-tips text-14" style={{
                                            fontFamily: 'gentona',
                                            fontWeight: 600,
                                            background: '#eb4a41',
                                            color: 'white',
                                            height: "50px"
                                        }}>
                                            <p className="m-0 text-center mt-4 text-white">100 patients took the
                                                medicine
                                                and <strong style={{fontFamily: 'quadon', fontWeight: 900}}>30
                                                    patients did not get better</strong>.</p>
                                        </div>
                                        <hr/>
                                        {/*<PiA isDiyData filter={[1, 2, 3, 4, 5, 6]}*/}
                                        {/*     pData={survey6Data.filter(item => item.version === 2)}*/}
                                        {/*     name='survey4_q2_answer'*/}
                                        {/*     keyName='q1_answer' tag={['1', '2', '3', '4', '5', '6']}/>*/}

                                        {/* <p>1: {Math.round((survey6Data.filter(item => item.q1_answer === 1 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>2: {Math.round((survey6Data.filter(item => item.q1_answer === 2 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>3: {Math.round((survey6Data.filter(item => item.q1_answer === 3 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>4: {Math.round((survey6Data.filter(item => item.q1_answer === 4 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>5: {Math.round((survey6Data.filter(item => item.q1_answer === 5 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                        <p>6: {Math.round((survey6Data.filter(item => item.q1_answer === 6 && item.version === 2).length / (survey6Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                         */}

                                        <div id="t2" className="bbg-white mx-auto"
                                             style={{padding: '10px', width: '400px', height: '300px'}}>

                                        </div>
                                        <div className="text-center"
                                             style={{fontFamily: 'quadon', fontWeight: 800, fontSize: "24px"}}>
                                            Average:
                                            {getAvg(survey6Data.filter(item => item.version === 2).map(item => item.q1_answer)).toFixed(1)}
                                        </div>

                                    </div>
                                </div>


                            </div>
                        }

                        {
                            show === 7 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white', textAlign: 'center' }}>Poll 1</h2>
                                <div style={{ color: 'white', textAlign: 'left', width: '700px', margin: '0 auto' }}>
                                </div>
                                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', color: 'white' }}>
                                    <div>
                                        <div style={{ fontFamily: 'gentona',fontWeight: 400, fontSize: '20px', textAlign: 'center', padding: '10px', borderRadius: '4px', background: '#eb4a41', color: 'white', }}>
                                            <h5 style={{ marginBottom: 0 }}>1-1</h5>
                                            <p style={{ marginBottom: 0 }}>Have you personally used an AI productivity tool?</p>
                                            {/* <PiA filter={[0, 1]} pData={survey7Data.filter(item => item.version === 1)}
                                                name='survey4_q1_answer' keyName='q1_answer' tag={['YES', 'NO']} /> */}
                                            {/* <hr /> */}
                                            <p>YES: {Math.round((survey7Data.filter(item => item.q1_answer === 0 && item.version === 1).length / (survey7Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                            <p>NO: {Math.round((survey7Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey7Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                        </div>
                                    </div>
                                    <div style={{ fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',marginLeft: '50px', textAlign: 'center', background: '#eb4a41', color: 'white', padding: '10px', borderRadius: '4px', marginRight: '50px' }}>
                                        <h5 style={{ marginBottom: 0 }}>1-2</h5>
                                        <p style={{ marginBottom: 0 }}>If yes, which one </p>
                                        <div style={{ height: '18.8rem', overflow: 'auto', background: '#eb4a41', color: 'white', padding: '15px' }}>
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
                                        <div style={{ fontFamily: 'gentona',fontWeight: 400, fontSize: '20px', marginTop: '20px', textAlign: 'center', background: '#eb4a41', color: 'white', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>1-3</h5>
                                            <p style={{ marginBottom: 0 }}>To what extent did you find the tool useful? </p>
                                            <p style={{ marginBottom: 0 }}>(5-point scale, 1=not at all useful, 5=very useful)</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2, 3, 4, 5]}
                                                    pData={survey7Data.filter(item => item.version === 3)} name='poll 1-3'
                                                    keyName='q1_answer' tag={['0', '1', '2', '3', '4', '5']} /> */}
                                                {/* <hr /> */}
                                                {/*<p>0: {Math.round((survey7Data.filter(item => item.q1_answer === 0 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>*/}
                                                <p>1: {Math.round((survey7Data.filter(item => item.q1_answer === 1 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>2: {Math.round((survey7Data.filter(item => item.q1_answer === 2 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>3: {Math.round((survey7Data.filter(item => item.q1_answer === 3 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>4: {Math.round((survey7Data.filter(item => item.q1_answer === 4 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>
                                                <p>5: {Math.round((survey7Data.filter(item => item.q1_answer === 5 && item.version === 3).length / (survey7Data.filter(item => item.version === 3).length)) * 100)}%</p>


                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        }

                        {
                            show === 8 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px', color: 'white', textAlign: 'center' }}>Poll 2</h2>
                                <div style={{
                                    fontFamily: 'gentona',fontWeight: 400, fontSize: '20px',
                                    textAlign: 'center',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    background: '#eb4a41', color: 'white',
                                }}>
                                    <p style={{ marginBottom: 0 }}>Rate the risk of committing a crime</p>
                                    <p style={{ marginBottom: 0 }}>(not a misdemeanor) on a scale of 1-10; 1=lowest risk,
                                        10=highest risk</p>
                                    {/* <hr /> */}
                                    <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <h5 style={{ marginBottom: 0 }}>Person 1 Average:</h5>
                                            <div>

                                                {/* <PiA isDiyData filter={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                                    pData={survey8Data.filter(item => item.version === 1)} name='poll 2-1'
                                                    keyName='q1_answer' tag={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} /> */}

                                                <p>{
                                                    (
                                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, answer) =>
                                                            sum + (answer * survey8Data.filter(item => item.q1_answer === answer && item.version === 1).length), 0)
                                                        / survey8Data.filter(item => item.version === 1).length
                                                    ).toFixed(2)
                                                }
                                                </p>
                                                {/*<p>1: {Math.round((survey8Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>1: {Math.round((survey8Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>3: {Math.round((survey8Data.filter(item => item.q1_answer === 3 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>4: {Math.round((survey8Data.filter(item => item.q1_answer === 4 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>5: {Math.round((survey8Data.filter(item => item.q1_answer === 5 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>6: {Math.round((survey8Data.filter(item => item.q1_answer === 6 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>7: {Math.round((survey8Data.filter(item => item.q1_answer === 7 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>8: {Math.round((survey8Data.filter(item => item.q1_answer === 8 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>9: {Math.round((survey8Data.filter(item => item.q1_answer === 9 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                                {/*<p>10: {Math.round((survey8Data.filter(item => item.q1_answer === 10 && item.version === 1).length / (survey8Data.filter(item => item.version === 1).length)) * 100)}%</p>*/}
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', marginLeft: '30px' }}>
                                            <h5 style={{ marginBottom: 0 }}>Person 2 Average:</h5>
                                            <div>
                                                {/* <PiA isDiyData filter={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                                    pData={survey8Data.filter(item => item.version === 2)} name='poll 2-2'
                                                    keyName='q1_answer' tag={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} /> */}

                                                <p>{
                                                    (
                                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, answer) =>
                                                            sum + (answer * survey8Data.filter(item => item.q1_answer === answer && item.version === 2).length), 0)
                                                        / survey8Data.filter(item => item.version === 2).length
                                                    ).toFixed(2)
                                                }
                                                </p>

                                                {/*<p>1: {Math.round((survey8Data.filter(item => item.q1_answer === 1 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>2: {Math.round((survey8Data.filter(item => item.q1_answer === 2 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>3: {Math.round((survey8Data.filter(item => item.q1_answer === 3 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>4: {Math.round((survey8Data.filter(item => item.q1_answer === 4 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>5: {Math.round((survey8Data.filter(item => item.q1_answer === 5 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>6: {Math.round((survey8Data.filter(item => item.q1_answer === 6 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>7: {Math.round((survey8Data.filter(item => item.q1_answer === 7 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>8: {Math.round((survey8Data.filter(item => item.q1_answer === 8 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>9: {Math.round((survey8Data.filter(item => item.q1_answer === 9 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                                {/*<p>10: {Math.round((survey8Data.filter(item => item.q1_answer === 10 && item.version === 2).length / (survey8Data.filter(item => item.version === 2).length)) * 100)}%</p>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            show === 9 && <div>
                                <h2 style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '42px',  color: 'white',textAlign: 'center' }}>Poll 3</h2>
                                <div style={{ fontFamily: 'gentona', fontWeight: 600, fontSize: '18px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                                        <div style={{ width:"400px", textAlign: 'center', background: '#eb4a41', color: 'white', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>3-1</h5>
                                            <p style={{ marginBottom: 0 }}>AI will change how you do your current job in the next five years</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2]}
                                                    pData={survey9Data.filter(item => item.version === 1)} name='poll 3-1'
                                                    keyName='q1_answer' tag={['Not likely', 'Don’t know', 'Likely']} /> */}
                                                {/* <hr /> */}
                                                <p>Not likely: {Math.round((survey9Data.filter(item => item.q1_answer === 0 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>Don’t know: {Math.round((survey9Data.filter(item => item.q1_answer === 1 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                                <p>Likely: {Math.round((survey9Data.filter(item => item.q1_answer === 2 && item.version === 1).length / (survey9Data.filter(item => item.version === 1).length)) * 100)}%</p>
                                            </div>
                                        </div>
                                        <div style={{ width:"350px",textAlign: 'center', marginLeft: '30px', background: '#eb4a41', color: 'white', padding: '10px', borderRadius: '4px' }}>
                                            <h5 style={{ marginBottom: 0 }}>3-2</h5>
                                            <p style={{ marginBottom: 0 }}>AI will replace your current job in the next five years</p>
                                            <div>
                                                {/* <PiA isDiyData filter={[0, 1, 2]}
                                                    pData={survey9Data.filter(item => item.version === 2)} name='poll 3-2'
                                                    keyName='q1_answer' tag={['Not likely', 'Don’t know', 'Likely']} /> */}
                                                {/* <hr /> */}
                                                <p>Not likely: {Math.round((survey9Data.filter(item => item.q1_answer === 0 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>Don’t know: {Math.round((survey9Data.filter(item => item.q1_answer === 1 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
                                                <p>Likely: {Math.round((survey9Data.filter(item => item.q1_answer === 2 && item.version === 2).length / (survey9Data.filter(item => item.version === 2).length)) * 100)}%</p>
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
