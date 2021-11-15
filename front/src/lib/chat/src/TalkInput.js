import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BasicButton from "../../../components/common/BasicButton";
import OpenColor from "open-color";
const isBlank = require("is-blank");

const TalkInputBlock = styled.div`
  display: flex;
  height: 3rem;
`;
const TalkInputTextarea = styled.textarea`
  padding: 5px 5px;
  resize: none;
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;
const TalkInputButton = styled(BasicButton)`
  margin-left: 3px;
  border-radius: 10px;
  background-color: ${OpenColor.orange[5]};
`;

class TalkInput extends React.Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    placeHolder: "하고 싶은 말을 입력하세요.",
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      disabled: props.disabled,
    };
  }

  onEnterPress = () => {
    if (!isBlank(this.state.message)) {
      if (this.props.onSendMessage(this.state.message)) {
        this.setState({ message: "" });
      }
    }
  };

  handleOnChange = (e) => {
    this.setState({ message: e.target.value });
  };

  catchReturn = (e) => {
    if (!(e.ctrlKey || e.shiftKey) && e.key === "Enter") {
      this.onEnterPress();
      e.preventDefault();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.disabled != nextProps.disabled) {
      this.setState({ disabled: nextProps.disabled });
    }
  }

  render() {
    return (
      <TalkInputBlock>
        <TalkInputTextarea
          cols="60"
          rows="2"
          onChange={this.handleOnChange}
          value={this.state.message}
          onKeyPress={this.catchReturn}
          disabled={this.state.disabled ? "disabled" : ""}
          placeholder={this.props.placeHolder}
        />
        <TalkInputButton>보내기</TalkInputButton>
      </TalkInputBlock>
    );
  }
}

export default TalkInput;
