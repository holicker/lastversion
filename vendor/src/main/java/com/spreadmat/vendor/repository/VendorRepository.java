package com.spreadmat.vendor.repository;

import com.spreadmat.vendor.domain.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    Optional<Vendor> findByUserId(Long userId);

    Optional<Vendor> findByVendorDomain(String vendorDomain);

    List<Vendor> findAll();
}
