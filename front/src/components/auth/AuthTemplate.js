import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${OpenColor.orange[0]};
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  z-index: 2;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 3rem;
    text-align: center;
    font-weight: bold;
    font-size: 2.5rem;
    letter-spacing: 0.5px;
  }

  .second-logo {
    display: block;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.1px;
  }
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin: 5rem 0 0 0;
  width: 400px;
  background: white;
  border-radius: 20px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          STREET VENDOR
          <div className="second-logo">나만의 상점을 열어보세요!</div>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
