import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import WriteActionButton from "../common/WriteActionButton";

const RegisterMerchandiseBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const RegisterMerchandiseItem = styled(BasicItem)`
  flex: 1;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;

  &.title {
    flex: 0 0 1.3rem;
    color: ${OpenColor.gray[7]};
    font-size: 1rem;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid ${OpenColor.gray[4]};
    margin-bottom: 2rem;
  }

  &.writeName {
    border: 1px solid ${OpenColor.gray[4]};
    flex: 0 0 2rem;
    width: 80%;
    align-self: center;
  }
  &.writeDomain {
    border: 1px solid ${OpenColor.gray[4]};
    flex: 0 0 2rem;
    width: 80%;
    align-self: center;
  }
  &.writeInfo {
    border: 1px solid ${OpenColor.gray[4]};
    flex: 0 0 4rem;
    width: 80%;
    align-self: center;
  }
  &.writeFile {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
    border: 1px solid ${OpenColor.gray[4]};
    input {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    label {
      margin: -5px;
      padding: 5px;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      p {
        color: ${OpenColor.gray[3]};
        font-size: 5rem;
        padding: 0 0 1.5rem 0;
        margin: 0;
      }
    }
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 100%;
    resize: none;
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

const RegisterMerchandise = ({
  title,
  body,
  price,
  onChangeImage,
  onChangeField,
  onCancel,
  onPublish,
  images,
}) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };
  const onChangeDomain = (e) => {
    onChangeField({ key: "price", value: e.target.value });
  };
  const onChangeInfo = (e) => {
    onChangeField({ key: "body", value: e.target.value });
  };

  const onChangeImageInput = (e) => {
    onChangeImage(e.target.files);
  };

  return (
    <RegisterMerchandiseBlock>
      <RegisterMerchandiseItem className="title">
        디지털 노점 등록
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeName">
        <input
          type="text"
          placeholder="판매글 제목"
          value={title}
          onChange={onChangeTitle}
        />
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeDomain">
        <input
          type="text"
          placeholder="가격"
          value={price}
          onChange={onChangeDomain}
        />
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeInfo">
        <textarea
          value={body}
          onChange={onChangeInfo}
          placeholder="상품 설명"
        />
      </RegisterMerchandiseItem>

      <RegisterMerchandiseItem className="writeFile">
        <label htmlFor="ex_file">
          <p>
            {!images && "+"}
            {images && "O"}
          </p>
        </label>
        <input
          id="ex_file"
          type="file"
          accept="image/*"
          name="file"
          multiple
          onChange={onChangeImageInput}
        />
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeButton">
        <WriteActionButton
          type="merchandise"
          onPublish={onPublish}
          onCancel={onCancel}
        />
      </RegisterMerchandiseItem>
    </RegisterMerchandiseBlock>
  );
};

export default RegisterMerchandise;
