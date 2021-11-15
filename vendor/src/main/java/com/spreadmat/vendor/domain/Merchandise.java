package com.spreadmat.vendor.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString(exclude = {"vendor"})
@Table(name = "merchandise")
@Slf4j
public class Merchandise implements Serializable {

    @Id
    @Column(name = "merchandise_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "merchandise_name")
    private String merchandiseName;

    @Column(name = "merchandise_description")
    private String merchandiseDescription;

    @Column(name = "merchandise_price")
    private int merchandisePrice;

    @Column(name = "registerd_date")
    private LocalDate registerdDate;

    @Column(name = "modified_date")
    private LocalDate modifiedDate;

    @OneToMany(mappedBy = "merchandise", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MerchandisePicture> pictures = new ArrayList<>();

    @ManyToOne
    @JsonIgnoreProperties(value={"pictures", "merchandises"})
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    public Merchandise pictures(List<MerchandisePicture> pictures){
        this.pictures = pictures;
        return this;
    }


    public Merchandise merchandiseName(String merchandiseName){
        this.merchandiseName = merchandiseName;
        return this;
    }

    public Merchandise merchandiseDescription(String merchandiseDescription){
        this.merchandiseDescription = merchandiseDescription;
        return this;
    }

    public Merchandise merchandisePrice(int merchandisePrice){
        this.merchandisePrice = merchandisePrice;
        return this;
    }

    public Merchandise registerdDate(LocalDate registerdDate){
        this.registerdDate = registerdDate;
        return this;
    }

    public Merchandise modifiedDate(LocalDate modifiedDate){
        this.modifiedDate = modifiedDate;
        return this;
    }

    public Merchandise vendor(Vendor vendor){
        this.vendor = vendor;
        return this;
    }

}
