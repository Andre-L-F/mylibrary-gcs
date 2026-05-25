package com.library.library.repository;

import com.library.library.entity.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface EmprestimoRepository
        extends JpaRepository<Emprestimo, Long> {

    List<Emprestimo> findByDataDevolucaoEfetivaIsNull();

    List<Emprestimo>
    findByDataDevolucaoPrevistaBeforeAndDataDevolucaoEfetivaIsNull(
            LocalDate data
    );

    List<Emprestimo> findByLivroId(Long livroId);
}