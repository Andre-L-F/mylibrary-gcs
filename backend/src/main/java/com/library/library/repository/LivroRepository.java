package com.library.library.repository;



import com.library.library.entity.Livro;
import com.library.library.enums.StatusLivro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LivroRepository extends JpaRepository<Livro, Long> {

    List<Livro> findByTituloContainingIgnoreCase(String titulo);

    List<Livro> findByAutorContainingIgnoreCase(String autor);

    List<Livro> findByCategoriaId(Long categoriaId);

    List<Livro> findByStatus(StatusLivro status);

    List<Livro> findByTituloContainingIgnoreCaseOrAutorContainingIgnoreCase(
            String titulo,
            String autor
    );

    List<Livro> findByCategoriaIdAndStatus(
            Long categoriaId,
            StatusLivro status
    );
}