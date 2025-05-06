package backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pessoa")
public class PessoaRest {
	
	@Autowired
	private PessoaDao pessoaDao;

	@GetMapping
	public List<Pessoa> get(){
		return this.pessoaDao.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Pessoa pessoa) {
		this.pessoaDao.save(pessoa);
	}
	
}
