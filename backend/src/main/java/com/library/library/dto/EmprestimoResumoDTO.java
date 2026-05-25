package com.library.library.dto;

import java.time.LocalDate;

public class EmprestimoResumoDTO {

    private Long id;

    private String livro;

    private String pessoa;

    private LocalDate dataEmprestimo;

    private LocalDate devolucaoPrevista;

    public EmprestimoResumoDTO() {
    }

    public EmprestimoResumoDTO(
            Long id,
            String livro,
            String pessoa,
            LocalDate dataEmprestimo,
            LocalDate devolucaoPrevista
    ) {

        this.id = id;
        this.livro = livro;
        this.pessoa = pessoa;
        this.dataEmprestimo = dataEmprestimo;
        this.devolucaoPrevista = devolucaoPrevista;
    }

    public Long getId() {
        return id;
    }

    public String getLivro() {
        return livro;
    }

    public String getPessoa() {
        return pessoa;
    }

    public LocalDate getDataEmprestimo() {
        return dataEmprestimo;
    }

    public LocalDate getDevolucaoPrevista() {
        return devolucaoPrevista;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLivro(String livro) {
        this.livro = livro;
    }

    public void setPessoa(String pessoa) {
        this.pessoa = pessoa;
    }

    public void setDataEmprestimo(LocalDate dataEmprestimo) {
        this.dataEmprestimo = dataEmprestimo;
    }

    public void setDevolucaoPrevista(LocalDate devolucaoPrevista) {
        this.devolucaoPrevista = devolucaoPrevista;
    }
}