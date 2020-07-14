import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import { colors, breaks } from "../../style"
import Button from "../reusable/Button"

const LogoContainer = styled.div`
  z-index: 2;
  width: 36px;
  margin: 10px`;

const Logo = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 80, pngQuality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <LogoContainer as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoContainer>
  );
}

const NavbarContainer = styled.nav`
 position: fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 70px;
 width: 100%;
 transition: 1.0s;
 background-color: ${props => props.transparentNav ? '#fff0' : colors.backgroundSecondary};
 ${props => !props.transparentNav && 'box-shadow: 0 0 10px 2px #111;'};
 z-index: 1;`;

const NavLink = (props) => <Button {...props} as={Link}></Button>

const NavList = styled.div`
  display: none;
  margin: -10px 10px;
  @media (min-width: ${breaks.medium}) {
    display: block;
  }`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${props => props.navbarOpen ? '100%' : '0'};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: ${colors.backgroundSecondary};
  opacity: ${props => props.navbarOpen ? 1 : 0};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 70px;
  @media (min-width: ${breaks.medium}) {
    display: none;
  }`;

const NavLinks = ({ transparentNav, sideNav }) => {
  return (
    <>
      <NavLink to='/information' transparentNav={transparentNav} sideNav={sideNav}>Information</NavLink>
      <NavLink to='/committee' transparentNav={transparentNav} sideNav={sideNav}>Committee</NavLink>
      <NavLink to='/oldblues' transparentNav={transparentNav} sideNav={sideNav}>Old Blues</NavLink>
      <NavLink to='/documents' transparentNav={transparentNav} sideNav={sideNav}>Documents</NavLink>
    </>
  )
};

const MobileHamburger = styled(Hamburger)`
  margin: 10px;
  z-index: 2;
  @media (min-width: ${breaks.medium}) {
    display: none;
  }`;


export default function Navbar () {
  const [atTop, setAtTop] = useState(true);
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const handleSidenav = () => {
    setSidenavOpen(!sidenavOpen)
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', event => {
        if (window.scrollY === 0 && !atTop) {
          setAtTop(true);
        }
        else if (window.scrollY !== 0 && atTop) {
          setAtTop(false);
        }
      });
    }
  });

  return (
    <NavbarContainer transparentNav={atTop}>
      <Logo />
      <NavList><NavLinks transparentNav={atTop} sideNav={false} /></NavList>
      <MobileHamburger onClick={handleSidenav} open={sidenavOpen} />
      <SideNav navbarOpen={sidenavOpen}>
        <NavLinks transparentNav={false} sideNav={true} />
      </SideNav>
    </NavbarContainer>
  );
}
