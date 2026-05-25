package com.library.library.service;

import com.library.library.dto.DashboardDTO;
import com.library.library.dto.EmprestimoResumoDTO;
import com.library.library.entity.Emprestimo;
import com.library.library.enums.StatusLivro;
import com.library.library.repository.EmprestimoRepository;
import com.library.library.repository.LivroRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    private final LivroRepository livroRepository;
    private final EmprestimoRepository emprestimoRepository;

    public DashboardService(
            LivroRepository livroRepository,
            EmprestimoRepository emprestimoRepository
    ) {

        this.livroRepository = livroRepository;
        this.emprestimoRepository = emprestimoRepository;
    }

    public DashboardDTO obterDados() {

        DashboardDTO dto = new DashboardDTO();

        dto.setTotalLivros(
                livroRepository.count()
        );

        dto.setDisponiveis(
                (long) livroRepository
                        .findByStatus(StatusLivro.DISPONIVEL)
                        .size()
        );

        dto.setEmprestados(
                (long) livroRepository
                        .findByStatus(StatusLivro.EMPRESTADO)
                        .size()
        );

        dto.setEmprestimosAtivos(
                (long) emprestimoRepository
                        .findByDataDevolucaoEfetivaIsNull()
                        .size()
        );

        List<EmprestimoResumoDTO> ultimos =
                emprestimoRepository
                        .findAll()
                        .stream()
                        .map(this::converterResumo)
                        .collect(Collectors.toList());

        dto.setUltimosEmprestimos(ultimos);

        return dto;
    }

    private EmprestimoResumoDTO converterResumo(
            Emprestimo emprestimo
    ) {

        return new EmprestimoResumoDTO(
                emprestimo.getId(),
                emprestimo.getLivro().getTitulo(),
                emprestimo.getNomePessoa(),
                emprestimo.getDataEmprestimo(),
                emprestimo.getDataDevolucaoPrevista()
        );
    }
}