
# 🌊 Atlantis - Sistema de Gestão (MVP)

Projeto desenvolvido como parte da atividade avaliativa de **Técnicas de Programação**, com foco na aplicação de conceitos de **TypeScript** e **Padrões de Projeto**.

---

## 📚 Contexto do Projeto

O crescimento do setor de parques aquáticos no Brasil e no mundo evidencia a necessidade de soluções tecnológicas eficientes para gestão desses espaços.

Pensando nisso, surge a **Ocean Solutions**, uma empresa fictícia que propõe o desenvolvimento de um sistema inovador chamado **Atlantis**.

O Atlantis está em sua fase inicial (**MVP - Minimum Viable Product**), com o objetivo de validar a solução antes de expandi-la.

---

## 🎯 Objetivo

Desenvolver o primeiro módulo do sistema Atlantis, responsável por:

- Cadastro de **clientes**
- Cadastro de **dependentes (convidados)**

Aplicando o padrão de projeto **Prototype** para reutilização de dados entre objetos.

---

## 🧠 Conceitos Aplicados

- Programação Orientada a Objetos (POO)
- TypeScript
- Padrões de Projeto:
  - **Prototype**

---

## 🧩 Regras de Negócio

- Um **cliente** pode possuir vários dependentes
- Um **dependente**:
  - Está vinculado a um cliente responsável
  - Compartilha os mesmos dados de endereço e telefone do responsável
- O padrão **Prototype** é utilizado para clonar objetos de endereço e telefone

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- VSCode (recomendado)
- TypeScript instalado globalmente:

```bash
npm install -g typescript
````

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/rebeca-lima-ti/AV1-TPII.git
```

2. Acesse a pasta do projeto:

```bash
cd AV1-TPII
```

3. Compile o projeto:

```bash
tsc
```

4. Execute o projeto:

```bash
node js/teste/index.js
```

---

## 🏗️ Base do Projeto

O projeto foi baseado no repositório original fornecido pelo professor:

🔗 [https://github.com/gerson-pn/atvi-atlantis](https://github.com/gerson-pn/atvi-atlantis)

---

## 👨‍🏫 Professor

**Dr. Eng. Gerson Penha**

---

## 📌 Observações

Este projeto tem caráter acadêmico e foi desenvolvido com fins educacionais para prática de conceitos de engenharia de software e desenvolvimento com TypeScript.
