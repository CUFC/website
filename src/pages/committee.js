import React from "react"
import Page from "../components/specialised/Page"
import CommitteeCards from "../components/specialised/CommitteeCards"
import { graphql } from "gatsby"
import YAMLData from "../data/data.yaml"

export default function Committee({ data }) {
  return (
    <Page image={data.image.childImageSharp.fluid} seo={{title: "Committee"}}>
      <h1>
        The Committee
      </h1>
      <p>If you have queries regarding any aspect of the club then feel free to contact any of the committee members listed below:</p>
      <CommitteeCards data={YAMLData.committee}/>
    </Page>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "arran_fleche.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`
