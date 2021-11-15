package com.spreadmat.chat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChattingRoomRepository extends JpaRepository<ChattingRoom,Long> {

    List<ChattingRoom> findAll();
    Optional<ChattingRoom> findByRoomId(Long roomid);

    ChattingRoom save(ChattingRoom chattingRoom);

    Optional<ChattingRoom> findByVendorDomainAndBuyerNicknameAndMerchandiseId(String vendorDomain, String buyerNickname, Long merchandiseId);

    List<ChattingRoom> findBySellerId(Long id);
    List<ChattingRoom> findByBuyerId(Long id);
}
