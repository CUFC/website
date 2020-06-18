import React from "react"
import Heading from "../components/heading"
import Page from "../components/page"
import CommitteeCard from "../components/committeeCard"
import { graphql } from "gatsby"

const CommitteeList = ({ data }) => {
  return (
    data.map(member => <CommitteeCard name={member.name} role={member.role} email={member.crsid+'@cam.ac.uk'} />)
  )
}

export default function Committee({ data }) {
  return (
    <Page>
      <Heading>
        Committee Details go below...
      </Heading>
      <CommitteeList data={data.allTextYaml.edges[0].node.committee}/>
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
