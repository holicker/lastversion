package com.spreadmat.vendor.service;

import com.spreadmat.vendor.domain.Merchandise;
import com.spreadmat.vendor.domain.Vendor;
import com.spreadmat.vendor.domain.event.UserIdCreated;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.io.File;
import java.util.List;
import java.util.Optional;

public interface VendorService {

    Vendor save(Vendor vendor);

    Page<Vendor> findAll(Pageable pageable);

    List<Vendor> findAll();

    Optional<Vendor> findOne(Long id);

    Vendor saveWithImage(Vendor vendor, List<MultipartFile> images) throws Exception;

    Merchandise saveWithImage(Merchandise merchandise, List<MultipartFile> images) throws Exception;

    List<File> imageReturn(Long vendorid) throws Exception;

    File imageByVendorImageId(Long imageid) throws Exception;

    File imageByMerchandiseImageId(Long imageid) throws Exception;

    Optional<Vendor> findOneByUserid(Long userid);

    Optional<Vendor> findOneByVendorDomain(String vendorDomain);
    void deleteAll();

    void delete(Long vendorId);

    // 벤더 초기 설립하기
    Vendor createVendor(Vendor vendor);

    // 벤더 물품 등록
    Vendor registerMerchandise(Long vendorId, Merchandise newMerchandise);


    // 벤더 물품 수정
    Vendor modifyMerchandise(Long vendorId, Merchandise newMerchandise);


    // 벤더 물품 삭제
    Vendor deleteMerchandise(Long vendorId, Long merchandiseId);


    // 벤더 상태 변경
    Vendor changeVendorState(Long vendorId, int vendorState);

    Optional<Merchandise> findOneMerchandise(Long id);


}
