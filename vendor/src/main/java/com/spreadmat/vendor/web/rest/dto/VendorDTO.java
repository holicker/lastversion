package com.spreadmat.vendor.web.rest.dto;

import com.spreadmat.vendor.domain.enumeration.VendorState;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.validation.constraints.Digits;
import java.io.Serializable;
import java.util.List;

@Data
public class VendorDTO {
    private Long id;
    private Long userId;
    private String vendorName;
    private String vendorDomain;
    private String vendorInfo;
    private Double vendorLat;
    private Double vendorLng;
    private VendorState vendorState;

}
