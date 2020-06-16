# 🚀 Rocketseat GoStack Desafio #01 - Conceitos do Node.js

Este desafio consistiu em criar 5 rotas seguindo as especificações fornecidas, de modo que todos os testes configurados com Jest passassem.

## Aplicação exemplo de portfolio de repositórios, com 5 rotas:

### Repositórios
- POST /repositories -> armazenar um projeto com { uuid, title, url, techs, likes }
- READ /repositories -> listar todos os projetos armazenados
- UPDATE /repositories/:id -> atualizar { title, url, techs } fornecendo a id do projeto como parâmetro da rota
- DELETE /repositories/:id -> deletar o projeto com a id fornecida na rota

### Likes
- POST /repositories/:id/likes -> criar um like no projeto com a id especificada

## Testes fornecidos:

- should be able to create a new repository
- should be able to list the repositories
- should be able to update repository
- should not be able to update a repository that does not exist
- should not be able to update repository likes manually
- should be able to delete the repository
- should not be able to delete a repository that does not exist
- should be able to give a like to the repository
- should not be able to like a repository that does not exist

