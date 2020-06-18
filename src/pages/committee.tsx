import React from "react"
import Heading from "../components/heading"
import Page from "../components/page"
import CommitteeCards from "../components/committeeCards"
import { graphql } from "gatsby"

export default function Committee({ data }) {
  return (
    <Page>
      <Heading>
        The committee
      </Heading>
      <p>If you have any queries regarding any aspect of the club then feel free to contact any of the committee members listed below:</p>
      <CommitteeCards data={data.allTextYaml.edges[0].node.committee}/>
    </Page>
  )
}

export const query = graphql`
query {
  allTextYaml {
    edges {
      node {
        committee {
          name
          role
          crsid
        }
      }
    }
  }
}
`
