import React from "react"
import Hero from "../components/specialised/Hero"
import Layout from "../components/reuseable/Layout"
import Heading from "../components/specialised/Heading"
import MainContainer from "../components/reuseable/MainContainer"
import FlexRow from "../components/reuseable/FlexRow"
import RowItem from "../components/reuseable/RowItem"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Icon = styled.svg`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;`

const IGIcon = () => <Icon xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#304ffe" d="M32,42H16c-5.5,0-10-4.5-10-10V16c0-5.5,4.5-10,10-10h16c5.5,0,10,4.5,10,10v16 C42,37.5,37.5,42,32,42z"></path><path fill="#304ffe" fill-opacity=".29" d="M6,16v16c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10V16c0-1-0.1-1.9-0.4-2.8 C36,8.7,28.8,6,21,6c-3.7,0-7.3,0.6-10.7,1.8C7.7,9.6,6,12.6,6,16z"></path><path fill="#6200ea" d="M21,8c-5,0-9.6,1.2-13.8,3.2C6.4,12.7,6,14.3,6,16v16c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10 V16.2C36.5,11.1,29.1,8,21,8z"></path><path fill="#673ab7" d="M42,19c-5.3-5.5-12.7-9-21-9c-5.4,0-10.5,1.5-14.8,4.1C6.1,14.7,6,15.3,6,16v16c0,5.5,4.5,10,10,10 h16c5.5,0,10-4.5,10-10V19z"></path><path fill="#8e24aa" d="M42,22c-4.9-6.1-12.5-10-21-10c-5.6,0-10.7,1.7-15,4.6V32c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10 V22z"></path><path fill="#c2185b" d="M42,32v-6.6C37.5,18.6,29.8,14,21,14c-5.6,0-10.8,1.9-15,5v13c0,5.5,4.5,10,10,10h16 C37.5,42,42,37.5,42,32z"></path><path fill="#d81b60" d="M42,32v-2.4C38.4,21.6,30.4,16,21,16c-5.7,0-11,2.1-15,5.6V32c0,5.5,4.5,10,10,10h16 C37.5,42,42,37.5,42,32z"></path><path fill="#f50057" d="M41.6,34.8C39.7,25.2,31.2,18,21,18c-5.9,0-11.2,2.4-15,6.3V32c0,5.5,4.5,10,10,10h16 C36.5,42,40.4,39,41.6,34.8z"></path><path fill="#ff1744" d="M39.9,38C39.4,28,31.2,20,21,20c-6.1,0-11.5,2.9-15,7.4V32c0,5.5,4.5,10,10,10h16 C35.2,42,38.1,40.4,39.9,38z"></path><path fill="#ff5722" d="M21,22c-6.5,0-12.1,3.6-15,9v1c0,5.5,4.5,10,10,10h16c2.2,0,4.3-0.7,5.9-2c0-0.3,0.1-0.7,0.1-1 C38,29.6,30.4,22,21,22z"></path><path fill="#ff6f00" d="M21,24c-7,0-12.8,4.7-14.5,11.2c1.3,4,5.1,6.8,9.5,6.8h16c1.4,0,2.6-0.3,3.8-0.8 c0.1-0.7,0.2-1.5,0.2-2.2C36,30.7,29.3,24,21,24z"></path><path fill="#ff9800" d="M21,26c-6.9,0-12.5,5.3-12.9,12c1.8,2.4,4.7,4,7.9,4h16c0.6,0,1.1-0.1,1.7-0.2 C33.9,40.9,34,40,34,39C34,31.8,28.2,26,21,26z"></path><path fill="#ffc107" d="M31.6,42c0.3-1,0.4-2,0.4-3c0-6.1-4.9-11-11-11s-11,4.9-11,11c0,0.3,0,0.7,0.1,1 c1.7,1.2,3.7,2,5.9,2H31.6z"></path><path fill="#ffd54f" d="M21,30c-5,0-9,4-9,9c0,0.8,0.1,1.6,0.3,2.3c1.1,0.5,2.4,0.7,3.7,0.7h13.5c0.3-0.9,0.5-1.9,0.5-3 C30,34,26,30,21,30z"></path><path fill="#ffe082" d="M21,32.1c-3.9,0-7,3.1-7,7c0,1,0.2,1.9,0.6,2.8C15.1,42,15.5,42,16,42h11.4c0.4-0.9,0.6-1.9,0.6-2.9 C28,35.2,24.9,32.1,21,32.1z"></path><path fill="#ffecb3" d="M21,34.1c-2.8,0-5,2.2-5,5c0,1.1,0.4,2.1,1,2.9H25c0.6-0.8,1-1.8,1-2.9C26,36.3,23.8,34.1,21,34.1z"></path><path fill="#fff" d="M30,38H18c-4.4,0-8-3.6-8-8V18c0-4.4,3.6-8,8-8h12c4.4,0,8,3.6,8,8v12C38,34.4,34.4,38,30,38z M18,12c-3.3,0-6,2.7-6,6v12c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V18c0-3.3-2.7-6-6-6H18z"></path><path fill="#fff" d="M24 31c-3.9 0-7-3.1-7-7 0-3.9 3.1-7 7-7 3.9 0 7 3.1 7 7C31 27.9 27.9 31 24 31zM24 19c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5S26.8 19 24 19zM32 16c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1S32 15.4 32 16z"></path></Icon>
const TWIcon = () => <Icon xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></Icon>
const FBIcon = () => <Icon xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></Icon>
const socialIcons = [[IGIcon, "https://www.instagram.com/c_u_f_c/"], [TWIcon, "https://twitter.com/camunifencing"], [FBIcon, "https://www.facebook.com/CambridgeUniversityFencingClub/"]];

