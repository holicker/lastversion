package com.spreadmat.chat.mapper;

import com.spreadmat.chat.ChattingMessage;
import com.spreadmat.chat.dto.ChattingMessageDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChattingMessageMapper extends EntityMapper<ChattingMessageDTO, ChattingMessage> {

    ChattingMessage toEntity(ChattingMessageDTO chattingMessageDTO);

    ChattingMessageDTO toDto(ChattingMessage chattingMessage);

}
