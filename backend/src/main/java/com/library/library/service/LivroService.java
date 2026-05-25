package com.library.library.service;


import com.library.library.entity.Livro;
import com.library.library.repository.LivroRepository;
import com.library.library.enums.StatusLivro;
import org.springframework.stereotype.Service;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public Livro salvar(Livro livro) {

        livro.setStatus(StatusLivro.DISPONIVEL);

        return livroRepository.save(livro);
    }

    public void deletar(Long id) {

        Livro livro = livroRepository.findById(id)
                .orElseThrow();

        if (livro.getStatus() == StatusLivro.EMPRESTADO) {
            throw new RuntimeException(
                    "Livro emprestado nao pode ser removido"
            );
        }

        livroRepository.delete(livro);
    }
}