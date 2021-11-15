package com.spreadmat.vendor.repository;

import com.spreadmat.vendor.domain.MerchandisePicture;
import com.spreadmat.vendor.domain.VendorPicture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MerchandisePictureRepository extends JpaRepository<MerchandisePicture, Long> {

    List<MerchandisePicture> findAllByMerchandiseId(Long merchandiseid);

    Optional<MerchandisePicture> findById(Long imageid);
}
