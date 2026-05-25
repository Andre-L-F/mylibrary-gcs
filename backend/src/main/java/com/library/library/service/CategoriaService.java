package com.library.library.service;

import com.library.library.entity.Categoria;
import com.library.library.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    private final CategoriaRepository repository;

    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public List<Categoria> listar() {
        return repository.findAll();
    }

    public Categoria salvar(Categoria categoria) {

        if (repository.existsByNome(categoria.getNome())) {
            throw new RuntimeException("Categoria ja existe");
        }

        return repository.save(categoria);
    }

    public void deletar(Long id) {

        Categoria categoria = repository.findById(id)
                .orElseThrow();

        if (!categoria.getLivros().isEmpty()) {
            throw new RuntimeException(
                    "Categoria possui livros vinculados"
            );
        }

        repository.delete(categoria);
    }
}