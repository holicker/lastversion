package com.spreadmat.vendor.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "vendor_picture")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VendorPicture {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "vendor_picture_id")
        private Long id;

        @ManyToOne
        @JoinColumn(name = "vendor_id")
        @JsonIgnoreProperties(value = {"pictures", "merchandises"})
        private Vendor vendor;

        @Column(name = "original_file_name")
        private String originalFileName;

        @Column(name = "stored_file_path")
        private String storedFilePath;

        @Column(name= "file_size")
        private Long fileSize;

}
