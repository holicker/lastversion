package com.spreadmat.chat;

import com.spreadmat.chat.client.MemberFeignClient;
import com.spreadmat.chat.client.VendorFeignClient;
import com.spreadmat.chat.model.Merchandise;
import com.spreadmat.chat.model.Vendor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChattingRoomServiceImpl implements ChattingRoomService{

@Autowired private final ChattingRoomRepository chattingRoomRepository;
@Autowired private final MemberFeignClient memberFeignClient;
@Autowired private final VendorFeignClient vendorFeignClient;

    @Override
    public ChattingRoom checkAndCreateRoom(ChattingRoom chattingRoom) {
        Vendor targetVendor = vendorFeignClient.getVendorByVendorDomain(chattingRoom.getVendorDomain());
        log.info("=======================target vendor : {}", targetVendor);
        String sellerNickname = memberFeignClient.getIdToNickname(targetVendor.getUserId());
        log.info("=======================sellerNickname : {}", sellerNickname);
        String roomName = vendorFeignClient.getMerchandiseByMerchandiseId(chattingRoom.getMerchandiseId()).getMerchandiseName();
        log.info("=======================roomName : {}", roomName);

        chattingRoom.setRoomName(roomName);
        chattingRoom.setSellerNickname(sellerNickname);
        chattingRoom.setSellerId(targetVendor.getUserId());

        Optional<ChattingRoom> resultRoom = chattingRoomRepository
                .findByVendorDomainAndBuyerNicknameAndMerchandiseId(
                        chattingRoom.getVendorDomain(),
                        chattingRoom.getBuyerNickname(),
                        chattingRoom.getMerchandiseId());

        ChattingRoom result = resultRoom.orElseGet(() -> chattingRoomRepository.save(chattingRoom));
        return result;
    }

    @Override
    public List<ChattingRoom> findAllRooms() {
        return chattingRoomRepository.findAll();
    }

    @Override
    public List<ChattingRoom> findBySellerId(Long sellerid) {
        return chattingRoomRepository.findBySellerId(sellerid);
    }

    @Override
    public List<ChattingRoom> findByBuyerId(Long buyerid) {
        return chattingRoomRepository.findByBuyerId(buyerid);
    }

    @Override
    public Optional<ChattingRoom> findRoomInfo(Long roomid) {
        return chattingRoomRepository.findByRoomId(roomid);
    }
}
