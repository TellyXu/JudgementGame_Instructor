import React from 'react';
import Game5 from './Game61';
import ScrollTransparentNavbar from "../../components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "../../components/Footers/FooterBlack";
import { Card, Container, Row, Col } from "reactstrap";

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
                    <Row>
                        <Col className="ml-auto mr-auto" md="8"> {/* 更改这里的 md 值来改变卡片的宽度 */}
                            <Card className="card-contact card-raised">
                                <Game5 />
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
            }} />
        </>
    );
}

export default Index;
