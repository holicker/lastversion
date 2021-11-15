package com.spreadmat.chat.mapper;


import com.spreadmat.chat.ChattingRoom;
import com.spreadmat.chat.dto.ChattingRoomDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChattingRoomMapper extends EntityMapper<ChattingRoomDTO, ChattingRoom> {
     ChattingRoom toEntity(ChattingRoomDTO chattingRoomDTO);

     ChattingRoomDTO toDto(ChattingRoom chattingRoom);
}
