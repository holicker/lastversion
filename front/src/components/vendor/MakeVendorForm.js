import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import WriteActionButton from "../common/WriteActionButton";

const MakeVendorFormBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const MakeVendorFormItem = styled(BasicItem)`
  flex: 1;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;

  &.title {
    flex: 0 0 2rem;
    font-size: 1.5rem;
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

const MakeVendorForm = ({
  name,
  domain,
  info,
  lng,
  lat,
  onChangeField,
  onChangeImage,
  onPublish,
  onCancel,
  images,
}) => {
  console.log(images);
  const onChangeTitle = (e) => {
    onChangeField({ key: "vendorname", value: e.target.value });
  };
  const onChangeDomain = (e) => {
    onChangeField({ key: "vendordomain", value: e.target.value });
  };
  const onChangeInfo = (e) => {
    onChangeField({ key: "vendorinfo", value: e.target.value });
  };

  const onChangeImageInput = (e) => {
    onChangeImage(e.target.files);
  };

  return (
    <MakeVendorFormBlock>
      <MakeVendorFormItem className="title">
        디지털 노점 등록
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeName">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChangeTitle}
        />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeDomain">
        <input
          type="text"
          placeholder="도메인 주소(영어)"
          value={domain}
          onChange={onChangeDomain}
        />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeInfo">
        <textarea value={info} onChange={onChangeInfo} placeholder="설명" />
      </MakeVendorFormItem>

      <MakeVendorFormItem className="writeFile">
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
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeButton">
        <WriteActionButton onPublish={onPublish} onCancel={onCancel} />
      </MakeVendorFormItem>
    </MakeVendorFormBlock>
  );
};

export default MakeVendorForm;
