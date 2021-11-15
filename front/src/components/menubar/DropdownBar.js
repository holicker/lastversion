import OpenColor from "open-color";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicLI } from "../common/BasicLI";
import { BasicUL } from "../common/BasicUL";
import { LinkButton } from "../common/LinkButton";

const DropdownBarBlock = styled(BasicUL)`
  border-radius: 20px;
  background-color: ${OpenColor.orange[8]};
  height: 2rem;
  color: white;
`;

const DropdownHeadBlock = styled(BasicUL)`
  height: 40px;
`;
const DropdownSubBlock = styled(BasicUL)`
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
  transform: translateY(-20px);
  margin-top: 20px;
  position: absolute;

  background-color: ${OpenColor.orange[6]};
  border-radius: 20px;
  width: 100%;
`;

const DropdownHead = styled(BasicLI)`
  text-align: center;
  position: relative;
  margin-top: 3.5px;

  cursor: pointer;

  &:hover > ul {
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    transform: translateY (0);
  }
`;

const DropdownButton = styled(BasicLI)`
  margin: 1rem 0 0.5rem 0;
  width: 150px;
  height: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
`;
const DropdownBar = ({ onFindMyVendor }) => {
  // 여기 전달할 때에는 항상 {}를 해줘야 한다!! json으로 넘어가는 듯?
  return (
    <DropdownBarBlock>
      <DropdownHead>
        <DropdownHeadBlock>MY VENDOR</DropdownHeadBlock>

        <DropdownSubBlock>
          <DropdownButton onClick={onFindMyVendor}>
            나의 상점 방문
          </DropdownButton>
          {/* <DropdownButton>
            <LinkButton to={"/manage"}>상점 관리</LinkButton>
          </DropdownButton> */}
          <DropdownButton>
            <LinkButton to={"/merchandise"}>물품 관리</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/transaction"}>거래 관리</LinkButton>
          </DropdownButton>
        </DropdownSubBlock>
      </DropdownHead>
      <DropdownButton></DropdownButton>
    </DropdownBarBlock>
  );
};

export default DropdownBar;
