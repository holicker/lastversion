package com.spreadmat.chat.dto;

import com.spreadmat.chat.ChattingMessage;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
public class ChattingRoomDTO {

    private Long roomId;
    private Long merchandiseId;
    private List<ChattingMessage> messages;
    private String vendorDomain;
    private String roomName;
    private String buyerNickname;
    private String sellerNickname;
    private Long buyerId;
    private Long sellerId;
    private LocalDateTime createdTime;

}
