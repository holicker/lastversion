package com.spreadmat.qna.web.rest.dto;

import lombok.Data;

@Data
public class QnaDTO {
    private Long id;
    private Long vendorId;
    private String title;
    private String body;
    private String writer;
    private String registerdDate;
}
