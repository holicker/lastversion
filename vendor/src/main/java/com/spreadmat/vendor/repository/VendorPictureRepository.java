package com.spreadmat.vendor.repository;

import com.spreadmat.vendor.domain.VendorPicture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VendorPictureRepository extends JpaRepository<VendorPicture, Long> {

    List<VendorPicture> findAllByVendorId(Long vendorid);

    Optional<VendorPicture> findById(Long imageid);
}
