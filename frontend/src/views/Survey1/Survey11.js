import React from 'react';
import Gandhi1 from './Gandhi1';
import ScrollTransparentNavbar from "../../components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "../../components/Footers/FooterBlack";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col, CardImg
} from "reactstrap";

import pic1 from "../../assets/img/MahatmaGandhi.jpg"

function Index() {
    return (
        <>
            <ScrollTransparentNavbar />
            <div className="contactus-1 section-image"
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
                <Container>

                    <Row className="align-items-stretch">
                        <Col className="ml-auto mr-auto" md="8"> {/* 更改这里的 md 值来改变卡片的宽度 */}
                            <Card className="card-contact card-raised">
                                <Gandhi1 />
                            </Card>
                        </Col>

                        <Col className="ml-auto mr-auto" md="3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Card style={{ height: '70%' }}>
                                <CardBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <CardImg style={{ height:'100%', objectFit: 'contain' }} src={pic1} alt="Card image cap" />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

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

export default Index;
