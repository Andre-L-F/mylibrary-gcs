package com.library.library.controller;

import com.library.library.entity.Categoria;
import com.library.library.service.CategoriaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin("*")
public class CategoriaController {

    private final CategoriaService service;

    public CategoriaController(CategoriaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Categoria> listar() {
        return service.listar();
    }

    @PostMapping
    public Categoria salvar(
            @RequestBody Categoria categoria
    ) {

        return service.salvar(categoria);
    }

    @DeleteMapping("/{id}")
    public void deletar(
            @PathVariable Long id
    ) {

        service.deletar(id);
    }
}