import styled from 'styled-components'

export const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.colors.black};
  }
`