const SocialIcons = () => <FlexRow>{socialIcons.map(([icon, link]) => <RowItem bases={[50, 50, 50, 50]}><a href={link}>{icon()}</a></RowItem>)}</FlexRow>
const PartnerIcons = ({ icons }) => <FlexRow css={`align-items: center;`}>{icons.map((icon) => <RowItem bases={[50, 50, 50, 50]}>{<Img fluid={icon}/>}</RowItem>)}</FlexRow>

export default function Index({ data }) {
  return (
    <Layout>
      <Hero />
      <MainContainer id="content">
        <FlexRow css={`align-items: center;`}>
          <RowItem bases={[100, 100, 50, 50]} css={`text-align: justify;`}>
            <Heading>Presidents' welcome</Heading>
            <p>CUFC is one of the longest running fencing clubs in the country having been founded in 1896. The club prides itself on offering training in all three weapons and across a full spectrum of abilities, from complete novices attending our beginners’ courses to international fencers competing for our very successful first teams.</p>
            <p>All our fencers can benefit from individual lessons and group footwork run by our external coaches. Many of our fencers regularly enter individual competitions, ranging from local to international championships, and there is also the chance to compete for the University in BUCS and Varsity as part of our 1st or 2nd’s teams, or to take part in less-competitive friendlies against other university and local clubs. For anyone looking to start fencing, CUFC offers beginners’ courses in foil run by our advanced fencers, culminating in Easter Term in a Novice Varsity competition against beginners trained by our historic rivals Oxford.</p>
            <p>As well as training we have a busy social calendar, beginning with a Fresher’s Squash at the start of Michaelmas term, then meandering through various dinners, swaps and the odd pub trip before ending with a relaxed garden party in the summer.</p>
            <p>Whatever you are looking to get out of fencing we hope you will find it at CUFC. If you have any questions please do not hesitate to contact us or any other members of the committee.</p>
            <p css={`font-size: large;`}>Maddy Lee {'&'} James Terrill<br />CUFC Co-Presidents 2020-2021</p>
          </RowItem>
          <RowItem bases={[100, 100, 50, 50]}>
            <FlexRow css={`flex-direction: column; flex-wrap: nowrap`}>
              <RowItem>
                <h2>Partners</h2>
                <PartnerIcons icons={[data.vango.childImageSharp.fluid, data.kappa.childImageSharp.fluid]}/>
              </RowItem>
              <RowItem>
                <h2>Social</h2>
                <SocialIcons />
              </RowItem>
            </FlexRow>
          </RowItem>
        </FlexRow>
      </MainContainer>
    </Layout>
  )
}

export const query = graphql`
query {
  kappa: file(relativePath: { eq: "kappa.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  vango: file(relativePath: { eq: "vango.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`
