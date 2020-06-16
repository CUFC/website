import React from "react"
import styled from "styled-components"
import { colors } from "../style"

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: ${colors.backgroundSecondary}`

export default function Footer() {
  return (
    <FooterContainer>
      © 2020 Cambridge University Fencing Club
    </FooterContainer>
  )
}
