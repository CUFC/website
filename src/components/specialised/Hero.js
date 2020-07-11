import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { colors, fonts } from "../../style"
import scrollTo from 'gatsby-plugin-smoothscroll';

const HeroImage = (props) => {
  const HeightlessHero = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #040e18;
  height: ${props => props.realHeight};`

  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setHeight(window.innerHeight + 'px');
    }
  }, []);

  return <HeightlessHero {...props} realHeight={height} />;
}

const LogoContainer = styled.div`
  display: block;
  width: 90px;`

const TitleText = styled.p`
  font-size: xx-large;
  text-align: center;
  margin: 10px 0;
  color: ${colors.primary};
  font-family: ${fonts.serif};
  text-shadow: 0 0 0.2em black;`

const SubtitleText = styled.p`
  font-size: large;
  text-align: center;
  margin: 0;
  color: ${colors.primary};
  font-family: ${fonts.serif};
  text-shadow: 0 0 0.2em black`

const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;`

const DownArrow = () => {
  return (
    <svg css={`width: 50px; height: 50px;`}><rect fill="none" height="50" width="50"/><polygon fill={colors.primary} points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/></svg>
  )
}

const DownArrowContainer = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: none;

  animation: bounce 2s infinite;
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }`

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
      <div></div> {/* For spacing reasons to centre the logo and text */}
      <OverlayContainer>
        <LogoContainer><Img fixed={logo} /></LogoContainer>
        <TitleText>
          Cambridge University Fencing Club
        </TitleText>
        <SubtitleText>Est. 1896</SubtitleText>
      </OverlayContainer>
      <DownArrowContainer onClick={() => {scrollTo('#content')}}>
        <DownArrow />
      </DownArrowContainer>
    </HeroImage>
  )
}
