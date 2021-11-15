package com.spreadmat.chat;

import java.util.List;
import java.util.Optional;

public interface ChattingRoomService {

    ChattingRoom checkAndCreateRoom(ChattingRoom chattingRoom);

    List<ChattingRoom> findAllRooms();

    List<ChattingRoom> findBySellerId(Long sellerid);
    List<ChattingRoom> findByBuyerId(Long buyerid);

    Optional<ChattingRoom> findRoomInfo(Long roomid);

}
