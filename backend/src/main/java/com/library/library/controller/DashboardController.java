package com.library.library.controller;


import com.library.library.dto.DashboardDTO;
import com.library.library.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin("*")
public class DashboardController {

    private final DashboardService service;

    public DashboardController(
            DashboardService service
    ) {

        this.service = service;
    }

    @GetMapping
    public DashboardDTO dashboard() {
        return service.obterDados();
    }
}