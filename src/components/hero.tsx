import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { colors, fonts } from "../style"

const HeroImage = styled(BackgroundImage)`
  background-color: #040e18;
  height: 100vh`

const LogoContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 90px;`

const TitleText = styled.p`
  text-align: center;
  font-size: xx-large;
  color: ${colors.primary};
  font-family: ${fonts.serif};
  text-shadow: 0 0 0.2em black;`

const SubtitleText = styled.p`
  text-align: center;
  font-size: x-large;
  color: ${colors.primary};
  font-family: ${fonts.serif};
  text-shadow: 0 0 0.2em black`

const OverlayContainer = styled.div`
  padding: 30vh 1em;`

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "cufc_trinity.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
  `)
  const background = [`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`, data.background.childImageSharp.fluid]
  const logo = data.logo.childImageSharp.fixed

  return (
    <HeroImage Tag='section' fluid={background}>
      <OverlayContainer>
        <LogoContainer><Img fixed={logo} /></LogoContainer>
        <TitleText>
          Cambridge University Fencing Club
        </TitleText>
        <SubtitleText>Est. 1896</SubtitleText>
      </OverlayContainer>
    </HeroImage>
  )
}

