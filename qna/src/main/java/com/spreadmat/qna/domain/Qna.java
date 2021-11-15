package com.spreadmat.qna.domain;

import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data
@Slf4j
@Table(name ="qna")
public class Qna implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long vendorId;
    private String writer;
    private String title;
    private String content;
    @Column(name="registerd_date")
    private LocalDate registerdDate;

    public Qna registerdDate(LocalDate date){
        this.registerdDate = date;
        return this;
    }
}
