package com.spreadmat.chat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "chatroom")
@ToString(exclude = {"messages"})
public class ChattingRoom implements Serializable {
    @Id
    @Column(name="room_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    @Column(name="merchandise_id")
    private Long merchandiseId;

    @Column(name="room_name")
    private String roomName;

    @Column(name="vendor_domain")
    private String vendorDomain;


    @Column(name="buyer_nickname")
    private String buyerNickname;


    @Column(name="seller_nickname")
    private String sellerNickname;

    @Column(name="buyer_id")
    private Long buyerId;


    @Column(name="seller_id")
    private Long sellerId;

    @Column(name="created_time")
    private LocalDateTime createdTime;

    @OneToMany(mappedBy = "chattingRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ChattingMessage> messages = new ArrayList<>();


    public ChattingRoom messages(ChattingMessage chattingMessage){
        this.messages.add(chattingMessage);
        return this;
    }

    public ChattingRoom createdTime(LocalDateTime date){
        this.createdTime = date;
        return this;
    }
}
