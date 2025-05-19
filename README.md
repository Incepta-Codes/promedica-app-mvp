# Promédica Saúde - MVP App de Agendamento

Este repositório contém o código-fonte do MVP (Minimum Viable Product) para o aplicativo de agendamento de consultas médicas "Promédica", desenvolvido como parte da disciplina de Engenharia de Software.

## Visão Geral do Projeto

O objetivo deste MVP é demonstrar um fluxo navegável de funcionalidades essenciais para um aplicativo de agendamento de consultas, utilizando HTML, CSS e JavaScript puro para o frontend, com lógica de backend simulada/mockada.

## Funcionalidades Implementadas

O MVP atual inclui as seguintes telas e fluxos principais:

1.  **Tela de Login (`index.html`):**
    *   Autenticação com credenciais fixas (CPF/Senha).
    *   Funcionalidade "Lembrar-me" com gerenciamento de sessão via `localStorage`.
    *   Links para recuperação de senha e cadastro.
2.  **Tela de Cadastro de Acesso (`signup.html`):**
    *   Coleta de CPF, data de nascimento e definição de senha (com confirmação).
    *   Validações básicas e simulação de processo de cadastro.
3.  **Tela de Recuperação de Senha (`recover-password.html`):**
    *   Coleta de CPF e data de nascimento.
    *   Opções mockadas para envio de instruções de recuperação por Email ou SMS.
4.  **Tela Principal / Menu (`home.html`):**
    *   Dashboard principal exibido após login bem-sucedido.
    *   Apresenta um menu de navegação para as funcionalidades do aplicativo.
    *   Funcionalidade de Logout integrada ao menu.
    *   Atende parcialmente à HU-009 (Interface Visual e Interação).
5.  **Tela de Busca na Rede Credenciada (`provider-search.html`):**
    *   Permite ao usuário filtrar por Estado, Cidade, Tipo de Serviço e Especialidade.
    *   Simula a busca na rede credenciada.
6.  **Tela de Resultado da Busca (`search-results.html`):**
    *   Exibe uma lista mockada de prestadores de serviço.
    *   Inclui um modal para "Confirmar Agendamento" (lógica mockada).
    *   Relacionada à HU-006 (Marcação de Nova Consulta).
7.  **Tela de Desmarcar Consulta (`cancel-appointment.html`):**
    *   Exibe uma lista mockada de agendamentos do usuário.
    *   Permite ao usuário "Desmarcar" uma consulta com um diálogo de confirmação.
    *   Atende à HU-007 (Implementar Desmarcação Direta de Consulta).
8.  **Tela Meus Agendamentos (`appointments.html`):**
    *   Exibe uma lista mockada de agendamentos do usuário.
    *   Implementa a HU-004 (Aumentar Fonte Padrão na Lista de Agendamentos).
    *   Inclui funcionalidade mockada de "Copiar código barras".

## Tecnologias Utilizadas

*   HTML5
*   CSS3
*   JavaScript (Vanilla JS)
*   FontAwesome (para ícones)

## Estrutura de Arquivos Principal

```
.
├── css/
│   └── style.css         # Estilos globais da aplicação
├── js/
│   ├── login.js          # Lógica da tela de login (index.html)
│   ├── signup.js         # Lógica da tela de cadastro
│   ├── recover-password.js # Lógica da tela de recuperação de senha
│   ├── home.js           # Lógica da tela principal/menu
│   ├── provider-search.js  # Lógica da busca na rede credenciada
│   ├── search-results.js   # Lógica dos resultados da busca e confirmação
│   ├── cancel-appointment.js # Lógica de desmarcar consulta
│   └── appointments.js     # Lógica de meus agendamentos
├── index.html            # Tela de login (anteriormente login.html)
├── signup.html           # Tela de cadastro
├── recover-password.html # Tela de recuperação de senha
├── home.html             # Tela principal/menu (dashboard)
├── provider-search.html  # Tela de busca na rede credenciada
├── search-results.html   # Tela de resultados da busca
├── cancel-appointment.html # Tela de desmarcar consulta
├── appointments.html     # Tela de meus agendamentos
└── README.md             # Este arquivo
```

## Como Executar Localmente

1.  Clone este repositório:
    ```bash
    git clone https://github.com/Incepta-Codes/promedica-app-mvp.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd promedica-app-mvp
    ```
3.  Abra o arquivo `index.html` (antigo `login.html`) em qualquer navegador web moderno.

**Credenciais de Teste (Mockadas no `js/login.js`):**
*   **CPF:** `12345678900`
*   **Senha:** `password123`

## Organização do Projeto e Processo

Este MVP foi desenvolvido seguindo práticas de versionamento com Git, utilizando branches por funcionalidade (`feature-XXX`) e Pull Requests para integração com a branch principal (`main`).

A documentação e o gerenciamento de tarefas (como Histórias de Usuário, Casos de Teste e Bugs) seriam idealmente realizados em uma ferramenta como o OpenProject, conforme as diretrizes da disciplina de Engenharia de Software. Devido ao escopo focado na implementação do frontend do MVP, essa documentação complementar (Casos de Teste) pode ser encontrada no arquivo `CASOS_DE_TESTE.md` neste repositório.

---

*Este README descreve o estado atual do MVP Promédica.*
