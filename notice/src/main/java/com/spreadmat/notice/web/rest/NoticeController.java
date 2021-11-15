package com.spreadmat.notice.web.rest;

import com.spreadmat.notice.domain.Notice;
import com.spreadmat.notice.service.NoticeService;
import com.spreadmat.notice.web.rest.dto.NoticeDTO;
import com.spreadmat.notice.web.rest.mapper.NoticeMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@Slf4j
@RestController()
@RequestMapping(path="notice", produces = "application/json")
@Data
@CrossOrigin
public class NoticeController {

    @Autowired private final NoticeService noticeService;
    @Autowired private final NoticeMapper noticeMapper;

    @PostMapping("/register")
    @ResponseBody
    public NoticeDTO createNotice(@RequestBody NoticeDTO noticeDTO){
        log.info("Request noticeDTO : {} ", noticeDTO);
        Notice notice = noticeMapper.toEntity(noticeDTO).registerdDate(LocalDate.now());
        Notice resultNotice = noticeService.save(notice);

        NoticeDTO resultNoticeDTO = noticeMapper.toDto(resultNotice);

        log.info("Response noticeDTO : {} ", resultNoticeDTO);
        return resultNoticeDTO;
    }


    @GetMapping("/{id}")
    @ResponseBody
    public NoticeDTO findNotice(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);

        Notice resultNotice = noticeService.findById(longId);

        NoticeDTO resultNoticeDTO = noticeMapper.toDto(resultNotice);

        log.info("Response noticeDTO : {} ", resultNoticeDTO);
        return resultNoticeDTO;
    }


    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteNotice(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);
        noticeService.delete(longId);

    }

    @GetMapping("/list")
    public Page<NoticeDTO> listWithPage(@PageableDefault(size=10, sort = "id")Pageable pageRequest){
        log.info(pageRequest.toString());
        Page<Notice> noticelist = noticeService.findAll(pageRequest);
        Page<NoticeDTO> noticelistDTO = noticelist.map(
                notice -> noticeMapper.toDto(notice)
        );
        return noticelistDTO;

    }
}
