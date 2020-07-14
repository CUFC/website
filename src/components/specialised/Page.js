import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../reusable/Layout"
import MainContainer from "../reusable/MainContainer"

const NavSkip = styled.div`
  height: 70px`

const HeaderImage = styled(Img)`
  height: 300px;
  margin: 0 auto;
  width: 900px;
  @media(max-width: 900px) {
    border-style: none;
    width: 100vw;
  }`

export default function Page({ children, image, seo }) {
  return (
    <Layout seo={seo}>
      <NavSkip />
      <HeaderImage fluid={image} />
      <MainContainer>
        {children}
      </MainContainer>
    </Layout>
  )
}
