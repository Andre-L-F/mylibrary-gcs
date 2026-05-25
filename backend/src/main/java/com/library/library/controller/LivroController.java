package com.library.library.controller;



import com.library.library.entity.Livro;
import com.library.library.enums.StatusLivro;
import com.library.library.repository.LivroRepository;
import com.library.library.service.LivroService;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/livros")
@CrossOrigin("*")
public class LivroController {

    private final LivroRepository repository;
    private final LivroService service;

    public LivroController(
            LivroRepository repository,
            LivroService service
    ) {

        this.repository = repository;
        this.service = service;
    }

    @GetMapping
    public List<Livro> listar(
            @RequestParam(required = false)
            String busca,

            @RequestParam(required = false)
            Long categoriaId,

            @RequestParam(required = false)
            StatusLivro status
    ) {

        if (busca != null && !busca.isEmpty()) {

            return repository
                    .findByTituloContainingIgnoreCaseOrAutorContainingIgnoreCase(
                            busca,
                            busca
                    );
        }

        if (categoriaId != null && status != null) {

            return repository
                    .findByCategoriaIdAndStatus(
                            categoriaId,
                            status
                    );
        }

        if (categoriaId != null) {
            return repository.findByCategoriaId(categoriaId);
        }

        if (status != null) {
            return repository.findByStatus(status);
        }

        return repository.findAll();
    }

    @PostMapping
    public Livro salvar(
            @RequestBody Livro livro
    ) {

        return service.salvar(livro);
    }

    @DeleteMapping("/{id}")
    public void deletar(
            @PathVariable Long id
    ) {

        service.deletar(id);
    }
}