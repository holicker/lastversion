package com.spreadmat.chat;

import com.spreadmat.chat.dto.ChattingMessageDTO;
import com.spreadmat.chat.mapper.ChattingMessageMapper;
import com.spreadmat.chat.mapper.ChattingRoomMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class ChattingController {

    @Autowired
    private Sender sender;

    @Autowired
    private Receiver receiver;

    @Autowired
    private ChattingRoomRepository chattingRoomRepository;

    private static String BOOT_TOPIC = "kafka-chatting";

    @Autowired private ChattingMessageMapper chattingMessageMapper;
    @Autowired private ChattingRoomMapper chattingRoomMapper;

    @Transactional
    @MessageMapping("/message")//@MessageMapping works for WebSocket protocol communication. This defines the URL mapping.
    //@SendTo("/topic/public")//websocket subscribe topic& direct send
    public void sendMessage(ChattingMessageDTO messageDTO) throws Exception {
        log.info("어떤 message 객체를 받아왔니? {} ", messageDTO);
        log.info("어떤 message를 받아왔니? {} ", messageDTO.getMessage());
        ChattingMessage message = chattingMessageMapper.toEntity(messageDTO);
        log.info("변환 후의 객체 : {}", message);
        Long roomId = messageDTO.getRoomId();
        log.info("얻어온 room id : {}", roomId);

        ChattingRoom currentRoom = chattingRoomRepository.findById(roomId).get();
        log.info("찾아진 currentRoom = {}", currentRoom.toString());
        message.chattedTime(LocalDateTime.now()).chattingRoom(currentRoom);
        log.info("변환된 message 추가 = {}", message.toString());
        currentRoom.messages(message);
        log.info("current room에 메세지 추가 = {}", currentRoom);
        ChattingRoom result = chattingRoomRepository.save(currentRoom);
        log.info("result = {}", result);
        List<ChattingMessage> messages = result.getMessages();
        log.info("messages = {}", messages);
        ChattingMessage resultMessage = messages.stream().sorted(Comparator.comparing(ChattingMessage::getMessageId)).skip(messages.size()-1).findFirst().get();
        log.info("id가 추가됨 = {}", resultMessage);
        ChattingMessageDTO resultDto = chattingMessageMapper.toDto(resultMessage);
        resultDto.roomdId(roomId);
        sender.send(BOOT_TOPIC, resultDto);

    }

    @RequestMapping(path = "/history/{roomid}", produces = "application/json")
    public ResponseEntity<List<ChattingMessage>> getChattingHistory(@PathVariable("roomid") Long roomId) throws Exception {
        log.info("History 요청이 들어왔슴다 : {}", roomId);
        List<ChattingMessage> messages = chattingRoomRepository.getById(roomId).getMessages();
        log.info("요청에 따른 message : {} ", messages);
        return new ResponseEntity<List<ChattingMessage>>(messages, HttpStatus.OK);
    }


}
