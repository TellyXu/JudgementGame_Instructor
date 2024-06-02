/*eslint-disable*/


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

  Col
} from 'reactstrap';
import '../../views/presentation-sections/Sections.css';  // 引入CSS样式

// 导入图片
import bg1 from '../../assets/img/MahatmaGandhi.jpg';
import bg2 from '../../assets/img/donate.jpeg';
import bg3 from '../../assets/img/medicines.jpg';
import bg4 from '../../assets/img/gov.jpg';
import bg5 from '../../assets/img/suits.jpg';
import bg6 from '../../assets/img/officialparty.jpg';
import {Row} from "reactstrap";
import {useNavigate} from "react-router-dom";
const images = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
];

function PresentationHeader() {
  const navigate = useNavigate()
  return (
    <>
      <div className="page-header clear-filter" style={{ height: 'calc(100vh - 50px)' }}>
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-10">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg") +
                ")"
            }}
          ></div>
        </div>


        <div className="rellax-text-container rellax-text">

          <h1 className="h1-seo" data-rellax-speed="-1" style={{fontSize: '9em', marginBottom: '10px'}}>
            Games of Judgement
          </h1>
          <div style={{height: '40px'}}></div>

          <h3 className="h3-description rellax-text" data-rellax-speed="-1">
            <div style={{height: '50px'}}></div>
            A Human Centered View
          </h3>

        </div>


        <div
            className="rellax-header rellax-header-buildings"
            data-rellax-speed="0"
        >
          <div
              className="page-header-image page-header-city"
          >

            <div className="gallery">
              {images.map((src, idx) => (
                  <div className="img-container" style={{position: 'relative'}} key={idx}>
                    <img src={src} alt={`Image ${idx}`}/>
                    {
                      idx !== 5 ?
                          <div id="sections-container" style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: "rgba(0,0,0,0.3)",
                            top: '0'
                          }}>
                            <div
                                onClick={_ => navigate(`/judgement${idx + 1}1`)}
                                id="sections-top"
                                style={{width: '100%', height: '50%', background: 'rgba(255,255,255,0.4)'}}
                            >
                              Judgement {idx + 1} Group 1
                            </div>
                            <div
                                onClick={_ => navigate(`/judgement${idx + 1}2`)}
                                id="sections-bottom"
                                style={{width: '100%', height: '50%', background: 'rgba(255,255,255,0.4)'}}
                            >
                              Judgement {idx + 1} Group 2
                            </div>
                          </div>
                          :
                          <div
                              onClick={_ => navigate(`/judgement${idx + 1 + '1'}`)}
                              id="sections-container" style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: "rgba(0,0,0,0.3)",
                            top: '0'
                          }}
                          >
                            <div id="sections-top"
                                 style={{width: '100%', height: '100%', background: 'rgba(255,255,255,0.4)'}}>
                              Judgement {idx + 1}
                            </div>
                          </div>
                    }
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
