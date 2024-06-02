import React, { useState } from 'react';
import './Sections.css';  // 引入CSS样式

// 导入图片
import bg1 from '../../assets/img/MahatmaGandhi.jpg';
import bg2 from '../../assets/img/donate.jpeg';
import bg3 from '../../assets/img/medicines.jpg';
import bg4 from '../../assets/img/gov.jpg';
import bg5 from '../../assets/img/suits.jpg';
import bg6 from '../../assets/img/officialparty.jpg';


import { useNavigate } from 'react-router-dom'


// 图片数组
const images = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
];

function Sections() {
    const navigate = useNavigate()

    return (
        <div className="gallery">
            {images.map((src, idx) => (
                <div className="img-container" style={{ position: 'relative' }} key={idx}>
                    <img src={src} alt={`Image ${idx}`} />
                    {
                        idx !== 5 ?
                            <div id="sections-container" style={{ position: 'absolute', width: '100%', height: '100%', background: "rgba(0,0,0,0.3)", top: '0' }}>
                                <div
                                    onClick={_ => navigate(`/judgement${idx + 1}1`)}
                                    id="sections-top" style={{ width: '100%', height: '50%', background: 'rgba(255,255,255,0.4)' }}
                                >
                                    Judgement {idx + 1} Group 1
                                </div>
                                <div
                                    onClick={_ => navigate(`/judgement${idx + 1}2`)}
                                    id="sections-bottom" style={{ width: '100%', height: '50%', background: 'rgba(255,255,255,0.4)' }}
                                >
                                    Judgement {idx + 1} Group 2
                                </div>
                            </div>
                            :
                            <div
                                onClick={_ => navigate(`/judgement${idx + 1 + '1'}`)}
                                id="sections-container" style={{ position: 'absolute', width: '100%', height: '100%', background: "rgba(0,0,0,0.3)", top: '0' }}
                            >
                                <div id="sections-top" style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.4)' }}>
                                    Judgement {idx + 1}
                                </div>
                            </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Sections;
