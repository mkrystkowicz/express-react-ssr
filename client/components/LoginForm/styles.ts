import styled from "styled-components";
import { Input } from "../UI/Input/Input";
import { StyledWrapper } from "../UI/Wrapper/Wrapper";

export const Title = styled.h2`
  color: ${props => props.theme.color};
  font-size: 22px;
`;

export const StyledInput = styled(Input)`
  margin: 16px;
`

export const FormWrapper = styled(StyledWrapper)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`
