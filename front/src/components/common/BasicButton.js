import OpenColor from "open-color";
import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  background: ${OpenColor.orange[7]};
  &:hover {
    background: ${OpenColor.orange[4]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  &:disabled {
    background: ${OpenColor.gray[3]};
    color: ${OpenColor.gray[5]};
    cursor: not-allowed;
  }

`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const BasicButton = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default BasicButton;
