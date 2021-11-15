package com.spreadmat.vendor.web.rest.mapper;

import com.spreadmat.vendor.domain.Merchandise;
import com.spreadmat.vendor.web.rest.dto.MerchandiseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MerchandiseMapper extends EntityMapper<MerchandiseDTO, Merchandise> {

    @Mapping(target = "registerdDate", ignore = true)
    @Mapping(target = "modifiedDate", ignore = true)
    @Mapping(target = "vendor", ignore = true)
    Merchandise toEntity(MerchandiseDTO merchandiseDTO);

    @Mapping(target = "currentDate",  source = "registerdDate")
    MerchandiseDTO toDto(Merchandise merchandise);

}
