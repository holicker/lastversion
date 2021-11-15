import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import BasicButton from "../common/BasicButton";
import { BasicItem } from "../common/BasicItem";

const SearchbarBlock = styled(BasicBlock)`
  height: 2rem;
  background-color: white;
  border-radius: 30px;
  align-items: center;
  width: 100%;
  display: flex;

  input:focus {
    outline: none;
  }
`;
const SearchbarItem = styled(BasicItem)`
  margin: 0 0 0 8px;
  &.left {
    flex: 1;
  }
  &.right {
    flex: 0 0 2.75rem;
    padding: 0 10px 0 0;
    justify-content: right;
  }
`;

const SearchInput = styled.input`
  margin: 0 0 0 15px;
  height: 80%;
  width: 100%;
  border-radius: 50px;
  border: none;
`;

const SearchBar = ({ history, keyword, onChangeKeyword }) => {
  const onSearchClick = (e) => {
    history.push(`/search/list?keyword=${keyword}`);
  };
  return (
    <SearchbarBlock>
      <SearchbarItem className="left">
        <SearchInput
          type="text"
          placeholder="검색어 입력"
          value={keyword}
          onChange={onChangeKeyword}
        />
      </SearchbarItem>
      <SearchbarItem className="right">
        <BasicButton className="button" onClick={() => onSearchClick()}>
          검색
        </BasicButton>
      </SearchbarItem>
    </SearchbarBlock>
  );
};

export default withRouter(SearchBar);
