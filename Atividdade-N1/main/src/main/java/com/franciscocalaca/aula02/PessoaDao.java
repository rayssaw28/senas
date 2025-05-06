package com.franciscocalaca.aula02;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaDao extends JpaRepository<Pessoa, Integer>{

}
    