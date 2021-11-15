package com.spreadmat.vendor.repository;

import com.spreadmat.vendor.domain.Merchandise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MerchandiseRepository extends JpaRepository<Merchandise, Long> {
    Optional<Merchandise> findById(Long id);
}
