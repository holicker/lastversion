import OpenColor from "open-color";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  text-decoration: none;
  &:link {
    color: ${OpenColor.white};
  }
  &:hover {
    color: ${OpenColor.white};
  }
  &:active {
    color: ${OpenColor.white};
  }
  &:visited {
    color: ${OpenColor.white};
  }
`;