package com.spreadmat.vendor.web.rest.mapper;


import com.spreadmat.vendor.domain.Vendor;
import com.spreadmat.vendor.web.rest.dto.VendorDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface VendorMapper extends EntityMapper<VendorDTO, Vendor> {
    @Mapping(target = "merchandises", ignore = true)
    @Mapping(target = "registerMerchandise", ignore = true)
    @Mapping(target = "modifyMerchandise", ignore = true)
    @Mapping(target = "deleteMerchandise", ignore = true)
    @Mapping(target = "changeVendorState", ignore = true)
    Vendor toEntity(VendorDTO vendorDTO);

    VendorDTO toDto(Vendor vendor);
}
