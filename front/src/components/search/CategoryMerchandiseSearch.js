import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const CategoryMerchandiseSearchBlock = styled(BasicDiv)`
  display: grid;
  background-color: white;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const CategoryBlock = styled(BasicDiv)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
const CategoryItem = styled(BasicItem)`
  &.title {
    grid-column: auto / span 2;
  }
  &.photo {
    grid-column: auto / span 1;
    grid-row: auto / span 2;
  }
`;

const CategoryMerchandiseSearchItem = () => {
  return (
    <CategoryBlock>
      <CategoryItem className="title">
        <LinkButton to="/search/list?keyword=123">제목임다</LinkButton>
      </CategoryItem>
      <CategoryItem className="photo">dd</CategoryItem>
      <CategoryItem className="photo">dd</CategoryItem>
      <CategoryItem className="photo">dd</CategoryItem>
      <CategoryItem className="photo">dd</CategoryItem>
    </CategoryBlock>
  );
};

const CategoryMerchandiseSearch = () => {
  return (
    <CategoryMerchandiseSearchBlock>
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
      <CategoryMerchandiseSearchItem />
    </CategoryMerchandiseSearchBlock>
  );
};

export default withRouter(CategoryMerchandiseSearch);
