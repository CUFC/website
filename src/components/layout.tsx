import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import Footer from "./footer"
import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from '../style'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.sans};
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.text};`

const MainContent = styled.main`
  width: 100%;
  flex: 1 1 auto;`

export default function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <OuterContainer>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </OuterContainer>
    </>
  )
}
