package com.library.library.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "livro_id")
    private Livro livro;

    private String nomePessoa;

    private String telefone;

    private LocalDate dataEmprestimo;

    private LocalDate dataDevolucaoPrevista;

    private LocalDate dataDevolucaoEfetiva;

    public Emprestimo() {
    }

    public Emprestimo(Long id,
                      Livro livro,
                      String nomePessoa,
                      String telefone,
                      LocalDate dataEmprestimo,
                      LocalDate dataDevolucaoPrevista,
                      LocalDate dataDevolucaoEfetiva) {

        this.id = id;
        this.livro = livro;
        this.nomePessoa = nomePessoa;
        this.telefone = telefone;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    }

    public Long getId() {
        return id;
    }

    public Livro getLivro() {
        return livro;
    }

    public String getNomePessoa() {
        return nomePessoa;
    }

    public String getTelefone() {
        return telefone;
    }

    public LocalDate getDataEmprestimo() {
        return dataEmprestimo;
    }

    public LocalDate getDataDevolucaoPrevista() {
        return dataDevolucaoPrevista;
    }

    public LocalDate getDataDevolucaoEfetiva() {
        return dataDevolucaoEfetiva;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    public void setNomePessoa(String nomePessoa) {
        this.nomePessoa = nomePessoa;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setDataEmprestimo(LocalDate dataEmprestimo) {
        this.dataEmprestimo = dataEmprestimo;
    }

    public void setDataDevolucaoPrevista(LocalDate dataDevolucaoPrevista) {
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    }

    public void setDataDevolucaoEfetiva(LocalDate dataDevolucaoEfetiva) {
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    }
}