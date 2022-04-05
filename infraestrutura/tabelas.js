class Tabelas {
    init(conexao){
        this.conexao = conexao
        console.log('Tabelas foram chamadas')

        this.criarTabelaAtendimentos()
    }

    criarTabelaAtendimentos() {
        const querySql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(255) NOT NULL, pet VARCHAR(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(querySql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela atendimentos criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas