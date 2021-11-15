package com.spreadmat.notice.web.rest.dto;

import lombok.Data;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String body;
    private String writer;
    private String registerdDate;
}
