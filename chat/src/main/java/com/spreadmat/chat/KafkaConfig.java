package com.spreadmat.chat;

import com.spreadmat.chat.dto.ChattingMessageDTO;
import org.apache.kafka.common.serialization.IntegerDeserializer;
import org.apache.kafka.common.serialization.IntegerSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.*;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class KafkaConfig {

    @Value("${kafka.profiles}")
    private String kafkaprofile;

    @Bean
    public ProducerFactory<String, ChattingMessageDTO> producerFactory() {
        return new DefaultKafkaProducerFactory<>(producerConfigs(), null, new JsonSerializer<ChattingMessageDTO>());
    }

    @Bean
    public KafkaTemplate<String, ChattingMessageDTO> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }

    @Bean
    public Map<String, Object> producerConfigs() {

        Map<String, Object> result = new HashMap<>();
        result.put("bootstrap.servers", kafkaprofile);
        result.put("key.serializer", IntegerSerializer.class);
        result.put("value.serializer", JsonSerializer.class);
        result.put("group.id", "spring-boot-test");

        return result;
    }
    //Receiver config
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ChattingMessageDTO> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, ChattingMessageDTO> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }

    @Bean
    public ConsumerFactory<String, ChattingMessageDTO> consumerFactory() {
        return new DefaultKafkaConsumerFactory<>(consumerConfigs(), null, new JsonDeserializer<>(ChattingMessageDTO.class));
    }

    @Bean
    public Map<String, Object> consumerConfigs() {

        Map<String, Object> result = new HashMap<>();
        result.put("bootstrap.servers", kafkaprofile);
        result.put("key.deserializer", IntegerDeserializer.class);
        result.put("value.deserializer", JsonDeserializer.class);
        result.put("group.id", "spring-boot-test");

        return result;
    }
}
