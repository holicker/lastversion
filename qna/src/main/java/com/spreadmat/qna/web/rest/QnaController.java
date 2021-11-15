package com.spreadmat.qna.web.rest;

import com.spreadmat.qna.domain.Qna;
import com.spreadmat.qna.service.QnaService;
import com.spreadmat.qna.web.rest.dto.QnaDTO;
import com.spreadmat.qna.web.rest.mapper.QnaMapper;
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
@RequestMapping(path="qna", produces = "application/json")
@Data
@CrossOrigin
public class QnaController {

    @Autowired private final QnaService qnaService;
    @Autowired private final QnaMapper qnaMapper;

    @PostMapping("/register")
    @ResponseBody
    public QnaDTO createQna(@RequestBody QnaDTO qnaDTO){
        log.info("Request qnaDTO : {} ",qnaDTO);
        Qna qna = qnaMapper.toEntity(qnaDTO).registerdDate(LocalDate.now());
        Qna resultQna = qnaService.save(qna);

        QnaDTO resultQnaDTO = qnaMapper.toDto(resultQna);

        log.info("Response qnaDTO : {} ",resultQnaDTO);
        return resultQnaDTO;
    }


    @GetMapping("/{id}")
    @ResponseBody
    public QnaDTO findQna(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);

        Qna resultQna = qnaService.findById(longId);

        QnaDTO resultQnaDTO = qnaMapper.toDto(resultQna);

        log.info("Response qnaDTO : {} ",resultQnaDTO);
        return resultQnaDTO;
    }


    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteQna(@PathVariable("id") String id) {

        log.info("Request id(String) : {} ",id);
        Long longId = Long.parseLong(id);

        log.info("Request id(Long) : {} ",longId);
        qnaService.delete(longId);

    }

    @GetMapping("/list")
    public Page<QnaDTO> listWithPageByVendorId(@PageableDefault(size=10, sort = "id", direction = Sort.Direction.DESC)Pageable pageRequest, @RequestParam("vendorid") Long vendorId){
        log.info(pageRequest.toString());
        Page<Qna> qnalist = qnaService.findAllByVendorId(pageRequest, vendorId);
        Page<QnaDTO> qnalistDTO = qnalist.map(
                qna -> qnaMapper.toDto(qna)
        );
        return qnalistDTO;

    }

}
