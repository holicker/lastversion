import React from "react";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

const ResponsiveBlock = styled(BasicDiv)`
  /* padding-left: 1rem;
  padding-right: 1rem; */
  width: 1366px;

  @media (max-width: 1366px) {
    width: 1024px;
  }

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
