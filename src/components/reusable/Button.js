import styled from "styled-components"
import { colors } from "../../style";

const Button = styled.button`
  color: ${colors.primary};
  background-color: #fff0;
  font-size: large;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid ${colors.primary};
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  transition: 1.0s;
  :hover {
    background-color: ${colors.primary};
    color: ${colors.background};
  }`;

export default Button;