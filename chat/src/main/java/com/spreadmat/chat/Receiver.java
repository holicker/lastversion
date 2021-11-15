package com.spreadmat.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spreadmat.chat.dto.ChattingMessageDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

@Service
@Slf4j
public class Receiver {
    @Autowired
    private SimpMessagingTemplate template;

    @KafkaListener(id = "main-listener", topics = "kafka-chatting")
    public void receive(ChattingMessageDTO message) throws Exception {
        log.info("received message='{}'", message);
        HashMap<String, String> msg = new HashMap<>();
        msg.put("chattedTime", message.getChattedTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        msg.put("message", message.getMessage());
        msg.put("writer", message.getWriter());

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(msg);

        this.template.convertAndSend("/topic/public", json);
    }
}
