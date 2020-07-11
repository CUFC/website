import React from "react"
import Page from "../components/specialised/Page"
import { graphql } from "gatsby"

export default function OldBlues({ data }) {
  return (
    <Page image={data.file.childImageSharp.fluid}>
      <h1>
        Information for Old Blues
      </h1>
      <p>We know how much a part of our lives the club has become and are sure this is also true for alumni. If that's you, then all the information you could need is below:</p>
      <h2>Keeping up to date</h2>
      <p>The easiest way to keep up to date with general news of the club is of course by following us on social media (links can be found at the bottom of the page). For alumni-specific news and events, make sure you're on the mailing list. If your're not, then get in contact with our Old Blues officer so that you can be added.</p>
      <h2>Supporting the club</h2>
      <p>If you enjoyed your time in the club and hope that it continues to perform at the highest level, topping BUCS and smashing Oxf*rd (GDBO) then there is something you can do to help. We have recently set up a donation page that can be accessed <a href="/">here</a>.</p>
      <h2>Events</h2>
      <p>Besides Varsity, the Old Blues match and dinner is an annual event that continues to run. To hear about it and book, please make sure that you're on the mailing list so you don't miss out. If you're not sure or think you may have missed a communication, don't hesitate in contacting us.</p>
    </Page>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "annual_dinner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`
