import React from "react"
import styled from "styled-components"
import { fonts, colors } from '../style'
import Layout from "./layout"
import Container from "./container"

const NavSkipContainer = styled(Container)`
  margin-top: 70px;`

export default function Page({ children }) {
  return (
      <Layout>
          <NavSkipContainer>
            {children}
          </NavSkipContainer>
      </Layout>
  )
}
