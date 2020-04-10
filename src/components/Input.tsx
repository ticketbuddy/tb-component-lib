import styled, {css} from "styled-components"

interface InputProps {
  readonly lg?: boolean;
  readonly error?: boolean;
  readonly success?: boolean;
}

const sharedInputStyle = css<InputProps>`
  padding: 0.9rem 1.1rem;
  padding: ${(props: InputProps) => props.lg && "1.2rem 1.4rem;"}
  font-size: 1.2rem;
  line-height: 1.3;
  border-radius: 0.375rem;
  border: 1px solid #f2f2f2;
  outline: none;
  min-width: 100%;
  box-sizing: border-box;
  -webkit-transition: border 0.75s;
  -moz-transition: border 0.75s;
  -o-transition: border 0.75s;
  -ms-transition: border 0.75s;
  transition: border 0.75s;
  ${(props) => (props.error && `border-color: ${props.theme.errorColor}`)};
  ${(props) => (props.success && `border-color: ${props.theme.successColor}`)};
  font-size: 1.0625rem;
  font-family: ${props => props.theme.textFontFamily};
  &:focus {
    border: 1px solid ${(props) => props.theme.primaryColorLight};
  }
`;

export const Input = styled.input`
  ${sharedInputStyle}
`;

export const TextArea = styled.textarea`
  ${sharedInputStyle}
`;
