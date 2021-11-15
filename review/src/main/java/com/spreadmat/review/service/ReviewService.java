package com.spreadmat.review.service;

import com.spreadmat.review.domain.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReviewService {

    Review save(Review reviewDTO);

    void delete(Long id);

    Review findById(Long id);

    Page<Review> findAll(Pageable pageable);

    Page<Review> findAllByVendorId(Pageable pageable, Long vendorId);
}
