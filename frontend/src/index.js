
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import Test from "views/test.js";
import Tool from "views/tool.js";
import Tool_File from "views/tool_file.js";
import Rag from "views/rag.js";

import Survey11 from "./views/Survey1/Survey11";
import Survey12 from "./views/Survey1/Survey12";

import Survey from "./views/Survey1/Survey2";

// others
import Dashboard from "./views/Dashboard.js";

import { ModalProvider } from "./components/Modal"; // Adjust the import path as needed

import Text from "./views/Text"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ModalProvider> {/* Wrap all routes with ModalProvider */}
    <Routes>
      <Route path="/about-us" element={<Presentation />} />
      <Route path="/blog-post" element={<Presentation />} />
      <Route path="/blog-posts" element={<Presentation />} />
      <Route path="/contact-us" element={<Presentation />} />
      <Route path="/e-commerce" element={<Presentation />} />
      <Route path="/index" element={<Presentation />} />
      <Route path="/landing-page" element={<Presentation />} />
      <Route path="/login-page" element={<Presentation />} />
      <Route path="/nucleo-icons" element={<Presentation />} />
      <Route path="/presentation" element={<Presentation />} />

      <Route path="/pricing" element={<Presentation />} />
      <Route path="/product-page" element={<Presentation />} />
      <Route path="/profile-page" element={<Presentation />} />
      <Route path="/sections" element={<Presentation />} />
      <Route path="/sign-up" element={<Presentation />} />
      <Route path="/test" element={<Presentation />} />
      <Route path="/tool" element={<Presentation />} />
      <Route path="/toolfile" element={<Presentation />} />
      <Route path="/rag" element={<Presentation />} />

      <Route path="/judgement11" element={<Survey11 />} />
      <Route path="/judgement12" element={<Survey12 />} />

      <Route path="/judgement21" element={<Survey survey={'2-1'} key={'2-1'} />} />
      <Route path="/judgement22" element={<Survey survey={'2-2'} key={'2-2'} />} />

      <Route path="/judgement31" element={<Survey survey={'3-1'} key={'3-1'} />} />
      <Route path="/judgement32" element={<Survey survey={'3-2'} key={'3-2'} />} />

      <Route path="/judgement41" element={<Survey survey={'4-1'} key={'4-1'} />} />
      <Route path="/judgement42" element={<Survey survey={'4-2'} key={'4-2'} />} />

      <Route path="/judgement51" element={<Survey survey={'5-1'} key={'5-1'} />} />
      <Route path="/judgement52" element={<Survey survey={'5-2'} key={'5-2'} />} />

      <Route path="/judgement61" element={<Survey survey={'6-1'} key={'6-1'} />} />

      {/* !~ */}
      <Route path="/poll_11" element={<Survey survey={'poll-1-1'} key={'poll-1-1'} />} />
      <Route path="/poll_12" element={<Survey survey={'poll-1-2'} key={'poll-1-2'} />} />
      <Route path="/poll_13" element={<Survey survey={'poll-1-3'} key={'poll-1-3'} />} />
      <Route path="/poll_21" element={<Survey survey={'poll-2-1'} key={'poll-2-1'} />} />
      <Route path="/poll_22" element={<Survey survey={'poll-2-2'} key={'poll-2-2'} />} />
      <Route path="/poll_31" element={<Survey survey={'poll-3-1'} key={'poll-3-1'} />} />
      <Route path="/poll_32" element={<Survey survey={'poll-3-2'} key={'poll-3-2'} />} />
      {/* ~! */}
      {/*
      <Route path="/dashboard1" element={<Dashboard show={1} />} />
      <Route path="/dashboard2" element={<Dashboard show={2} />} />
      <Route path="/dashboard3" element={<Dashboard show={3} />} />
      <Route path="/dashboard4" element={<Dashboard show={4} />} />
      <Route path="/dashboard5" element={<Dashboard show={5} />} />
      <Route path="/dashboard6" element={<Dashboard show={6} />} />
      */}
      {/*  */}
      {/*
      <Route path="/dashboardPoll1" element={<Dashboard show={7} />} />
      <Route path="/dashboardPoll2" element={<Dashboard show={8} />} />
      <Route path="/dashboardPoll3" element={<Dashboard show={9} />} />
      */}

      {/*  */}
      <Route path="/text12" element={<Text show={12} />} />
      <Route path="/text34" element={<Text show={34} />} />
      <Route path="/text5" element={<Text show={5} />} />
      <Route path="/text6" element={<Text show={6} />} />

      <Route path="*" element={<Navigate to="/presentation" replace />} />
    </Routes>
    </ModalProvider>
  </BrowserRouter>
);
