import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListMerchandiseSearch from "../components/search/ListMerchandiseSearch";
import PreparePage from "./PreparePage";
const SearchPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchPageWrapper = styled(Responsive)``;

const SearchPageItem = styled(BasicItem)``;

const SearchPage = ({ match }) => {
  return (
    <SearchPageBlock>
      <SearchPageWrapper>
        <Route
          component={PreparePage}
          // component={CategoryMerchandiseSearch}
          path={match.url + "/category"}
          exact
        />
        <Route component={PreparePage} path={match.url + "/list"} />
        {/* component={ListMerchandiseSearch} */}
      </SearchPageWrapper>
    </SearchPageBlock>
  );
};

export default SearchPage;
