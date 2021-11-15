package com.spreadmat.chat.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Slf4j
public class Merchandise implements Serializable {

    private Long id;

    private String merchandiseName;

    private String merchandiseDescription;

    private int merchandisePrice;



}
