package com.spreadmat.notice.service.impl;

import com.spreadmat.notice.domain.Notice;
import com.spreadmat.notice.repository.NoticeRepository;
import com.spreadmat.notice.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    NoticeRepository noticeRepository;

    @Override
    public Notice save(Notice noticeDTO) {
        return noticeRepository.save(noticeDTO);
    }

    @Override
    public void delete(Long id) {
    noticeRepository.deleteById(id);
    }

    @Override
    public Notice findById(Long id) {
        return noticeRepository.findById(id).get();
    }

    @Override
    public Page<Notice> findAll(Pageable pageable) {
        return noticeRepository.findAll(pageable);
    }
}
