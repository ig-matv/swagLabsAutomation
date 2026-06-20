# SauceDemo Login Automation

Projeto de automação de testes end-to-end para o site [SauceDemo](https://www.saucedemo.com/), utilizando Playwright com JavaScript.

O objetivo é validar os principais fluxos da aplicação, com foco em autenticação, mensagens de erro, comportamento dos campos de login e interações básicas na página de produtos.


## Estrutura do projeto

```text
.
+-- SauceDemo Automation/
|   +-- Home/
|   |   +-- home.spec.js
|   +-- Login/
|       +-- login.spec.js
+-- playwright.config.js
+-- package.json
+-- package-lock.json
```

## Cenários automatizados

O projeto possui 38 testes automatizados, divididos em:

- 28 cenários de login
- 10 cenários da página home/produtos

### Login

Os testes de login validam:

- Login com usuários válidos do SauceDemo
- Login com usuário bloqueado
- Usuário inexistente
- Senha incorreta
- Campos obrigatórios vazios
- Usuário e senha com espaços extras
- Validação de letras maiúsculas
- Entradas com caracteres especiais
- Tentativas com payloads de SQL Injection
- Tentativas com scripts no usuário e senha
- Visibilidade dos campos e botão de login
- Comportamento após limpar os campos
- Entradas com mais de 100 caracteres

### Home / Produtos

Os testes da home validam:

- Carregamento da página de produtos
- Quantidade de produtos exibidos
- Adição de um produto ao carrinho
- Adição de múltiplos produtos ao carrinho
- Remoção de produto diretamente pela home
- Ordenação por nome de A a Z
- Ordenação por nome de Z a A
- Ordenação por menor preço
- Ordenação por maior preço
- Acesso ao carrinho pela home

## Relatórios

Após a execução, o Playwright gera um relatório HTML na pasta `playwright-report/`.

Também podem ser gerados arquivos temporários na pasta `test-results/`, que contém evidências de execução, traces e informações úteis para análise de falhas.


