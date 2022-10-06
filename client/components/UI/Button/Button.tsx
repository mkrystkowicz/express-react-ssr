import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 6px 18px;
  border: none;
  cursor: pointer;
`