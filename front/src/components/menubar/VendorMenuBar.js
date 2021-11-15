import OpenColor from "open-color";
import styled from "styled-components";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const VendorMenuBarBlock = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
`;

const MenuButton = styled(BasicItem)`
  margin: 10px 5px 10px 5px;
  padding-top: 5px;
  flex: 1;
  color: white;
  height: 27px;
  border-radius: 10px;
  background-color: ${OpenColor.orange[6]};
  font-size: 1rem;
  cursor: pointer;
  button {
    color: ${OpenColor.black};
  }
`;

const VendorMenuBar = ({ onMenuClick }) => {
  return (
    <VendorMenuBarBlock>
      <MenuButton onClick={() => onMenuClick("merchandise")}>
        상품 목록
      </MenuButton>
      <MenuButton onClick={() => onMenuClick("review")}>리뷰</MenuButton>
      <MenuButton onClick={() => onMenuClick("qna")}>문의</MenuButton>
    </VendorMenuBarBlock>
  );
};

export default VendorMenuBar;
