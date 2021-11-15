package com.spreadmat.review.web.rest.mapper;

import com.spreadmat.review.domain.Review;
import com.spreadmat.review.web.rest.dto.ReviewDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewMapper extends EntityMapper<ReviewDTO, Review> {

    @Mapping(source = "body", target = "content")
    Review toEntity(ReviewDTO reviewDTO);

    @Mapping(source = "content", target = "body")
    ReviewDTO toDto(Review review);

}
