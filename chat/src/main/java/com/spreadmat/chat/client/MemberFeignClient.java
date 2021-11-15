package com.spreadmat.chat.client;

import com.spreadmat.chat.model.Vendor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("auth")
public interface MemberFeignClient {
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/member/{userid}",
            consumes ="application/json"
    )
    String getIdToNickname(@PathVariable("userid") Long userid);

}
