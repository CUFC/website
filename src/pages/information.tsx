import React from "react"
import Page from "../components/specialised/Page"
import { graphql } from "gatsby"
import styled from "styled-components"
import FlexRow from "../components/reuseable/FlexRow"
import RowItem from "../components/reuseable/RowItem"

const LocationMap = styled.iframe`
  width: 100%;
  height: 450px;
  border-style: solid;
  border-radius: 2px;`

export default function Information({ data }) {
  return (
    <Page image={data.headerImage.childImageSharp.fluid}>
      <h1>
        Club Information
      </h1>
      <p>Hopefully any information you may need to find out about the club is listed below. If not, then feel free to contact any of the committee members to get more details.</p>
      <h2>Joining</h2>
      <FlexRow>
        <RowItem bases={100}>
          <p>It doesn't matter if you're a new student, have been at Cambridge for a while, or even if you've never tried fencing before. At CUFC we strive to offer opportunities for students to fence at all levels.</p>
          <h3>Start of year</h3>
          <p>If it's the start of the year, then it's probably best if you come and see us at either the student union freshers' fair or the special sport freshers' fair (we will have stalls at both). There you'll be able to get the most up to date information and quickest answers to any queries.</p>
          <h3>Any other time</h3>
          <p>Just because it's not the start of the academic year doesn't mean it's too late (or early) to join the club. If you're keen, just get in contact with the committe who will be able to share more details about joining.</p>
        </RowItem>
      </FlexRow>
      <h2>Training Times</h2>
      <FlexRow>
        <RowItem bases={[100, 100, 50, 50]}>
          <p>We split training into three different types of session: Beginnner, Open, and Blues. The beginner sessions are reserved for beginners following our beginners programme that runs throughout the year. If you have never fenced before, these are the sessions you will go to.  Most members who have fenced before will find themselves attending our Open sessions. Finally, the Blues sessions are special squad training sessions, and attendance is by invitation from team captains only.</p>
        </RowItem>
        <RowItem bases={[100, 100, 50, 50]}>
          <ul>
            <li>Tuesday:
              <ul>
                <li>15:30-17:25: Beginners</li>
                <li>17:00-18:00: TTR</li>
              </ul>
            </li>
            <li>Thursday:
              <ul>
                <li>16:30-18:25: Open</li>
              </ul>
            </li>
            <li>Friday:
              <ul>
                <li>16:30-18:25: Beginners</li>
              </ul>
            </li>
            <li>Saturday:
              <ul>
                <li>14:00-15:55: Blues</li>
              </ul>
            </li>
            <li>Sunday:
              <ul>
                <li>10:30-13:25: Open</li>
              </ul>
            </li>
          </ul>
        </RowItem>
      </FlexRow>
      <h2>Training Location</h2>
      <FlexRow>
        <RowItem bases={[100, 100, 50, 50]}>
          <p>Almost all of our training takes place at the University Sports Centre in the studios which can be found on the first floor. Any changes to this will be relayed to members in advance.</p>
          <p>University of Cambridge Sports Centre<br />
             Philippa Fawcett Drive<br />
             Cambridge<br />
             CB3 0AS</p>
        </RowItem>
        <RowItem bases={[100, 100, 50, 50]}><LocationMap src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3__ZYUh32EcRort1wB8MPbc&key="+data.mapEmbedKey.nodes[0].mapEmbedKey}></LocationMap></RowItem>
      </FlexRow>
      <h2>Events</h2>
      <FlexRow>
        <RowItem bases={[100, 100, 50, 50]}>
          <h3>Varsity</h3>
          <p>While our teams do fence in BUCS leagues, the highlight of the year for the club is certainly the annual Varsity match against Oxford which all of our teams take part in. To follow updates in the lead up to this event, or watch it on the day, follow us on social media.</p>
          <h3>Other events</h3>
          <p>Beyond Varsity, we take part in the BUCS leagues, the progress of which can be followed on the BUCS website. For the beginners we also have a Novice Varsity against the Oxford beginners at the end of the year.</p>
        </RowItem>
        <RowItem bases={[100, 100, 50, 50]}>
          <div css={`background: white; width: 100%; height: 100%;`}></div>
        </RowItem>
      </FlexRow>
    </Page>
  )
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "varsity_2020.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mapEmbedKey: allTextYaml {
      nodes {
        mapEmbedKey
      }
    }
  }`
