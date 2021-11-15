import Fetch from "json-fetch";
import React from "react";
import SockJsClient from "react-stomp";
import styled from "styled-components";
import TalkBox from "./src/TalkBox";

const ChatPageBlock = styled.div`
  margin-top: 40px;
  display: flex;
  height: 60vh;
  background-color: white;
  justify-content: center;
`;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    // randomUserId is used to emulate a unique user id for this demo usage
    this.sendURL = "/message";
    this.state = {
      clientConnected: false,
      messages: [],
    };
    this.nickname = props.nickname;
    this.roomid = props.roomid;
    this.roomname = props.roomname;
  }

  onMessageReceive = (msg, topic) => {
    // alert(
    //   JSON.stringify(msg) +
    //     " @ " +
    //     JSON.stringify(this.state.messages) +
    //     " @ " +
    //     JSON.stringify(topic)
    // );
    this.setState((prevState) => ({
      messages: [...prevState.messages, msg],
    }));
  };

  sendMessage = (msg, selfMsg) => {
    try {
      var send_message = {
        roomId: this.roomid,
        writer: selfMsg.writer,
        message: selfMsg.message,
        chattedTime: null,
      };
      this.clientRef.sendMessage("/app/message", JSON.stringify(send_message));
      return true;
    } catch (e) {
      return false;
    }
  };

  componentWillMount() {
    Fetch(`/history/${this.roomid}`, {
      method: "GET",
    }).then((response) => {
      console.log(`response : ${JSON.stringify(response.body)}`);

      this.setState({ messages: response.body });
    });
  }

  componentDidMount() {
    console.log("Did mount 스크롤 아래로");
  }

  render() {
    const wsSourceUrl = "https://localhost:8443/chatting";
    return (
      <ChatPageBlock>
        <TalkBox
          topic={this.roomname}
          currentUser={this.nickname}
          messages={this.state.messages}
          onSendMessage={this.sendMessage}
          connected={this.state.clientConnected}
        />

        <SockJsClient
          url={wsSourceUrl}
          topics={["/topic/public"]}
          onMessage={this.onMessageReceive}
          ref={(client) => {
            this.clientRef = client;
          }}
          onConnect={() => {
            this.setState({ clientConnected: true });
          }}
          onDisconnect={() => {
            this.setState({ clientConnected: false });
          }}
          debug={false}
          style={[{ width: "100%", height: "100%" }]}
        />
      </ChatPageBlock>
    );
  }
}
export default Chat;
