import client from "./client";
import qs from "qs";

export const writeReview = ({ vendorid, title, body, writer}) => {
  console.log(`vendorid : ${vendorid}`);
  return client.post("/review/register", { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readReview = (id) => client.get(`/review/${id}`);

export const reviewList = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return client.get(`/review/list?${queryString}`);
};

export const updateReview = ({ id, title, body, tags }) =>
  client.post("/review/register", { id, title, body, tags });

export const deleteReview = (id) => client.delete(`review/${id}`);
