import OpenColor from "open-color";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import { BasicDiv } from "../common/BasicDiv";
import Responsive from "../common/Responsive";

const FooterBlock = styled(BasicBlock)`
  margin: 0px 0px;
  bottom: 0px;
  min-height: 50px;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled(Responsive)`
  background-color: white;
  color: ${OpenColor.gray[5]};
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWrapper>
        <p>Copyright STREET VENDOR All rights reserved.</p>
      </FooterWrapper>
    </FooterBlock>
  );
};

export default Footer;
