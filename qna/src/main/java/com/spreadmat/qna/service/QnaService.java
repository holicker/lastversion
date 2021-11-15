package com.spreadmat.qna.service;

import com.spreadmat.qna.domain.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QnaService {

    Qna save(Qna qnaDTO);

    void delete(Long id);

    Qna findById(Long id);

    Page<Qna> findAll(Pageable pageable);

    Page<Qna> findAllByVendorId(Pageable pageable, Long vendorId);
}
