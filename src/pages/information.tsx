import React from "react"
import Heading from "../components/specialised/Heading"
import Page from "../components/specialised/Page"
import { graphql } from "gatsby"
import styled from "styled-components"
import FlexRow from "../components/reuseable/FlexRow"
import RowItem from "../components/reuseable/RowItem"

const LocationMap = styled.iframe`
  width: 100%;
  height: 450px;
  border-style: solid;
  border-radius: 2px;`

export default function Information({ data }) {
  return (
    <Page image={data.headerImage.childImageSharp.fluid}>
      <Heading>
        Club Information
      </Heading>
      <p>Hopefully any information you may need to find out about the club is listed below. If not, then feel free to contact any of the committee members to get more details.</p>
      <h2>Joining</h2>
      <FlexRow>
        <RowItem bases={100}>If you're interested then please join and this is how you can do it etc.</RowItem>
      </FlexRow>
      <h2>Training Times</h2>
      <FlexRow>
        <RowItem bases={[100, 100, 50, 50]}>We train all day every day for ever and ever and ever... etc</RowItem>
        <RowItem bases={[100, 100, 50, 50]}><ul><li>Monday</li><li>Tuesday</li></ul></RowItem>
      </FlexRow>
      <h2>Training Location</h2>
      <FlexRow>
        <RowItem bases={[100, 100, 50, 50]}>Some info to go here about the training location and that it may change etc. Needs to list the address and room and that if differs depending on the day.</RowItem>
        <RowItem bases={[100, 100, 50, 50]}><LocationMap src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3__ZYUh32EcRort1wB8MPbc&key="+data.mapEmbedKey.nodes[0].mapEmbedKey}></LocationMap></RowItem>
      </FlexRow>
    </Page>
  )
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "varsity_2020.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mapEmbedKey: allTextYaml {
      nodes {
        mapEmbedKey
      }
    }
  }`
