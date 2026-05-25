package com.library.library.service;

import com.library.library.entity.Emprestimo;
import com.library.library.entity.Livro;
import com.library.library.enums.StatusLivro;
import com.library.library.repository.EmprestimoRepository;
import com.library.library.repository.LivroRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EmprestimoService {

    private final EmprestimoRepository emprestimoRepository;
    private final LivroRepository livroRepository;

    public EmprestimoService(
            EmprestimoRepository emprestimoRepository,
            LivroRepository livroRepository
    ) {

        this.emprestimoRepository = emprestimoRepository;
        this.livroRepository = livroRepository;
    }

    public List<Emprestimo> listar() {
        return emprestimoRepository.findAll();
    }

    public List<Emprestimo> ativos() {
        return emprestimoRepository
                .findByDataDevolucaoEfetivaIsNull();
    }

    public List<Emprestimo> atrasados() {

        return emprestimoRepository
                .findByDataDevolucaoPrevistaBeforeAndDataDevolucaoEfetivaIsNull(
                        LocalDate.now()
                );
    }

    public Emprestimo emprestar(
            Long livroId,
            Emprestimo emprestimo
    ) {

        Livro livro = livroRepository.findById(livroId)
                .orElseThrow();

        if (livro.getStatus() == StatusLivro.EMPRESTADO) {
            throw new RuntimeException("Livro ja emprestado");
        }

        livro.setStatus(StatusLivro.EMPRESTADO);

        emprestimo.setLivro(livro);
        emprestimo.setDataEmprestimo(LocalDate.now());

        livroRepository.save(livro);

        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo devolver(Long emprestimoId) {

        Emprestimo emprestimo = emprestimoRepository
                .findById(emprestimoId)
                .orElseThrow();

        if (emprestimo.getDataDevolucaoEfetiva() != null) {
            throw new RuntimeException("Livro ja devolvido");
        }

        emprestimo.setDataDevolucaoEfetiva(LocalDate.now());

        Livro livro = emprestimo.getLivro();

        livro.setStatus(StatusLivro.DISPONIVEL);

        livroRepository.save(livro);

        return emprestimoRepository.save(emprestimo);
    }
}
