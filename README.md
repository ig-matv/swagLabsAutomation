# SauceDemo Login Automation

Projeto de automação de testes end-to-end para o site [SauceDemo](https://www.saucedemo.com/), utilizando Playwright com JavaScript.

O objetivo é validar os principais fluxos da aplicação, com foco em autenticação, mensagens de erro, comportamento dos campos de login e interações básicas na página de produtos.

## Tecnologias

- JavaScript
- Node.js
- Playwright
- Playwright Test Runner

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

## Configuração do Playwright

O arquivo `playwright.config.js` define:

- Diretório de testes: `./SauceDemo Automation`
- Execução paralela dos testes
- Reporter HTML
- Trace habilitado na primeira retentativa
- Projeto configurado para WebKit/Desktop Safari
- Retentativas e workers ajustados para ambiente de CI

## Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Instale os navegadores do Playwright

```bash
npx playwright install
```

### 3. Execute todos os testes

```bash
npx playwright test
```

### 4. Execute apenas os testes de login

```bash
npx playwright test "SauceDemo Automation/Login/login.spec.js"
```

### 5. Execute apenas os testes da home

```bash
npx playwright test "SauceDemo Automation/Home/home.spec.js"
```

### 6. Abra o relatório HTML

```bash
npx playwright show-report
```

## Relatórios

Após a execução, o Playwright gera um relatório HTML na pasta `playwright-report/`.

Também podem ser gerados arquivos temporários na pasta `test-results/`, que contém evidências de execução, traces e informações úteis para análise de falhas.

## Objetivo de aprendizado

Este projeto foi desenvolvido para praticar automação de testes end-to-end com Playwright, explorando:

- Escrita de cenários funcionais
- Uso de locators com `data-test`
- Validação de mensagens de erro
- Organização de testes por funcionalidade
- Execução e análise de relatórios
- Cobertura de fluxos positivos, negativos e casos de borda

## Autor

Projeto criado como parte dos estudos em qualidade de software, automação de testes e QA.
