import styled from "styled-components";
import { colors, breaks } from "../../style";

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.width};
  height: ${props => props.height};
  
  border-radius: 2px;
  background-color: ${colors.backgroundSecondary};
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }`

export default Card;