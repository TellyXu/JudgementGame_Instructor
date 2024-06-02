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
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ScrollTransparentNavbar from "../components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "../components/Footers/FooterBlack";

function Text({ show }) {



    return (
        <>
            <ScrollTransparentNavbar />
            <div className="contactus-1"
                 style={{
                     display: 'flex', // 使用flex布局
                     flexDirection: 'column', // 子元素垂直排列
                     justifyContent: 'center', // 垂直居中
                     alignItems: 'center', // 水平居中
                     height: '100vh', // 整个页面高度
                     backgroundImage: "url(" + require("assets/img/HBC_JHU5704_c_3000x2000.jpg") + ")",
                     backgroundSize: 'cover', // 确保背景图片覆盖整个容器
                     backgroundRepeat: 'no-repeat', // 背景图片不重复
                     backgroundPosition: 'center center', // 背景图片居中显示
                 }}>
                {
                    show === 12 &&
                    <Card style={{
                        width: '60%',
                        height: '60%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',  // 设置定位，使背景层可以绝对定位于卡片内
                    }}>
                        <div style={{
                            position: 'absolute',  // 绝对定位背景层
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url(" + require("assets/img/anchor.png") + ")",
                            backgroundSize: 'auto 80%',  // 调整背景图像的大小
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.2,  // 仅设置背景层的透明度
                        }} />
                        <CardBody style={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',  // 确保内容在背景层上方显示
                            zIndex: 1,  // 提升层级高于背景层
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',  // 添加半透明白色背景以增强文字可读性
                        }}>
                            <CardTitle tag="h2" style={{ marginBottom: 'auto', fontWeight: 'bold' }}>ANCHORING EFFECT BIAS</CardTitle>
                            <div style={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <CardText style={{ fontSize: '1.2rem', color: 'black', fontWeight: 'bold'  }}>
                                    Tendency to favor information received early in the decision making process.
                                </CardText>
                                <CardText style={{ fontSize: '1.2rem', color: 'black', fontWeight: 'bold'  }}>
                                    Occurs most frequently when you don’t know the correct answer and hold on to the information provided as an "anchor".
                                </CardText>
                            </div>
                        </CardBody>
                    </Card>

                }
                {
                    show === 34 &&
                    <Card style={{
                        width: '60%',
                        height: '60%',
                        textAlign: 'center',
                        opacity: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            position: 'absolute',  // 绝对定位背景层
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url(" + require("assets/img/FRAMINGANDLOSS.jpg") + ")",
                            backgroundSize: 'auto 95%',  // 调整背景图像的大小
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.1,  // 仅设置背景层的透明度
                        }}/>
                        <CardBody
                            style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <CardTitle tag="h2" style={{marginBottom: 'auto', fontWeight: 'bold'}}>FRAMING AND LOSS AVERSION</CardTitle>
                            <div style={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                <Label style={{fontSize: '1.2rem', color: 'black'}}>
                                    Tendency to react differently to a particular decision depending on how it’s
                                    presented or “framed,” emphasizing either the positive (GAIN) or negative
                                    (LOSS).<br/>
                                </Label>
                                <Label style={{fontSize: '1.2rem', color: 'black'}}>
                                    “Losses loom larger than gains.” Individuals become more <span style={{
                                    borderBottom: " 2px solid black", /* 调整颜色和粗细以符合您的设计 */
                                    lineHeight: "1.2"
                                }}>risk-averse</span> when
                                    information is framed positively in terms of <span style={{
                                    borderBottom: " 2px solid black", /* 调整颜色和粗细以符合您的设计 */
                                    lineHeight: "1.2"
                                }}>gains</span>
                                    , and more <span style={{
                                    borderBottom: " 2px solid black", /* 调整颜色和粗细以符合您的设计 */
                                    lineHeight: "1.2"
                                }}>risk-seeking</span> when
                                    information is framed negatively in
                                    terms of <span style={{
                                    borderBottom: " 2px solid black", /* 调整颜色和粗细以符合您的设计 */
                                    lineHeight: "1.2"
                                }}>losses</span>.
                                </Label>
                            </div>
                        </CardBody>
                    </Card>
                }
                {
                    show === 5 &&
                    <Card style={{
                        width: '60%',
                        height: '60%',
                        textAlign: 'center',
                        opacity: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <CardBody
                            style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <div style={{
                                position: 'absolute',  // 绝对定位背景层
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: "url(" + require("assets/img/MENTALACCOUNTING.jpg") + ")",
                                backgroundSize: 'auto 95%',  // 调整背景图像的大小
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.1,  // 仅设置背景层的透明度
                            }}/>
                            <CardTitle tag="h2" style={{marginBottom: 'auto', fontWeight: 'bold'}}>MENTAL ACCOUNTING</CardTitle>
                            <div style={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                <CardText style={{fontSize: '1.2rem', color: 'black', fontWeight: 'bold'}}>
                                    Human tendency to assign subjective value to our money, in violation of basic
                                    economic principles. Money has consistent objective value, but how it is spent is
                                    often subject to different rules.
                                </CardText>
                                <CardText style={{fontSize: '1.2rem', color: 'black', fontWeight: 'bold'}}>
                                    Can result in irrational and counterproductive investment behavior.
                                </CardText>
                            </div>
                        </CardBody>
                    </Card>
                }
                {
                    show === 6 &&
                    <Card style={{
                        width: '60%',
                        height: '60%',
                        textAlign: 'center',
                        opacity: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <CardBody
                            style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <div style={{
                                position: 'absolute',  // 绝对定位背景层
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: "url(" + require("assets/img/2560px-Normal_Distribution_PDF.svg.png") + ")",
                                backgroundSize: 'auto 95%',  // 调整背景图像的大小
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.1,  // 仅设置背景层的透明度
                            }}/>

                            <CardTitle tag="h2" style={{marginBottom: 'auto', fontWeight: 'bold'}}>BASE RATE FALLACY</CardTitle>
                            <div style={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                <CardText style={{fontSize: '1.2rem', color: 'black', fontWeight: 'bold'}}>
                                    Human tendency to ignore relevant statistical or other information in favor of
                                    “case-specific information.” Rather than consider the base rate or prior probability
                                    of an event, humans are distracted by irrelevant information.
                                </CardText>
                                <CardText style={{fontSize: '1.2rem', color: 'black', fontWeight: 'bold'}}>
                                    Leads to inaccurate probability judgements, jumping to conclusions about individuals
                                    based on initial impressions, and the perpetuation of stereotypes.
                                </CardText>
                            </div>
                        </CardBody>
                    </Card>
                }
            </div>
            <FooterBlack style={{
                width: '100%', // 宽度设置为100%
                boxSizing: 'border-box',
                margin: '0', // Resets any margin that might be present
                padding: '0', // Resets any padding that might be present
            }}/>
        </>
    );
}

export default Text;
