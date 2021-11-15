/* eslint-disable jsx-a11y/alt-text */
import OpenColor from "open-color";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import Responsive from "../common/Responsive";
import { BasicItem } from "../common/BasicItem";
import logo from "../../img/logo_orange6.png";

const HeaderBlock = styled(BasicBlock)`
  justify-content: center;
  display: flex;
  top: 0;
  height: 8.5rem;
  // background-color: ${OpenColor.orange[2]};
`;

const HeaderWrapper = styled(Responsive)`
  background-color: white;
  display: flex;

  .left {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    flex: 1;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .right {
    flex: 1;
    display: block;
    width: 300px;
  }

  .logo {
    padding: 0 0.3rem;
    margin: 0 0 0.5rem 0;
    height: 80%;
  }

  .cname {
    font-size: 4.3rem;
    letter-spacing: -0.25rem;
    line-height: 100%;
    flex: 0;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .desc {
    color: ${OpenColor.gray[7]};
    font-size: 1rem;
    line-height: 100%;
    letter-spacing: -0.1rem;
    flex: 0;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

const HeaderItem = styled(BasicItem)`
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <HeaderItem className="left">
          <HeaderItem className="logo">
            <img src={logo} al="streetvendorlogo" height="80%" width="100%" />
          </HeaderItem>
        </HeaderItem>
        <HeaderItem className="center">
          <HeaderItem className="cname">STREET VENDOR</HeaderItem>
          <HeaderItem className="desc">대한민국 디지털 노점 플랫폼</HeaderItem>
        </HeaderItem>
        <HeaderItem className="right"></HeaderItem>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
