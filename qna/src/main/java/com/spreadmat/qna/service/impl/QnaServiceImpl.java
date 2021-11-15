package com.spreadmat.qna.service.impl;

import com.spreadmat.qna.domain.Qna;
import com.spreadmat.qna.repository.QnaRepository;
import com.spreadmat.qna.service.QnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class QnaServiceImpl implements QnaService {

    @Autowired QnaRepository qnaRepository;

    @Override
    public Qna save(Qna qnaDTO) {
        return qnaRepository.save(qnaDTO);
    }

    @Override
    public void delete(Long id) {
    qnaRepository.deleteById(id);
    }

    @Override
    public Qna findById(Long id) {
        return qnaRepository.findById(id).get();
    }

    @Override
    public Page<Qna> findAll(Pageable pageable) {
        return qnaRepository.findAll(pageable);
    }

    @Override
    public Page<Qna> findAllByVendorId(Pageable pageable, Long vendorId) {
        return qnaRepository.findAllByVendorId(pageable, vendorId);
    }
}
