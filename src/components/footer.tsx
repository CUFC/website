import React from "react"
import styled from "styled-components"
import { colors } from "../style"

const FooterContainer = styled.footer`
  width: 100%;
  margin: -10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: ${colors.backgroundSecondary}`

const FlexItem = styled.div`
  margin: 10px;`

export default function Footer() {
  return (
    <FooterContainer>
      <FlexItem>© 2020 Cambridge University Fencing Club</FlexItem>
    </FooterContainer>
  )
}
