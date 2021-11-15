package com.spreadmat.vendor.service.impl;

import com.spreadmat.vendor.domain.Merchandise;
import com.spreadmat.vendor.domain.MerchandisePicture;
import com.spreadmat.vendor.domain.Vendor;
import com.spreadmat.vendor.domain.VendorPicture;
import com.spreadmat.vendor.repository.MerchandisePictureRepository;
import com.spreadmat.vendor.repository.MerchandiseRepository;
import com.spreadmat.vendor.repository.VendorPictureRepository;
import com.spreadmat.vendor.repository.VendorRepository;
import com.spreadmat.vendor.service.FileHandler;
import com.spreadmat.vendor.service.VendorService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Data
@Slf4j
public class VendorServiceImpl implements VendorService {

    @Autowired
    private final VendorRepository vendorRepository;
    @Autowired
    private final MerchandiseRepository merchandiseRepository;
    @Autowired
    private final VendorPictureRepository vendorPictureRepository;
    @Autowired
    private final MerchandisePictureRepository merchandisePictureRepository;
    @Autowired
    private final FileHandler filehandler;

    @Override
    public Vendor save(Vendor vendor){
        log.info("=========== Save Complete : vendor - " + vendor);
        return vendorRepository.save(vendor);
    }

    @Override
    public Page<Vendor> findAll(Pageable pageable){
        return vendorRepository.findAll(pageable);
    }

    @Override
    public List<Vendor> findAll(){
        return vendorRepository.findAll();
    }

    @Override
    public Optional<Vendor> findOne(Long id){
        return vendorRepository.findById(id);

    }

    @Override
    public Vendor saveWithImage(Vendor vendor, List<MultipartFile> images) throws Exception {
        List<VendorPicture> list = filehandler.parseFileInfo(vendor, images);
        if(list.isEmpty()){
            return vendor;
        }
        vendor.pictures(list);
        return vendor;
    }

    @Override
    public Merchandise saveWithImage(Merchandise merchandise, List<MultipartFile> images) throws Exception {
        List<MerchandisePicture> list = filehandler.parseFileInfo(merchandise, images);
        if(list.isEmpty()){
            return merchandise;
        }
        merchandise.pictures(list);
        return merchandise;
    }


    @Override
    public List<File> imageReturn(Long vendorid) throws Exception {
        List<VendorPicture> list = vendorRepository.findById(vendorid).get().getPictures();
        List<File> filelist = filehandler.parseFileList(list);
        return filelist;
    }


    @Override
    public File imageByMerchandiseImageId(Long imageid) throws Exception {
        MerchandisePicture target = merchandisePictureRepository.findById(imageid).get();
        File file = filehandler.parseFile(target.getStoredFilePath());
        return file;
    }

    @Override
    public File imageByVendorImageId(Long imageid) throws Exception {
        VendorPicture target = vendorPictureRepository.findById(imageid).get();
        File file = filehandler.parseFile(target.getStoredFilePath());
        return file;
    }

    @Override
    public Optional<Vendor> findOneByUserid(Long userid){
        return vendorRepository.findByUserId(userid);
    }

    @Override
    public Optional<Vendor> findOneByVendorDomain(String vendorDomain){
        return vendorRepository.findByVendorDomain(vendorDomain);
    }

    @Override
    public Optional<Merchandise> findOneMerchandise(Long id){
        return merchandiseRepository.findById(id);

    }
    @Override
    public void deleteAll(){vendorRepository.deleteAll();};


    @Override
    public void delete(Long vendorId){
        vendorRepository.deleteById(vendorId);
    }

    @Override
    public Vendor createVendor(Vendor vendor){
        return vendorRepository.save(vendor);
    }

    @Override
    public Vendor registerMerchandise(Long vendorId, Merchandise newMerchandise) {
        log.info("=========== Service : RegisterMerchandise");
        Vendor vendor = vendorRepository.findById(vendorId).get();
        newMerchandise = newMerchandise.vendor(vendor);
        log.info("=========== Found : Vendor = " + vendor.toString());
        log.info("=========== Target : Merchandise = {}",newMerchandise);
        vendor.registerMerchandise(newMerchandise);
        log.info("=========== Vendor Registered Merchandise");
        return vendorRepository.save(vendor);
    }

    @Override
    public Vendor modifyMerchandise(Long vendorId, Merchandise newMerchandise) {
        log.info("=========== Service : 수정 시작");
        log.info("=========== New Merchandise : " + newMerchandise);
        Vendor vendor = vendorRepository.findById(vendorId).get();
        log.info("=========== Target Vendor : " + vendor);
        vendor.modifyMerchandise(newMerchandise);
        return vendorRepository.save(vendor);
    }

    @Override
    public Vendor deleteMerchandise(Long vendorId, Long merchandiseId) {
        log.info("=========== Service : 삭제 시작");
        log.info("=========== Vendor Id : " + vendorId);
        log.info("=========== Merchandise Id : " + merchandiseId);
        Vendor vendor = vendorRepository.findById(vendorId).get();
        log.info("=========== Vendor : " + vendor);
        vendor.deleteMerchandise(merchandiseId);
        return vendorRepository.save(vendor);
    }

    @Override
    public Vendor changeVendorState(Long vendorId, int vendorState) {
        Vendor vendor = vendorRepository.findById(vendorId).get();
        vendor.changeVendorState(vendorState);
        return vendorRepository.save(vendor);
    }
}
