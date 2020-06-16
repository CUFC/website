import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Hamburger from "./hamburger"
import { colors, fonts, breaks } from "../style"

const LogoContainer = styled.div`
  width: 36px;
  margin: 10px auto 10px 10px`;

const Logo = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <LogoContainer>
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoContainer>
  );
}

const NavbarContainer = styled.nav`
 position: fixed;
 display: flex;
 align-items: center;
 width: 100%;
 transition: 1.0s;
 background-color: ${props => props.transparentNav ? '#fff0' : colors.backgroundSecondary};
 z-index: 1;`;

const NavLink = styled(Link)`
  font-family: ${fonts.serif};
  color: ${colors.primary};
  font-size: large;
  margin: 0px 10px;
  border: 1px solid ${props => props.transparentNav ? colors.primary : '#fff0'};
  transition: 1.0s;
  border-radius: 5px;
  padding: 5px 10px;`;

const NavList = styled.div`
  margin: 0;
  @media (max-width: ${breaks.small}) {
    display: none;
  }`;

const SideNav = styled.div`
  height: 100%;
  width: ${props => props.navbarOpen ? '250px' : '0px'};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breaks.small}) {
    display: none;
  }`;

const NavLinks = ({ transparentNav, sideNav }) => {
  return (
    <>
      <NavLink to='/' transparentNav={transparentNav} sideNav={sideNav}>Home</NavLink>
      <NavLink to='/documents' transparentNav={transparentNav} sideNav={sideNav}>Documents</NavLink>
      <NavLink to='/committee' transparentNav={transparentNav} sideNav={sideNav}>Committee</NavLink>
    </>
  )
};

const MobileHamburger = styled(Hamburger)`
  margin: 10px;
  z-index: 2;
  @media (min-width: ${breaks.small}) {
    display: none;
  }`;

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);
  window.addEventListener('scroll', () => {
    if (window.scrollY == 0 && !scrollTop) {
      setScrollTop(true);
    }
    else if (window.scrollY != 0 && scrollTop) {
      setScrollTop(false);
    }
  });
  return (
    <NavbarContainer transparentNav={scrollTop}>
      <Logo />
      <NavList><NavLinks transparentNav={scrollTop} sideNav={false} /></NavList>
      <MobileHamburger onClick={() => setNavbarOpen(!navbarOpen)} open={navbarOpen}/>
      <SideNav navbarOpen={navbarOpen}>
        <NavLinks transparentNav={false} sideNav={true} />
      </SideNav>
    </NavbarContainer>
  );
}
