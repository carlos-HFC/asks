module.exports = {
   dialect: 'postgres', //tipo de banco
   host: 'localhost', //onde está o servidor
   port: 5433, //porta
   username: 'postgres', //usuário
   password: '123456', //senha
   database: 'Perguntas', //nome do banco
   define: {
      timestamps: true, //criará as colunas created_at e updated_at
      underscored: false //nome das tabelas e colunas no formato pascal case
   }
}