package com.spreadmat.chat.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChattingMessageDTO {

    private Long messageId;
    private Long roomId;
    private String message;
    private String writer;
    private LocalDateTime chattedTime;

    public ChattingMessageDTO roomdId(Long roomId){
        this.roomId = roomId;
        return this;
    }
}
