package com.spreadmat.notice.service;

import com.spreadmat.notice.domain.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NoticeService {

    Notice save(Notice noticeDTO);

    void delete(Long id);

    Notice findById(Long id);

    Page<Notice> findAll(Pageable pageable);
}
