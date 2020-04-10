import styled, {css} from "styled-components";

interface ButtonProps {
  readonly success?: boolean;
  readonly secondary?: boolean;
  readonly failure?: boolean;
  readonly sm?: boolean;
  readonly disabled?: boolean;
  readonly full?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.theme.primaryColorLight};
  border: 2px solid #0facf3;
  border-radius: 15px;
  padding: 10px 10px;
  ${({ sm }) => sm && "padding: 6px 6px;"}
  min-width: 150px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.75s;
  -moz-transition: all 0.75s;
  -o-transition: all 0.75s;
  -ms-transition: all 0.75s;
  transition: all 0.75s;
  transform: translateY(1px);
  font-weight: 500;

  font-family: ${props => props.theme.textFontFamily};

  ${props => props.secondary &&
    css`
      color: ${props => props.theme.primaryColorLight};
      background: transparent;
      border-color: ${props => props.theme.primaryColorLight};
    `}
    ${props =>
      props.success &&
      css`
        background: ${props => props.theme.successColor};
        border-color: ${props => props.theme.successColor};
      `}
  ${props =>
    props.failure &&
    css`
      background: ${props => props.theme.errorColor};
      border-color: ${props => props.theme.errorColor};
    `}

  ${props => props.full && "width: 100%;"}

  &:hover {
    -webkit-transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    -o-transition: transform 0.5s;
    -ms-transition: transform 0.5s;
    transition: transform 0.5s;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
