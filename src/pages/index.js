import React from "react"
import Hero from "../components/specialised/Hero"
import Layout from "../components/reusable/Layout"
import MainContainer from "../components/reusable/MainContainer"
import FlexRow from "../components/reusable/FlexRow"
import RowItem from "../components/reusable/RowItem"
import { graphql } from "gatsby"
import PartnerIcons from "../components/specialised/PartnerIcons"
import SocialIcons from "../components/specialised/SocialIcons"

export default function Index({ data }) {
  return (
    <Layout>
      <Hero />
      <MainContainer id="content">
        <FlexRow css={`align-items: center;`}>
          <RowItem bases={[100, 100, 60, 60]} css={`text-align: justify;`}>
            <h1>President's welcome</h1>
			<p>CUFC is one of the longest running fencing clubs in the country, having been founded in 1896. The club prides itself on offering training in all three weapons and across a full spectrum of abilities, from complete novices attending our beginners’ courses to international fencers competing for our very successful first teams.</p>
            <p>All our fencers can benefit from individual lessons run by our external coaches. Many of our fencers regularly enter individual competitions, ranging from local to international championships, and the club provides the chance to compete for the University in our 1st or 2nd’s teams in both inter-university BUCS competitions and the annual Varsity match against Oxford, as well as less-competitive friendlies against other university and local clubs. For anyone looking to start fencing, CUFC offers beginners’ courses in épée and foil run by certified coaches, culminating in a Novice Varsity competition in the second half of the year.</p>
            <p>As well as training we have a busy social calendar organised by our legendary social secretary, maintaining a regular schedule of ‘swaps’ with other sports clubs, interspersed with the occasional dinner. All this means that beginners and advanced fencers regularly mix, creating a strong community at the club.</p>
            <p>Whatever your experience level and whatever you are looking to get out of fencing you will be welcome at CUFC. If you have any questions please do not hesitate to contact me or any other members of the committee.</p>
			<p css={`font-size: large;`}>Samuel Bojarski<br />CUFC President 2022-2023</p>
          </RowItem>
          <RowItem bases={[100, 100, 40, 40]}>
            <FlexRow css={`flex-flow: column nowrap`}>
              <RowItem>
                <h2>Partners</h2>
                <PartnerIcons />
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
