package com.spreadmat.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Entity
@Table(name="chat_message")
public class ChattingMessage implements Serializable {

    @Id
    @Column(name = "message_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @ManyToOne
    @JoinColumn(name="room_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "messages"})
    @JsonIgnore
    private ChattingRoom chattingRoom;

    @Column(name="writer")
    private String writer;

    @Column(name="message")
    private String message;

    @Column(name="chatted_time")
    @CreationTimestamp
    private LocalDateTime chattedTime;


    public ChattingMessage chattedTime(LocalDateTime date){
        this.chattedTime = date;
        return this;
    }
    public ChattingMessage chattingRoom(ChattingRoom chattingRoom){
        this.chattingRoom = chattingRoom;
        return this;
    }
}
