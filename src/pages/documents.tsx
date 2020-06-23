import React from "react"
import { graphql } from "gatsby"
import Page from "../components/specialised/Page"

export default function Documents({ data }) {
  return (
    <Page image={data.image.childImageSharp.fluid}>
      <h1>Club Documents</h1>
      <p>Below are all the offical club documents. Feel free to peruse at will.</p>
      <ul>
      {data.files.edges.map(element =>
        <li><a href={element.node.publicURL} css={`text-decoration: underline;`}>{element.node.name}</a></li>)}
      </ul>
    </Page>
  );
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "varsity_2020.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    files: allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }`
