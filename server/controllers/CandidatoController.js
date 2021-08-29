const Candidato = require('../models/Candidato');


//Manda o cadastro para o banco de dados
module.exports = {
    async registrar(req, res){


        const { nome, cargo_pretendido, estado_civil, gênero, data_nascimento, cep, logradouro, número, bairro, cidade, estado, telefone_fixo_1,
            telefone_fixo_2, celular, contato, email, rg, cpf, possui_veiculo, habilitação
            } = req.body;
  
            const novoCandidato = new Candidato();
    
            novoCandidato.nome = nome; 
            novoCandidato.cargo_pretendido = cargo_pretendido;
            novoCandidato.data_nascimento = data_nascimento;
            novoCandidato.estado_civil = estado_civil; 
            novoCandidato.gênero = gênero;
            novoCandidato.logradouro = logradouro; 
            novoCandidato.cep = cep; 
            novoCandidato.bairro = bairro;
            novoCandidato.número = número;
            novoCandidato.cidade = cidade; 
            novoCandidato.estado = estado;
            novoCandidato.telefone_fixo_1 = telefone_fixo_1;
            novoCandidato.telefone_fixo_2 = telefone_fixo_2;
            novoCandidato.celular = celular; 
            novoCandidato.contato = contato;
            novoCandidato.email = email; 
            novoCandidato.cpf = cpf;
            novoCandidato.rg = rg;
            novoCandidato.possui_veiculo = possui_veiculo; 
            novoCandidato.tipo_habilitação = habilitação;

            novoCandidato.save((err, savedCandidate) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
                return res.status(200).send(savedCandidate);
            });
      
    }
}