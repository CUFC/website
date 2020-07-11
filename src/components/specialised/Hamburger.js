import React from "react"
import styled from "styled-components"
import { colors } from "../../style"
import Button from "../reuseable/Button"

const Bar = styled.div`
  width: 20px;
  height: 1px;
  background-color: ${colors.primary};
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 4px;
  ${Button}:hover & {
    background-color: ${colors.background};
  }`;

const TopBar = styled(Bar)`
  ${props => props.open && 'transform: rotate(-45deg) translate(-5px, 5px);'};`

const MiddleBar = styled(Bar)`
  ${props => props.open && 'opacity: 0;'};`

const BottomBar = styled(Bar)`
  ${props => props.open && 'transform: rotate(45deg) translate(-5px, -5px);'};`

const Hamburger = ( { onClick, open, className } ) => {
  return (
    <Button onClick={onClick} className={className}>
      <TopBar open={open}/>
      <MiddleBar open={open}/>
      <BottomBar open={open}/>
    </Button>
  )
}

export default Hamburger
