package com.spreadmat.vendor.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spreadmat.vendor.domain.Merchandise;
import com.spreadmat.vendor.domain.Vendor;
import com.spreadmat.vendor.service.VendorService;
import com.spreadmat.vendor.web.rest.dto.MerchandiseDTO;
import com.spreadmat.vendor.web.rest.dto.VendorDTO;
import com.spreadmat.vendor.web.rest.mapper.MerchandiseMapper;
import com.spreadmat.vendor.web.rest.mapper.VendorMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(path = "vendor", produces = "application/json")
@Data
@CrossOrigin
public class VendorController {

    @Autowired private final VendorService vendorService;
    @Autowired private final VendorMapper vendorMapper;
    @Autowired private final MerchandiseMapper merchandiseMapper;

    @PostMapping("/imagetest")
    public ResponseEntity<?> imagetest(@RequestParam("files")List<MultipartFile> files) throws Exception {
        Vendor vendor = new Vendor();
        vendor = vendorService.saveWithImage(vendor, files);
        return ResponseEntity.ok(vendorService.save(vendor));
    }

    @PostMapping("/imagecomeon")
    public ResponseEntity<byte[]> imagereturn(@RequestParam("id")Long vendorid) throws Exception {
        Optional<File> file = vendorService.imageReturn(vendorid).stream().findFirst();
        File result = file.get();
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", Files.probeContentType(result.toPath()));
        return new ResponseEntity<>(FileCopyUtils.copyToByteArray(result), header, HttpStatus.OK);
    }
    @GetMapping("/image/{imageid}")
    public ResponseEntity<byte[]> vendorImageByimageid(@PathVariable("imageid") Long imageid) throws Exception {
        File result = vendorService.imageByVendorImageId(imageid);
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", Files.probeContentType(result.toPath()));
        return new ResponseEntity<>(FileCopyUtils.copyToByteArray(result), header, HttpStatus.OK);
    }

    @GetMapping("/merchandiseimage/{imageid}")
    public ResponseEntity<byte[]> merchandiseImageByimageid(@PathVariable("imageid") Long imageid) throws Exception {
        File result = vendorService.imageByMerchandiseImageId(imageid);
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", Files.probeContentType(result.toPath()));
        return new ResponseEntity<>(FileCopyUtils.copyToByteArray(result), header, HttpStatus.OK);
    }


