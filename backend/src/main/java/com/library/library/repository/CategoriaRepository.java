package com.library.library.repository;

import com.library.library.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository
        extends JpaRepository<Categoria, Long> {

    boolean existsByNome(String nome);
}