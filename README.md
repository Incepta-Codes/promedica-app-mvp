# Promédica Saúde - MVP App de Agendamento

Este repositório contém o código-fonte do frontend para o MVP (Minimum Viable Product) do aplicativo de agendamento de consultas médicas "Promédica". Este projeto foi desenvolvido como parte da disciplina de Engenharia de Software, com foco na implementação das interfaces de usuário e fluxos principais baseados em protótipos e Histórias de Usuário.

## Visão Geral do Projeto

O objetivo deste MVP é demonstrar um conjunto navegável de telas que representam as funcionalidades essenciais para o usuário do aplicativo Promédica. O desenvolvimento priorizou a criação de uma experiência de usuário intuitiva no frontend, utilizando dados simulados e lógica mockada para as interações que normalmente dependeriam de um backend.

## Funcionalidades e Telas Implementadas no MVP

O frontend atual do MVP inclui as seguintes telas e fluxos funcionais:

1.  **Tela de Login (`login.html`):**
    *   Autenticação com credenciais fixas (CPF/Senha).
    *   Opção "Lembrar-me" com gerenciamento de sessão via `localStorage`.
    *   Links para as telas de "Cadastro" e "Recuperar Senha".
    *   *Relacionado à HU-001 e HU-002.*

2.  **Tela de Cadastro de Acesso (`signup.html`):**
    *   Formulário para entrada de CPF, data de nascimento e definição de senha (com campo de confirmação).
    *   Validações básicas de preenchimento e simulação do processo de cadastro.

3.  **Tela de Recuperação de Senha (`recover-password.html`):**
    *   Formulário para entrada de CPF e data de nascimento.
    *   Opções simuladas para solicitar redefinição de senha por Email ou SMS.
    *   *Atende ao requisito de recuperação de senha da HU-001.*

4.  **Menu Principal / Dashboard (`home.html`):**
    *   Tela principal exibida após o login bem-sucedido.
    *   Lista de opções de navegação para as principais seções do aplicativo (links para "Meus Agendamentos", "Desmarcar Consulta", "Rede Credenciada", etc.).
    *   Funcionalidade de "Sair" (Logout) integrada ao menu.
    *   *Serve como hub para diversas HUs e contribui para a HU-009 (Interface).*

5.  **Busca na Rede Credenciada (`provider-search.html`):**
    *   Exibição de informações fixas do plano do usuário.
    *   Formulário com filtros `<select>` (Estado, Cidade, Tipo de Serviço, Especialidade) com opções mockadas.
    *   Simulação de pesquisa ao clicar no botão "Pesquisar", levando à tela de resultados.

6.  **Resultado da Busca (`search-results.html`):**
    *   Exibição de uma lista mockada de prestadores de serviço (clínicas/profissionais).
    *   Detalhes mockados por resultado: nome, data/horário exemplo, serviço, profissional, endereço, distância.
    *   Opções simuladas por resultado: "Ligar", "Ver mapa", "Agendar".
    *   Modal de **Confirmação de Agendamento** que aparece ao clicar em "Agendar", com opções "Confirmar" e "Cancelar" (lógica mockada).
    *   *Relacionado à HU-006 (Marcação de Consulta) ao iniciar o fluxo.*

7.  **Desmarcar Consulta (`cancel-appointment.html`):**
    *   Exibição de uma lista mockada de consultas agendadas.
    *   Botão "Desmarcar" para cada consulta.
    *   Modal de **Confirmação de Desmarcação** que aparece ao clicar em "Desmarcar". Se confirmado, o item é removido visualmente da lista e uma mensagem de sucesso é exibida (mockado).
    *   *Atende diretamente à HU-007 (Desmarcar Consulta).*

8.  **Meus Agendamentos (`appointments.html`):**
    *   Exibição de uma lista mockada de consultas agendadas.
    *   Detalhes das consultas com **fonte aumentada** para melhor legibilidade.
    *   Botão "Copiar código barras" que simula a cópia de um código para a área de transferência.
    *   *Atende diretamente à HU-004 (Aumentar Fonte Padrão).*

## Tecnologias Utilizadas (Frontend MVP)

*   HTML5
*   CSS3
*   JavaScript (Vanilla JS)
*   FontAwesome (para ícones)

## Estrutura de Pastas (Frontend)

```
frontend/
├── css/
│   └── style.css
├── js/
│   ├── login.js
│   ├── signup.js
│   ├── recover-password.js
│   ├── home.js
│   ├── provider-search.js
│   ├── search-results.js
│   ├── cancel-appointment.js
│   └── appointments.js
├── login.html
├── signup.html
├── recover-password.html
├── home.html
├── provider-search.html
├── search-results.html
├── cancel-appointment.html
└── appointments.html
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
3.  Abra o arquivo `frontend/login.html` em um navegador web moderno.

**Credenciais de Teste (Mockadas):**
*   **CPF:** `12345678900`
*   **Senha:** `password123`

## Gerenciamento de Projeto e Práticas de Desenvolvimento

Conforme o guia da disciplina, o desenvolvimento ideal envolveria:

*   **OpenProject:** Para cadastro detalhado de Histórias de Usuário (HUs), tarefas, prazos, responsáveis, e acompanhamento visual em boards (Kanban), além do registro formal de Casos de Teste e Bugs.
*   **GitHub:**
    *   Repositório público.
    *   Desenvolvimento em branches separadas por funcionalidade (`feature-XXX`).
    *   Uso de Pull Requests (PRs) para revisão e merge do código na branch principal (`main`), com associação às tarefas no OpenProject.

## Histórias de Usuário de Referência (Escopo Completo do Produto)

As 9 Histórias de Usuário, agrupadas em 5 Épicos, que nortearam o design e o escopo do produto completo são:
*   **EP-001:** Login (HU-001, HU-002, HU-003)
*   **EP-002:** Acessibilidade Visual (HU-004, HU-005)
*   **EP-003:** Gerenciamento de Consultas (HU-006, HU-007)
*   **EP-004:** Gestão Financeira (HU-008)
*   **EP-005:** Experiência Geral do Usuário (HU-009)

O MVP frontend implementado atende diretamente ou parcialmente a HU-001, HU-002 (via implementação de colega), HU-004, HU-007, e estabelece a base para HU-006 e HU-009.

---
*Este README reflete o estado do frontend do MVP até a conclusão das telas prototipadas.*
