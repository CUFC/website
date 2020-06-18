import React from "react"
import { graphql } from "gatsby"
import Heading from "../components/heading"
import Page from "../components/page"

export default function Documents({ data }) {
  return (
    <Page>
      <Heading>Club Documents</Heading>
      <p>Below are all the offical club documents. Feel free to peruse at will.</p>
      <ul>
      {data.allFile.edges.map(element =>
        <li><a href={element.node.publicURL} css={`text-decoration: underline;`}>{element.node.name}</a></li>)}
      </ul>
    </Page>
  );
}

export const query = graphql`
query {
  allFile(filter: { extension: { eq: "pdf" } }) {
    edges {
      node {
        name
        publicURL
      }
    }
  }
}
`
