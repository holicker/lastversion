import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import TransactionActionButton from "../../../components/common/TransactionActionButton";
import { checkChat } from "../../../modules/chat";

const TransactionActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { roomid, merchandiseid, buyerid, buyernickname, vendordomain } =
    useSelector(({ user, vendor, chat, merchandise }) => ({
      roomid: chat.roomid,
      vendordomain: vendor.visit.vendorDomain,
      buyerid: user.id,
      buyernickname: user.nickname,
      merchandiseid: merchandise.merchandise.id,
    }));

  const askTransAction = () => {
    console.log(
      `vendordomain : ${vendordomain}, merchandiseid : ${merchandiseid}, buyernickname : ${buyernickname}`
    );
    dispatch(
      checkChat({ vendordomain, buyernickname, merchandiseid, buyerid })
    );
  };

  useEffect(() => {
    roomid && history.push(`/chat/${roomid}`);
  }, [roomid]);

  return <TransactionActionButton askTransAction={askTransAction} />;
};

export default withRouter(TransactionActionButtonContainer);
