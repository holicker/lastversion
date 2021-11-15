package com.spreadmat.chat.client;

import com.spreadmat.chat.model.Merchandise;
import com.spreadmat.chat.model.Vendor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("vendor")
public interface VendorFeignClient {

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/vendor/infobydomain/{vendordomain}",
            consumes ="application/json"
    )
    Vendor getVendorByVendorDomain(@PathVariable("vendordomain") String vendordomain);

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/vendor/merchandise/{merchandiseid}",
            consumes ="application/json"
    )
    Merchandise getMerchandiseByMerchandiseId(@PathVariable("merchandiseid") Long merchandiseid);


}
