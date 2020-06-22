import React from "react"
import Heading from "../components/specialised/Heading"
import Page from "../components/specialised/Page"
import { graphql } from "gatsby"

export default function Alumni({ data }) {
  return (
    <Page image={data.file.childImageSharp.fluid}>
      <Heading>
        Information for Alumni
      </Heading>
      <p>look, some info here!</p>
    </Page>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "varsity_2020.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`
