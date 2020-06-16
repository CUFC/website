import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Heading from "../components/Heading"
import Container from "../components/Container"

export default function Documents({ data }) {
  return (
    <Layout>
      <Container>
        <Heading>Documents to go here</Heading>
        {data.allFile.edges.map(element =>
          <a href={element.node.publicURL}>{element.node.name}</a>)}
      </Container>
    </Layout>
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
