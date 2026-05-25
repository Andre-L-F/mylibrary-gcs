package com.library.library.controller;

import com.library.library.entity.Emprestimo;
import com.library.library.service.EmprestimoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emprestimos")
@CrossOrigin("*")
public class EmprestimoController {

    private final EmprestimoService service;

    public EmprestimoController(
            EmprestimoService service
    ) {

        this.service = service;
    }

    @GetMapping
    public List<Emprestimo> listar() {
        return service.listar();
    }

    @GetMapping("/ativos")
    public List<Emprestimo> ativos() {
        return service.ativos();
    }

    @GetMapping("/atrasados")
    public List<Emprestimo> atrasados() {
        return service.atrasados();
    }

    @PostMapping("/emprestar/{livroId}")
    public Emprestimo emprestar(
            @PathVariable Long livroId,
            @RequestBody Emprestimo emprestimo
    ) {

        return service.emprestar(
                livroId,
                emprestimo
        );
    }

    @PostMapping("/{id}/devolver")
    public Emprestimo devolver(
            @PathVariable Long id
    ) {

        return service.devolver(id);
    }
}