package com.spreadmat.vendor.web.rest;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Data
@RequestMapping(path = "/home", produces = "application/json")
public class HomeController {
    @GetMapping("/")
    public void hello(){
        log.info("하하하");
    }
}
