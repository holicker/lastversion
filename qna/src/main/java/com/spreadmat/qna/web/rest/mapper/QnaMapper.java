package com.spreadmat.qna.web.rest.mapper;

import com.spreadmat.qna.domain.Qna;
import com.spreadmat.qna.web.rest.dto.QnaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QnaMapper extends EntityMapper<QnaDTO, Qna> {

    @Mapping(source = "body", target = "content")
    Qna toEntity(QnaDTO qnaDTO);

    @Mapping(source = "content", target = "body")
    QnaDTO toDto(Qna qna);

}
