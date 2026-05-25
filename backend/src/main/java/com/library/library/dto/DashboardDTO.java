package com.library.library.dto;

import java.util.List;

public class DashboardDTO {

    private Long totalLivros;

    private Long disponiveis;

    private Long emprestados;

    private Long emprestimosAtivos;

    private List<EmprestimoResumoDTO> ultimosEmprestimos;

    public DashboardDTO() {
    }

    public Long getTotalLivros() {
        return totalLivros;
    }

    public void setTotalLivros(Long totalLivros) {
        this.totalLivros = totalLivros;
    }

    public Long getDisponiveis() {
        return disponiveis;
    }

    public void setDisponiveis(Long disponiveis) {
        this.disponiveis = disponiveis;
    }

    public Long getEmprestados() {
        return emprestados;
    }

    public void setEmprestados(Long emprestados) {
        this.emprestados = emprestados;
    }

    public Long getEmprestimosAtivos() {
        return emprestimosAtivos;
    }

    public void setEmprestimosAtivos(Long emprestimosAtivos) {
        this.emprestimosAtivos = emprestimosAtivos;
    }

    public List<EmprestimoResumoDTO> getUltimosEmprestimos() {
        return ultimosEmprestimos;
    }

    public void setUltimosEmprestimos(
            List<EmprestimoResumoDTO> ultimosEmprestimos
    ) {

        this.ultimosEmprestimos = ultimosEmprestimos;
    }
}