package com.spreadmat.notice.web.rest.mapper;

import com.spreadmat.notice.domain.Notice;
import com.spreadmat.notice.web.rest.dto.NoticeDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NoticeMapper extends EntityMapper<NoticeDTO, Notice> {

    @Mapping(source = "body", target = "content")
    Notice toEntity(NoticeDTO noticeDTO);

    @Mapping(source = "content", target = "body")
    NoticeDTO toDto(Notice notice);

}
