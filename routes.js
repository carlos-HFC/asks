const express = require('express')
const Ask = require("./database/Ask")
const Answer = require("./database/Answer")

const routes = express.Router()

//Home
routes.get("/", async (req, res) => {
   const title = "Home"
   //pegar todas as perguntas da tabela, e ordenar pelo id de forma decrescente
   const ask = await Ask.findAll({
      raw: true,
      order: [["id", "DESC"]]
   })

   //renderizar a index passando o title e as informações da tabela
   res.render("index", {
      title,
      ask
   })
})

//Perguntas
routes.get("/ask", async (req, res) => {
   const title = "Perguntas"
   res.render("ask", {
      title
   })
})

//ID da pergunta
routes.get("/ask/:id", async (req, res) => {
   try {
      //pegar o id dos parâmetros da url
      const id = req.params.id
      //procurar pelo id
      const ask = await Ask.findOne({ where: { id } })
      const answer = await Answer.findAll({
         where: { askId: ask.id },
         order: [["id", "DESC"]]
      })
      //renderizar a página da pergunta se encontrar ou voltar a index se não encontrar
      if (!ask) {
         return res.status(404).redirect("/")
      } else {
         return res.status(200).render("askDetail", {
            ask,
            answer,
            title: ask.title
         })
      }
   } catch (error) {
      return res.status(404).redirect("/")
   }
})

//Enviar pergunta
routes.post("/save", async (req, res) => {
   const title = req.body.title
   const description = req.body.description
   //enviar o título e a descrição
   await Ask.create({ title, description })
   //redirecionar para a index
   return res.status(201).redirect("/")
})

//Enviar resposta
routes.post("/answer", async (req, res) => {
   const body = req.body.body
   const askId = req.body.askId
   //enviar o texto de resposta e o id da pergunta
   await Answer.create({ body, askId })
   //redirecionar para a página da pergunta
   return res.status(201).redirect(`/ask/${askId}`)
})

module.exports = routes