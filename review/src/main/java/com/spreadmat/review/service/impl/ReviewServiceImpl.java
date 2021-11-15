package com.spreadmat.review.service.impl;

import com.spreadmat.review.domain.Review;
import com.spreadmat.review.repository.ReviewRepository;
import com.spreadmat.review.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public Review save(Review reviewDTO) {
        return reviewRepository.save(reviewDTO);
    }

    @Override
    public void delete(Long id) {
    reviewRepository.deleteById(id);
    }

    @Override
    public Review findById(Long id) {
        return reviewRepository.findById(id).get();
    }

    @Override
    public Page<Review> findAll(Pageable pageable) {
        return reviewRepository.findAll(pageable);
    }

    @Override
    public Page<Review> findAllByVendorId(Pageable pageable, Long vendorId) {
        return reviewRepository.findAllByVendorId(pageable, vendorId);
    }
}
