import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Hamburger from "./hamburger"
import { colors, fonts, breaks } from "../style"

const LogoContainer = styled.div`
  z-index: 2;
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
 ${props => !props.transparentNav && 'box-shadow: 0 0 10px 2px #111;'};
 z-index: 1;`;

const NavLink = styled(Link)`
  font-family: ${fonts.serif};
  color: ${colors.primary};
  font-size: large;
  margin: 5px 10px;
  border: 1px solid ${colors.primary};
  transition: 1.0s;
  border-radius: 5px;
  padding: 5px 10px;
  :hover {
    background-color: ${colors.primary};
    color: ${colors.background};
  }`;

const NavList = styled.div`
  margin: 0;
  @media (max-width: ${breaks.small}) {
    display: none;
  }`;

const SideNav = styled.div`
  height: 100%;
  width: ${props => props.navbarOpen ? '100%' : '0'};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: ${colors.backgroundSecondary};
  opacity: 0.8;
  box-shadow: 0 0 10px 2px #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 70px;
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

export default class Navbar extends React.Component {
  state = { atTop: true, sidenavOpen: false}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY == 0 && this.state['atTop']) {
      this.setState({ atTop: true });
    }
    else if (window.scrollY != 0 && this.state['atTop']) {
      this.setState({ atTop: false });
    }
  };

  handleSidenav = () => {
    this.setState({ sidenavOpen: !this.state['sidenavOpen'] })
  }

  render() {
    return (
      <NavbarContainer transparentNav={this.state['atTop']}>
        <Logo />
        <NavList><NavLinks transparentNav={this.state['atTop']} sideNav={false} /></NavList>
        <MobileHamburger onClick={this.handleSidenav} open={this.state['sidenavOpen']} />
        <SideNav navbarOpen={this.state['sidenavOpen']}>
          <NavLinks transparentNav={false} sideNav={true} />
        </SideNav>
      </NavbarContainer>
    );
}
}
