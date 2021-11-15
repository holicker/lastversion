import OpenColor from "open-color";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import { BasicDiv } from "../common/BasicDiv";
import { BasicLI } from "../common/BasicLI";
import { BasicUL } from "../common/BasicUL";
import Responsive from "../common/Responsive";

const TopBlock = styled(BasicBlock)`
  justify-content: center;
  display: flex;
  top: 0;
  height: 1.75rem;
`;
const TopWhiteWrapper = styled(BasicBlock)`
  background-color: white;
`;
const TopWrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${OpenColor.orange[6]};
  height: 1.5rem;
  border-radius: 0px 0px 20px 20px;
`;

const TopItem = styled(BasicDiv)`
  margin: 0px 20px 0px 20px;
`;

const TopBar = styled(BasicUL)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.85rem;
`;

const TopButton = styled(BasicLI)`
  // border: 1px solid ${OpenColor.black};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${OpenColor.white};
  & + & {
    margin: 0 0 0 10px;
  }

  &.cursor {
    cursor: pointer;
  }
`;

const Top = ({ history, nickname, onLogout }) => {
  const ToLogin = () => {
    history.push("/login");
  };

  const ToRegister = () => {
    history.push("/register");
  };

  return (
    <TopBlock>
      <TopWhiteWrapper>
        <TopWrapper>
          <TopItem></TopItem>
          <TopItem>
            {nickname ? (
              <TopBar>
                <TopButton>{nickname}님이 로그인하셨습니다.</TopButton>
                <TopButton className="cursor" onClick={onLogout}>
                  로그아웃
                </TopButton>
              </TopBar>
            ) : (
              <TopBar>
                <TopButton className="cursor" onClick={() => ToLogin()}>
                  로그인
                </TopButton>
                <TopButton className="cursor" onClick={() => ToRegister()}>
                  회원가입
                </TopButton>
              </TopBar>
            )}
          </TopItem>
        </TopWrapper>
      </TopWhiteWrapper>
    </TopBlock>
  );
};

export default withRouter(Top);
