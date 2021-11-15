package com.spreadmat.chat;

import com.spreadmat.chat.dto.ChattingRoomDTO;
import com.spreadmat.chat.mapper.ChattingRoomMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RestController
@RequestMapping(value="/chatroom")
@Slf4j
public class RoomController {

    @Autowired
    private final ChattingRoomService chattingRoomService;
    @Autowired
    private final ChattingRoomMapper chattingRoomMapper;

    @GetMapping(value="/rooms")
    @ResponseBody
    public ResponseEntity<List<ChattingRoom>> findAllRooms(){

        return new ResponseEntity<List<ChattingRoom>>(chattingRoomService.findAllRooms(), HttpStatus.OK);
    }

    @PostMapping(value="/check")
    @ResponseBody
    public ResponseEntity<ChattingRoomDTO> checkAndCreateRoom(@RequestBody ChattingRoomDTO chatroomDTO){ // 3가지를 받아올 예정임
        log.info("=================== Check and Create Room : {}", chatroomDTO);
        ChattingRoom chatroom = chattingRoomMapper.toEntity(chatroomDTO);
        log.info("=================== Chatting Room Input : {}", chatroom);
        ChattingRoom resultRoom = chattingRoomService.checkAndCreateRoom(chatroom);
        ChattingRoomDTO resultDTO = chattingRoomMapper.toDto(resultRoom);
        log.info("=================== Chatting Room Output : {}", resultDTO);
        return new ResponseEntity<ChattingRoomDTO>(resultDTO, HttpStatus.CREATED);
    }

    @GetMapping(value="/room/{roomid}")
    @ResponseBody
    public ResponseEntity<ChattingRoom> getRoomInfo(@PathVariable("roomid") Long roomid){
        log.info("{}룸의 정보를 뺴옵니다", roomid);
        ChattingRoom foundRoom = chattingRoomService.findRoomInfo(roomid).get();
        return new ResponseEntity<ChattingRoom>(foundRoom, HttpStatus.OK);
    }

    @GetMapping(value="/sellerlist/{sellerid}")
    @ResponseBody
    public ResponseEntity<List<ChattingRoom>> getRoomListBySeller(@PathVariable("sellerid") Long id){
        log.info("=====================Id : {}", id);
        List<ChattingRoom> foundRooms = chattingRoomService.findBySellerId(id);
        return new ResponseEntity<List<ChattingRoom>>(foundRooms, HttpStatus.OK);
    }

    @GetMapping(value="/buyerlist/{buyerid}")
    @ResponseBody
    public ResponseEntity<List<ChattingRoom>> getRoomListByBuyer(@PathVariable("buyerid") Long id){
        log.info("=====================Id : {}", id);
        List<ChattingRoom> foundRooms = chattingRoomService.findByBuyerId(id);
        return new ResponseEntity<List<ChattingRoom>>(foundRooms, HttpStatus.OK);
    }
}
