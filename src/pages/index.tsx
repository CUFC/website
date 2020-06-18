import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Heading from "../components/heading"
import Container from "../components/container"

export default function Index({ data }) {
  return (
    <Layout>
      <Hero />
      <Container id="content">
        <Heading>President's welcome</Heading>
          <div>
            {data.allTextYaml.edges[0].node.welcome.map((element: any) => {
              return <p>{element}</p>
            })}
          </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  allTextYaml {
    edges {
      node {
        welcome
      }
    }
  }
}
`
