import client from "./client";

export const checkChat = ({
  merchandiseid,
  buyernickname,
  buyerid,
  vendordomain,
}) =>
  client.post("/chatroom/check", {
    buyerId: buyerid,
    merchandiseId: merchandiseid,
    buyerNickname: buyernickname,
    vendorDomain: vendordomain,
  });

export const infoChat = (roomid) => client.get(`/chatroom/room/${roomid}`);

export const listChatBuyer = ({ id }) =>
  client.get(`/chatroom/buyerlist/${id}`);

export const listChatSeller = ({ id }) =>
  client.get(`/chatroom/sellerlist/${id}`);
