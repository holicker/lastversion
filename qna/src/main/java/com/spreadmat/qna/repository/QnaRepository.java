package com.spreadmat.qna.repository;

import com.spreadmat.qna.domain.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QnaRepository extends JpaRepository<Qna, Long> {
    Page<Qna> findAll(Pageable pageable);

    Page<Qna> findAllByVendorId(Pageable pageable, Long vendorId);

}
