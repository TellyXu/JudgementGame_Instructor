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
import ScrollTransparentNavbar from "../../components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "../../components/Footers/FooterBlack";
function Text() {



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
                <Card style={{ width: '60%', height: '60%', textAlign: 'center', opacity: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <CardBody style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <CardTitle tag="h2" style={{ marginBottom: 'auto' }}>MENTAL ACCOUNTING</CardTitle>
                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <CardText style={{ fontSize: '1.2rem', color: 'black' }}>
                                Human tendency to assign subjective value to our money, in violation of basic economic principles. Money has consistent objective value, but how it is spent is often subject to different rules.
                            </CardText>
                            <CardText style={{ fontSize: '1.2rem', color: 'black' }}>
                                Can result in irrational and counterproductive investment behavior.
                            </CardText>
                        </div>
                    </CardBody>
                </Card>


            </div>
            <FooterBlack style={{
                width: '100%', // 宽度设置为100%
                boxSizing: 'border-box',
                margin: '0', // Resets any margin that might be present
                padding: '0', // Resets any padding that might be present
            }} />
        </>
    );
}

export default Text;
