import client from "./client";
import qs from "qs";

export const writeNotice = ({ title, body }) => {
  console.log(`writeAPI title : ${title}, body : ${body}`);
  return client.post("/notice/register", { title, body }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readNotice = (id) => client.get(`/notice/${id}`);

export const noticeList = ({ page, writer,}) => {
  const queryString = qs.stringify({
    page,
    writer,
  });
  return client.get(`/notice/list`);
  //return client.get(`/notice/list?${queryString}`);
};

export const updateNotice = ({ id, title, body, tags }) =>
  client.post("/notice/register", { id, title, body, tags });

export const deleteNotice = (id) => client.delete(`notice/${id}`);