    @PostMapping(value = "/register", consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Merchandise> registerMerchandise(@RequestPart("merchandise") String merchandiseString, @RequestPart(value = "images", required = false) List<MultipartFile> images) throws Exception {
        MerchandiseDTO merchandiseDTO = new ObjectMapper().readValue(merchandiseString, MerchandiseDTO.class);
        Merchandise newMerchandise = merchandiseMapper.toEntity(merchandiseDTO);
        log.info("================image : {}", images);
        log.info("================new Merchandise : {}", newMerchandise);
        if(images != null) {newMerchandise = vendorService.saveWithImage(newMerchandise, images);}
        log.info("=========== after Image add : {}",newMerchandise);
        Vendor resultVendor = vendorService.registerMerchandise(merchandiseDTO.getVendorId(), newMerchandise);
        log.info("=========== Result vendor : {}", resultVendor.toString());
        List<Merchandise> resultMerchandises = resultVendor.getMerchandises();
        Merchandise resultMerchandise = resultMerchandises.stream().sorted(Comparator.comparing(Merchandise::getId)).skip(resultMerchandises.size()-1).findFirst().get();
        return new ResponseEntity<Merchandise>(resultMerchandise, HttpStatus.OK);
    }

    @PostMapping(value = "/create", consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Vendor> createVendor(@RequestPart("vendor") String vendorString, @RequestPart(value = "images", required = false) List<MultipartFile> images) throws Exception{
        VendorDTO vendorDTO = new ObjectMapper().readValue(vendorString, VendorDTO.class);
        log.info("=========== VendorDTO : {} ", vendorDTO);
        Vendor newVendor = vendorMapper.toEntity(vendorDTO);
        log.info("=========== newVendor create : {} ", newVendor);
        if (images != null) {newVendor = vendorService.saveWithImage(newVendor, images);}
        log.info("=========== Save Complete : {} ", newVendor);
        return new ResponseEntity<Vendor>(vendorService.save(newVendor), HttpStatus.CREATED);
    }

    @PostMapping("/modify")
    public ResponseEntity<Vendor> modifyVendor(@RequestBody VendorDTO vendorDTO) {
        log.info("=========== Vendor modify : {} ", vendorDTO);
        Vendor newVendor = vendorMapper.toEntity(vendorDTO);
        log.info("=========== newVendor modify : {} ", newVendor);
        newVendor = vendorService.createVendor(newVendor);
        log.info("=========== Save Complete");
        return new ResponseEntity<Vendor>(newVendor, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Vendor>> listVendor() {
        List<Vendor> newVendor = vendorService.findAll();
        return new ResponseEntity<List<Vendor>>(newVendor, HttpStatus.CREATED);
    }

    @GetMapping("/allofvendorclear")
    public void clearVendor() {
        vendorService.deleteAll();
    }


    @GetMapping("/info/{vendorid}")
    public ResponseEntity<Vendor> getVendorInfo(@PathVariable("vendorid") Long vendorId) {
        log.info("=========== vendorId : " + vendorId);
        Vendor result = vendorService.findOne(vendorId).orElseGet(() -> Vendor.emptyVendor());
        log.info("=========== Vendor result : {}",result);
        return new ResponseEntity<Vendor>(result, HttpStatus.CREATED);
    }

    @GetMapping("/infobydomain/{vendordomain}")
    public ResponseEntity<Vendor> getVendorInfo(@PathVariable("vendordomain") String vendordomain) {
        log.info("=========== vendordomain : " + vendordomain);
        Vendor result = vendorService.findOneByVendorDomain(vendordomain).orElseGet(() -> Vendor.emptyVendor());
        log.info("=========== Vendor result : {}",result);
        return new ResponseEntity<Vendor>(result, HttpStatus.CREATED);
    }


    @GetMapping("/info/@{userid}")
    public ResponseEntity<Vendor> getVendorInfoByUserId(@PathVariable("userid") Long userId) {
        log.info("=========== userId : " + userId);
        Vendor result = vendorService.findOneByUserid(userId).orElseGet(() -> Vendor.emptyVendor());
        return new ResponseEntity<Vendor>(result, HttpStatus.CREATED);
    }


    @GetMapping("/merchandiseinfo/{vendorid}")
    public ResponseEntity<List<Merchandise>> getMerchandiseInfo(@PathVariable("vendorid") Long vendorId) {
        log.info("=========== vendorId : " + vendorId);
        Vendor result = vendorService.findOne(vendorId).get();
        List<Merchandise> resultMerchandise = result.getMerchandises();
        return new ResponseEntity<List<Merchandise>>(resultMerchandise, HttpStatus.CREATED);
    }

    @GetMapping("/merchandiseinfobydomain/{vendordomain}")
    public ResponseEntity<List<Merchandise>> getMerchandiseInfoByDomain(@PathVariable("vendordomain") String vendorDomain) {
        log.info("=========== vendorDomain : " + vendorDomain);
        Vendor result = vendorService.findOneByVendorDomain(vendorDomain).get();
        log.info("=========== vendor Result : " + result);
        List<Merchandise> resultMerchandise = result.getMerchandises();
        return new ResponseEntity<List<Merchandise>>(resultMerchandise, HttpStatus.CREATED);
    }

    @GetMapping("/merchandise/{merchandiseid}")
    public ResponseEntity<Merchandise> getOneMerchandiseInfo(@PathVariable("merchandiseid") Long merchandiseId) {
        log.info("=========== merchandiseId : " + merchandiseId);
        Merchandise result = vendorService.findOneMerchandise(merchandiseId).get();
        return new ResponseEntity<Merchandise>(result, HttpStatus.CREATED);
    }


    @PostMapping("/modify/{vendorid}")
    public ResponseEntity<Merchandise> modifyMerchandise(@PathVariable("vendorid") Long vendorId, @RequestBody MerchandiseDTO merchandiseDTO){
        vendorService.modifyMerchandise(vendorId, merchandiseMapper.toEntity(merchandiseDTO));
        return null;
    }

    @GetMapping("/delete/{vendorid}/{merchandiseid}")
    public ResponseEntity<Merchandise> deleteMerchandise(@PathVariable("vendorid") Long vendorId, @PathVariable("merchandiseid") Long merchandiseId){
        vendorService.deleteMerchandise(vendorId, merchandiseId);
        return null;
    }

    @GetMapping("/change/{vendorid}/state/{state}")
    public ResponseEntity<VendorDTO> changeVendorState(@PathVariable("vendorid") Long vendorId, @PathVariable("state") int vendorState){
        vendorService.changeVendorState(vendorId, vendorState);
        return null;
    }
}
