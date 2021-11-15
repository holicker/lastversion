package com.spreadmat.review.web.rest.dto;

import lombok.Data;

@Data
public class ReviewDTO {
    private Long id;
    private Long vendorId;
    private String title;
    private String body;
    private String writer;
    private String registerdDate;
}
