package com.library.library.entity;

import com.library.library.enums.StatusLivro;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String autor;

    private String isbn;

    private Integer ano;

    @Enumerated(EnumType.STRING)
    private StatusLivro status = StatusLivro.DISPONIVEL;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @OneToMany(mappedBy = "livro")
    private List<Emprestimo> emprestimos = new ArrayList<>();

    public Livro() {
    }

    public Livro(Long id, String titulo, String autor,
                 String isbn, Integer ano,
                 StatusLivro status,
                 Categoria categoria) {

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.ano = ano;
        this.status = status;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getAutor() {
        return autor;
    }

    public String getIsbn() {
        return isbn;
    }

    public Integer getAno() {
        return ano;
    }

    public StatusLivro getStatus() {
        return status;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public List<Emprestimo> getEmprestimos() {
        return emprestimos;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public void setStatus(StatusLivro status) {
        this.status = status;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public void setEmprestimos(List<Emprestimo> emprestimos) {
        this.emprestimos = emprestimos;
    }
}