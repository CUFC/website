import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import Page from "../components/page"

export default function Documents({ data }) {
  return (
    <Page>
      <Heading>Documents to go here</Heading>
      {data.allFile.edges.map(element =>
        <a href={element.node.publicURL}>{element.node.name}</a>)}
    </Page>
  )
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
