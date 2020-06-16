import React from "react"
import styled from "styled-components"
import { colors } from "../style"

const BarContainer = styled.button`
  background-color: #FFF0;
  border: 3px solid ${colors.primary};
  border-radius: 10px;`

const Bar = styled.div`
  width: 24px;
  height: 3px;
  background-color: ${colors.primary};
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 4px;`

const TopBar = styled(Bar)`
  ${props => props.open && 'transform: rotate(-45deg) translate(-9px, 6px);'};`

const MiddleBar = styled(Bar)`
  ${props => props.open && 'opacity: 0;'};`

const BottomBar = styled(Bar)`
  ${props => props.open && 'transform: rotate(45deg) translate(-8px, -8px);'};`

const Hamburger = ( { onClick, open, className } ) => {
  return (
    <BarContainer onClick={onClick} className={className}>
      <TopBar open={open}/>
      <MiddleBar open={open}/>
      <BottomBar open={open}/>
    </BarContainer>
  )
}

export default Hamburger
