package com.spreadmat.review.web.rest;

import com.spreadmat.review.domain.Review;
import com.spreadmat.review.service.ReviewService;
import com.spreadmat.review.web.rest.dto.ReviewDTO;
import com.spreadmat.review.web.rest.mapper.ReviewMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@Slf4j
@RestController()
@RequestMapping(path="review", produces = "application/json")
@Data
@CrossOrigin
public class ReviewController {

    @Autowired private final ReviewService reviewService;
    @Autowired private final ReviewMapper reviewMapper;

    @PostMapping("/register")
    @ResponseBody
    public ReviewDTO createReview(@RequestBody ReviewDTO reviewDTO){
        log.info("Request reviewDTO : {} ", reviewDTO);
        Review review = reviewMapper.toEntity(reviewDTO).registerdDate(LocalDate.now());
        Review resultReview = reviewService.save(review);

        ReviewDTO resultReviewDTO = reviewMapper.toDto(resultReview);

        log.info("Response reviewDTO : {} ", resultReviewDTO);
        return resultReviewDTO;
    }


    @GetMapping("/{id}")
    @ResponseBody
    public ReviewDTO findReview(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);

        Review resultReview = reviewService.findById(longId);

        ReviewDTO resultReviewDTO = reviewMapper.toDto(resultReview);

        log.info("Response reviewDTO : {} ", resultReviewDTO);
        return resultReviewDTO;
    }


    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteQna(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);
        reviewService.delete(longId);

    }


    @GetMapping("/list")
    public Page<ReviewDTO> listWithPageByVendorId(@PageableDefault(size=10, sort = "id", direction = Sort.Direction.DESC)Pageable pageRequest, @RequestParam("vendorid") Long vendorId){
        log.info("============vendor id : {}", vendorId);
        log.info(pageRequest.toString());
        Page<Review> reviewlist = reviewService.findAllByVendorId(pageRequest, vendorId);
        Page<ReviewDTO> qnalistDTO = reviewlist.map(
                review -> reviewMapper.toDto(review)
        );
        return qnalistDTO;

    }
}
