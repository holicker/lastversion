import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

export const BasicGrid = styled(BasicDiv)`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;
