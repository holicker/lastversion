package com.spreadmat.vendor.web.rest.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
public class MerchandiseDTO implements Serializable {

    private Long id;

    private String merchandiseName;

    private String merchandiseDescription;

    private int merchandisePrice;

    private LocalDate currentDate;

    private Long vendorId;
}
