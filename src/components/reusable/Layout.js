import React from "react"
import styled from "styled-components"
import SEO from "./SEO"
import Navbar from "../specialised/Navbar"
import Footer from "../specialised/Footer"
import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from '../../style'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.serif};
  }
  a {
    color: ${colors.primary};
  }`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.text};`;

const MainContent = styled.main`
  width: 100%;
  flex: auto;`;

export default function Layout({ children, seo }) {
  return (
    <>
      <GlobalStyle />
      <SEO {...seo} />
      <OuterContainer>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </OuterContainer>
    </>
  );
}
