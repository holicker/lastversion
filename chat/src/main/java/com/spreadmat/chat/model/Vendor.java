package com.spreadmat.chat.model;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;

@Getter
@Setter
@Slf4j
public class Vendor implements Serializable {

    // vendor 일련번호

    private Long id;

    private Long userId;

    private String vendorName;
    private String vendorDomain;


}
