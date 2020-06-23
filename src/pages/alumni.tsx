import React from "react"
import Page from "../components/specialised/Page"
import { graphql } from "gatsby"

export default function Alumni({ data }) {
  return (
    <Page image={data.file.childImageSharp.fluid}>
      <h1>
        Information for Alumni
      </h1>
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
