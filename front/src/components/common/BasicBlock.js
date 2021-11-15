import OpenColor from "open-color";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

export const BasicBlock = styled(BasicDiv)`
  //justify-content: center; 이건 적용이 안되네?
  background-color: ${OpenColor.orange[0]};
`;
