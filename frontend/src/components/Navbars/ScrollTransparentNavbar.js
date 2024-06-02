import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import looksTwoIcon from 'assets/svg/people_alt2.svg';
import looksOneIcon from 'assets/svg/people_alt1.svg';
import dashboard  from "assets/svg/dashboard.svg";
import boxplot from "assets/svg/box_plots_1.svg";
import { useNavigate } from 'react-router-dom'


function ScrollTransparentNavbar() {
  const navigate = useNavigate()

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">


            <NavbarBrand to="/" tag={Link} id="navbar-brand1">
              CDHAI
            </NavbarBrand>
            <NavbarBrand to="/" tag={Link} id="navbar-brand2">
              |
            </NavbarBrand>
            <NavbarBrand to="/" tag={Link} id="navbar-brand3">
              Carey Business School
            </NavbarBrand>


            <UncontrolledTooltip target="navbar-brand1">
              Center for Digital Health and Artificial Intelligence
            </UncontrolledTooltip>

            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={looksOneIcon} alt="Group 1 Icon" />
                  <p>Group 1</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/judgement11" tag={Link}>
                    <i className="now-ui-icons education_glasses"></i>
                    Judgement 1
                  </DropdownItem>

                  <DropdownItem to="/judgement21" tag={Link}>
                    <i className="now-ui-icons transportation_air-baloon"></i>
                    Judgement 2
                  </DropdownItem>

                  <DropdownItem to="/judgement31" tag={Link}>
                    <i className="now-ui-icons health_ambulance"></i>
                    Judgement 3
                  </DropdownItem>

                  <DropdownItem to="/judgement41" tag={Link}>
                    <i className="now-ui-icons business_bank"></i>
                    Judgement 4
                  </DropdownItem>

                  <DropdownItem to="/judgement51" tag={Link}>
                    <i className="now-ui-icons shopping_cart-simple"></i>
                    Judgement 5
                  </DropdownItem>

                  <DropdownItem to="/judgement61" tag={Link}>
                    <i className="now-ui-icons business_briefcase-24"></i>
                    Judgement 6
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={looksTwoIcon} alt="Group 2 Icon" />
                  <p>Group 2</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/judgement12" tag={Link}>
                    <i className="now-ui-icons education_glasses"></i>
                    Judgement 1
                  </DropdownItem>
                  <DropdownItem to="/judgement22" tag={Link}>
                    <i className="now-ui-icons transportation_air-baloon"></i>
                    Judgement 2
                  </DropdownItem>
                  <DropdownItem to="/judgement32" tag={Link}>
                    <i className="now-ui-icons health_ambulance"></i>
                    Judgement 3
                  </DropdownItem>
                  <DropdownItem to="/judgement42" tag={Link}>
                    <i className="now-ui-icons business_bank"></i>
                    Judgement 4
                  </DropdownItem>
                  <DropdownItem to="/judgement52"  tag={Link}>
                    <i className="now-ui-icons shopping_cart-simple"></i>
                    Judgement 5
                  </DropdownItem>
                  <DropdownItem to="/judgement61" tag={Link}>
                    <i className="now-ui-icons business_briefcase-24"></i>
                    Judgement 6
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={looksTwoIcon} alt="Group 2 Icon" />
                  <p>POLLs</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/poll_11" tag={Link}>
                    <i className="now-ui-icons business_bulb-63"></i>
                    Poll 1
                  </DropdownItem>
                  {/*<DropdownItem to="/poll_12" tag={Link}>*/}
                  {/*  <i className="now-ui-icons business_bank"></i>*/}
                  {/*  Judgement 1-2*/}
                  {/*</DropdownItem>*/}
                  {/*<DropdownItem to="/poll_13" tag={Link}>*/}
                  {/*  <i className="now-ui-icons business_briefcase-24"></i>*/}
                  {/*  Judgement 1-3*/}
                  {/*</DropdownItem>*/}
                  <DropdownItem to="/poll_21" tag={Link}>
                    <i className="now-ui-icons business_badge"></i>
                    Poll 2
                  </DropdownItem>
                  {/*<DropdownItem to="/poll_22"  tag={Link}>*/}
                  {/*  <i className="now-ui-icons transportation_air-baloon"></i>*/}
                  {/*  Judgement 2-2*/}
                  {/*</DropdownItem>*/}
                  <DropdownItem to="/poll_31"  tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    Poll 3
                  </DropdownItem>
                  {/*<DropdownItem to="/poll_32"  tag={Link}>*/}
                  {/*  <i className="now-ui-icons transportation_air-baloon"></i>*/}
                  {/*  Judgement 3-2*/}
                  {/*</DropdownItem>*/}
                </DropdownMenu>
              </UncontrolledDropdown>
              {/*
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={dashboard} alt="dashboard" />
                  <p>Dashboard</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/dashboard1" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 1
                  </DropdownItem>
                  <DropdownItem to="/dashboard2" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 2
                  </DropdownItem>
                  <DropdownItem to="/dashboard3" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 3
                  </DropdownItem>
                  <DropdownItem to="/dashboard4" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 4
                  </DropdownItem>
                  <DropdownItem to="/dashboard5" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 5
                  </DropdownItem>
                  <DropdownItem to="/dashboard6" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Dashboard 6
                  </DropdownItem>
                  <DropdownItem to="/dashboardPoll1" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Poll 1
                  </DropdownItem>
                  <DropdownItem to="/dashboardPoll2" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Poll 2
                  </DropdownItem>
                  <DropdownItem to="/dashboardPoll3" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    Poll 3
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              */}
              {/*/!* <NavItem>*/}
              {/*    <Button*/}
              {/*        className="nav-link btn-default"*/}
              {/*        color={buyButtonColor}*/}
              {/*        onClick={_=>{*/}
              {/*          navigate('/dashboard')*/}
              {/*        }}*/}
              {/*        target="_blank"*/}
              {/*    >*/}
              {/*      <p>Dashboard</p>*/}
              {/*    </Button>*/}
              {/*  </NavItem> *!/*/}



            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
