import React from "react";
import PropTypes from "prop-types";
import TalkMessage from "./TalkMessage.js";
import TalkInput from "./TalkInput.js";
import classNames from "classnames";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import OpenColor from "open-color";

const similarity = require("similarity");
const htmlId = require("react-html-id");
const isBlank = require("is-blank");

const TalkBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${OpenColor.orange[2]};
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
`;
const TalkBoxHeader = styled.div`
  border-radius: 200;
  background-color: ${OpenColor.orange[5]};

  border-radius: 10px;
  height: 3rem;
  display: flex;
  width: 100%;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  align-items: center;
  margin-bottom: 1rem;

  .topic {
    padding: 1rem;
  }
`;
const TalkBoxBody = styled.div`
  overflow: auto;
  flex: 1;
`;

class TalkBox extends React.Component {
  static defaultProps = {
    // If connected is not used then we assume always connected
    connected: true,
  };

  static propTypes = {
    topic: PropTypes.string.isRequired,
    // Display user name of the current user
    currentUser: PropTypes.string.isRequired,
    // Returns boolean to indicate message send status
    onSendMessage: PropTypes.func.isRequired,
    connected: PropTypes.bool,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        writer: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        chattedTime: PropTypes.string.isRequired,
      })
    ),
    // Custom style
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);
    htmlId.enableUniqueIds(this);
    this.talkBoxId = this.nextUniqueId();
    this.state = {
      topic: this.props.topic,
    };
  }

  scrollToBottom = () => {
    scroll.scrollToBottom({ containerId: this.talkBoxId });
  };

  onTopicChange = (newTopic) => {
    this.setState({ topic: newTopic });
  };

  onSendMessage = (msg) => {
    const selfMessage = {
      writer: this.props.currentUser,
      message: msg,
    };
    var sendStatus = this.props.onSendMessage(msg, selfMessage);
    this.scrollToBottom();
    return sendStatus;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    const connectStatus = classNames({
      "talk-box-status": true,
      connected: this.props.connected,
    });
    return (
      <TalkBoxBlock>
        <TalkBoxHeader>
          <span className={connectStatus}></span>
          <span className="topic">{this.state.topic}</span>
        </TalkBoxHeader>
        <TalkBoxBody id={this.talkBoxId}>
          {this.props.messages.map((item, i) => (
            <TalkMessage
              key={i}
              chattedTime={item.chattedTime}
              message={item.message}
              writer={item.writer}
              selfPosted={similarity(item.writer, this.props.currentUser) === 1}
            />
          ))}
        </TalkBoxBody>
        <TalkInput
          onSendMessage={this.onSendMessage}
          disabled={!this.props.connected}
        />
      </TalkBoxBlock>
    );
  }
}

export default TalkBox;
