package com.spreadmat.chat;

import com.spreadmat.chat.dto.ChattingMessageDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class Sender {
    @Autowired
    private KafkaTemplate<String, ChattingMessageDTO> kafkaTemplate;

    public void send(String topic, ChattingMessageDTO data) {
        log.info("sending data='{}' to topic='{}'", data, topic);
        kafkaTemplate.send(topic, data);// send to react clients via websocket(STOMP)
    }
}
