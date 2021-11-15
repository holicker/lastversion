import OpenColor from "open-color";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

export const BasicItem = styled(BasicDiv)`
  display: flex;
  justify-content: center;
  //padding: 0.5rem;
  border: none;
  color: ${OpenColor.orange[6]};
  font-size: 1rem;
  font-weight: bold;
`;
