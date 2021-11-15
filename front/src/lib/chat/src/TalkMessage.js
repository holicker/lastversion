import OpenColor from "open-color";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
const isBlank = require("is-blank");

const TalkMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.selfPosted ? "flex-end" : "flex-start")};
`;

const TalkBubble = css`
  background: ${OpenColor.gray[0]};
  padding: 6px;
  margin: 6px 6px;
  position: relative;
  border-radius: 4px;
  max-width: 75%;
`;
const TalkBubblePointer = css`
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  bottom: auto;
  border: 6px solid;
  border-color: ${OpenColor.gray[0]} transparent transparent transparent;
  top: 0px;
  left: ${(props) => (props.selfPosted ? "auto" : "-6px")};
  right: ${(props) => (props.selfPosted ? "-6px" : "auto")};
`;

const TalkMessageWriter = styled.div`
  display: ${(props) => (props.selfPosted ? "none" : "")};
`;

const TalkMessageContentBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.selfPosted ? "row-reverse" : "row")};
`;

const TalkMessageContent = styled.div`
  ${TalkBubble}
  &::after {
    ${TalkBubblePointer}
  }
`;
const TalkMessageTime = styled.div`
  display: flex;
  align-items: flex-end;
  height: 2.25rem;
`;

const TalkSpan = styled.span`
  color: ${OpenColor.gray[7]};

  &.writer {
    font-size: 0.95rem;
  }
  &.time {
    font-size: 0.5rem;
  }

  &.message {
    font-size: 0.8rem;
  }
`;

class TalkMessage extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    // author is for name of the author, 2 can be same
    writer: PropTypes.string.isRequired,
    // is the message self posted
    selfPosted: PropTypes.bool.isRequired,
    // timestamp of the message
    chattedTime: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
    const now = new Date();
    this.yesterday = new Date(now);
    this.now = Date.parse(this.yesterday);
    this.chatted = Date.parse(this.props.chattedTime) + 60000 * 60 * 9;
    this.diff = this.now - this.chatted;
    if (this.diff < 60000) this.showdate = "방금 전";
    else if (this.diff < 60000 * 60)
      this.showdate = Math.floor(this.diff / 60000) + "분 전";
    else if (this.diff < 60000 * 60 * 24)
      this.showdate = Math.floor(this.diff / (60000 * 60)) + "시간 전";
    else {
      this.month = new Date(Date.parse(this.props.chattedTime)).getMonth();
      this.date = new Date(Date.parse(this.props.chattedTime)).getDate();
      this.showdate = `${this.month}/${this.date}`;
    }
  }

  onMessageEdit = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <TalkMessageBlock selfPosted={this.props.selfPosted}>
        <TalkMessageWriter selfPosted={this.props.selfPosted}>
          <TalkSpan className="writer">{this.props.writer}</TalkSpan>
        </TalkMessageWriter>
        <TalkMessageContentBlock selfPosted={this.props.selfPosted}>
          <TalkMessageContent selfPosted={this.props.selfPosted}>
            <TalkSpan className="message">{this.state.message}</TalkSpan>
          </TalkMessageContent>

          <TalkMessageTime selfPosted={this.props.selfPosted}>
            <TalkSpan className="time">{this.showdate}</TalkSpan>
          </TalkMessageTime>
        </TalkMessageContentBlock>
      </TalkMessageBlock>
    );
  }
}

export default TalkMessage;
