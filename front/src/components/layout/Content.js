import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import Responsive from "../common/Responsive";

const ContentBlock = styled(BasicBlock)`
  display: flex;
  //  background-color: ${OpenColor.orange[5]};
  flex: 1;
  justify-content: center;
`;

const ContentWrapper = styled(Responsive)`
  background-color: white;
`;

const Content = ({ children }) => {
  return (
    <ContentBlock>
      <ContentWrapper>{children}</ContentWrapper>
    </ContentBlock>
  );
};

export default Content;
