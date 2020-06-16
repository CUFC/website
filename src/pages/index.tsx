import React from "react"
import { Link, PageProps, graphql, withPrefix } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Heading from "../components/Heading"
import Container from "../components/Container"

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      <Container>
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
