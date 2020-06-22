import React from "react"
import styled from "styled-components"
import { breaks } from "../../style"

const RowFlex = styled.div`
  flex: 0 1 ${props => props.bases.small || 'auto'};
  @media (min-width: ${breaks.small}) {
    flex: 0 1 ${props => props.bases.medium || 'auto'};
  }
  @media (min-width: ${breaks.medium}) {
    flex: 0 1 ${props => props.bases.large || 'auto'};
  }
  @media (min-width: ${breaks.large}) {
    flex: 0 1 ${props => props.bases.xLarge || 'auto'};
  }`

const Container = styled.div`
  margin: 1rem;`

const RowItem = (props) => {
  var filled = ['auto', 'auto', 'auto', 'auto'];

  if (typeof(props.bases) === "number" ) {
    const basis = props.bases + "%";
    filled = [basis, basis, basis, basis];
  }
  else if (Array.isArray(props.bases)) {
    filled = props.bases.map((n: number) => n + "%");
  }

  const bases = {'small': filled[0], 'medium': filled[1], 'large': filled[2], 'xLarge': filled[3]};

  return (<RowFlex bases={bases}><Container {...props}></Container></RowFlex>);
}

export default RowItem;