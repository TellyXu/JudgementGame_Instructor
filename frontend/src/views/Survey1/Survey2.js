import React from 'react'

import Game21 from './Game21'
import Game22 from './Game22'

import Game31 from './Game31'
import Game32 from './Game32'

import Game41 from './Game41'
import Game42 from './Game42'

import Game51 from './Game51'
import Game52 from './Game52'

import Game61 from './Game61'
//

import poll_11 from './poll/game11'
import poll_12 from './poll/game12'
import poll_13 from './poll/game13'
import poll_21 from './poll/game21'
import poll_22 from './poll/game22'
import poll_31 from './poll/game31'
import poll_32 from './poll/game32'


import ScrollTransparentNavbar from "../../components/Navbars/ScrollTransparentNavbar"
import FooterBlack from "../../components/Footers/FooterBlack"
import { Card, CardBody, CardImg,Container, Row, Col } from "reactstrap"

import pic1 from "../../assets/img/MahatmaGandhi.jpg"
import pic2 from "../../assets/img/surveypage/nonprofit1.jpg"
import pic3 from "../../assets/img/surveypage/medicine.jpg"
import pic4 from "../../assets/img/surveypage/govofficial1.jpg"
import pic5 from "../../assets/img/surveypage/shoppingmall.jpg"
import pic6 from "../../assets/img/surveypage/officialparty1.jpg"

function Index({ survey }) {

    let renderGame = Game51

    switch (survey) {
        case '2-1':
            renderGame = Game21
            break
        case '2-2':
            renderGame = Game22
            break
        case '3-1':
            renderGame = Game31
            break
        case '3-2':
            renderGame = Game32
            break
        case '4-1':
            renderGame = Game41
            break
        case '4-2':
            renderGame = Game42
            break
        case '5-1':
            renderGame = Game51
            break
        case '5-2':
            renderGame = Game52
            break
        case '6-1':
            renderGame = Game61
            break
        case 'poll-1-1':
            renderGame = poll_11
            break
        case 'poll-1-2':
            renderGame = poll_12
            break
        case 'poll-1-3':
            renderGame = poll_13
            break
        case 'poll-2-1':
            renderGame = poll_21
            break
        case 'poll-2-2':
            renderGame = poll_22
            break
        case 'poll-3-1':
            renderGame = poll_31
            break
        case 'poll-3-2':
            renderGame = poll_32
            break
        default:
    }

    const getImgSrc = (survey) => {
        if (survey.startsWith('1-')) {
            return pic1;
        } else if (survey.startsWith('2-')) {
            return pic2;
        } else if (survey.startsWith('3-')) {
            return pic3;
        } else if (survey.startsWith('4-')) {
            return pic4;
        } else if (survey.startsWith('5-')) {
            return pic5;
        } else if (survey.startsWith('6-')) {
            return pic6;
        }
        return null;
    };
    const imgSrc = getImgSrc(survey);


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
                    <Row lassName="align-items-center">
                        <Col className="ml-auto mr-auto" md="7"> {/* 更改这里的 md 值来改变卡片的宽度 */}
                            <Card className="card-contact card-raised">
                                {renderGame ? renderGame() : <div>No game selected</div>}
                            </Card>

                        </Col>

                        {imgSrc && (
                            <Col className="ml-auto mr-auto" md="4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card style={{ height: '56%' }}>
                                    <CardBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <CardImg style={{ height:'100%', objectFit: 'contain' }} src={imgSrc} alt="Card image cap" />
                                    </CardBody>
                                </Card>
                            </Col>
                        )}

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
