import React from "react"
import Layout from "../components/reusable/Layout"
import styled from "styled-components"

const CentreHeading = styled.h1`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
text-align: center;`

export default function OldBlues({ data }) {
  return (
    <Layout seo={{ title: "Page not found" }}>
      <CentreHeading>
        Page not found :'(
      </CentreHeading>
    </Layout>
  )
}