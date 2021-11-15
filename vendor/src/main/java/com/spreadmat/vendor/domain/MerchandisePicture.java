package com.spreadmat.vendor.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "merchandise_picture")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MerchandisePicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "merchandise_picture_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "merchandise_id")
    @JsonIgnoreProperties(value ={"vendor", "pictures"})
    private Merchandise merchandise;

    @Column(name = "original_file_name")
    private String originalFileName;

    @Column(name = "stored_file_path")
    private String storedFilePath;

    @Column(name= "file_size")
    private Long fileSize;
}
