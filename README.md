# 💪 Sequence Training

> Aplicação web para criação, personalização e execução de treinos de calistenia diretamente pelo navegador.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa)](https://web.dev/progressive-web-apps/)
[![No Backend](https://img.shields.io/badge/Backend-None-success)](#-arquitetura)

---

## 🌐 Acesse

[**Sequence Training**](https://peedrinhoph.github.io/Sequence-Training/)

---

## 📱 Sobre o projeto

O **Sequence Training** é uma aplicação web leve e independente criada para facilitar a montagem, personalização e execução de treinos de calistenia.

A aplicação permite criar diferentes treinos, configurar seus exercícios e acompanhar a execução em tempo real.

O projeto foi desenvolvido com foco em:

* Simplicidade.
* Rapidez.
* Uso durante o treino.
* Responsividade.
* Funcionamento local.
* Privacidade dos dados.
* Instalação como PWA.

Tudo funciona **diretamente no navegador**, sem necessidade de conta, servidor ou banco de dados.

---

## ✨ Principais recursos

### 🏋️ Criação e montagem de treinos

* Exercícios pré-cadastrados.
* Exercícios personalizados.
* Configuração individual de séries.
* Configuração de repetições por série.
* Configuração do intervalo de descanso.
* Configuração de carga/peso por série.
* Edição dos exercícios.
* Exclusão dos exercícios.
* Reordenação dos exercícios.
* Drag & drop para organização.
* Controles para movimentação dos exercícios.
* Nome personalizado para cada treino.

### 📚 Múltiplos treinos

É possível manter diversos treinos salvos no navegador.

Cada treino pode ser:

* Criado.
* Visualizado.
* Editado.
* Atualizado.
* Duplicado.
* Excluído.
* Executado.

Ao carregar um treino existente, suas alterações podem ser salvas através da opção **Atualizar treino**, evitando a criação de cópias desnecessárias.

Exemplo:

```text
Meus treinos

┌─────────────────────────────┐
│ Push                        │
│ 5 exercícios                │
│                             │
│ [Visualizar] [Duplicar]  ×  │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Pernas                      │
│ 6 exercícios                │
│                             │
│ [Visualizar] [Duplicar]  ×  │
└─────────────────────────────┘

        + Novo treino
```

### ⚖️ Carga por série

Cada série pode possuir uma carga específica.

Exemplo:

```text
Barra fixa

Série 1 → 0 kg
Série 2 → 0 kg
Série 3 → 5 kg
Série 4 → 5 kg
```

O valor `0 kg` representa treino com peso corporal.

---

## ⏱️ Execução do treino

Durante o treino, a aplicação apresenta:

* Exercício atual.
* Série atual.
* Repetições previstas.
* Carga da série atual.
* Cronômetro de execução.
* Intervalo de descanso.
* Próximo exercício.
* Próxima série.
* Barra de progresso.
* Percentual de conclusão.

Exemplo:

```text
17% concluído
████░░░░░░░░░░░░░░░░
```

O progresso é calculado com base nas **repetições previstas e concluídas ao longo de todo o treino**.

---

## 🔄 Continuidade do treino

O estado da sessão é salvo automaticamente no navegador.

Se a página for atualizada ou fechada durante um treino, a aplicação pode identificar a sessão anterior e permitir que o usuário continue de onde parou.

São preservados dados como:

* Exercício atual.
* Série atual.
* Progresso.
* Tempo de execução.
* Tempo de descanso.
* Estado da sessão.

---

## ⏸️ Pausar e continuar

O treino pode ser pausado a qualquer momento.

Opções disponíveis:

* Continuar treino.
* Encerrar treino.

O tempo em pausa não é contabilizado no tempo efetivo do treino.

---

## 🔔 Descanso

Após a conclusão de uma série, o intervalo configurado é iniciado automaticamente.

Ao finalizar o descanso:

* A próxima série é liberada.
* O cronômetro de execução é iniciado.
* Um sinal sonoro pode ser reproduzido.
* O dispositivo pode vibrar quando suportado pelo navegador/dispositivo.

Também existem controles para pular o descanso quando necessário.

---

## 🔊 Sons

A aplicação utiliza a **Web Audio API** para reproduzir sinais sonoros durante o treino.

São utilizados diferentes sinais para eventos como:

* Início.
* Finalização do descanso.
* Finalização do treino.

Não são necessários arquivos de áudio externos.

---

## 📊 Tempo total de treino

A aplicação contabiliza o tempo efetivo do treino.

O cálculo considera:

* Tempo de execução.
* Tempo de descanso.

O período em pausa é excluído da contagem.

O tempo total é armazenado na sessão e também registrado no histórico após a conclusão do treino.

---

## 📜 Histórico

Treinos concluídos são registrados no histórico local.

O histórico armazena informações como:

* Nome do treino.
* Data e horário.
* Duração.
* Total de repetições.
* Resumo dos exercícios executados.

O histórico é independente dos treinos salvos.

Isso permite manter os treinos configurados mesmo depois de várias execuções.

---

## 💾 Persistência local

Os dados são armazenados utilizando a API:

```javascript
localStorage
```

Não existe banco de dados externo.

Entre os dados persistidos estão:

* Treinos salvos.
* Treino atualmente carregado.
* Rascunho do editor.
* Sessão de treino em andamento.
* Histórico.
* Tema selecionado.
* Backup automático.

Principais chaves utilizadas:

```text
calisthenics_workouts
calisthenics_workout
calisthenics_session
calisthenics_history
calisthenics_theme
calisthenics_backup
```

Ao fechar e abrir novamente a aplicação no mesmo navegador/origem, os dados podem ser restaurados automaticamente.

---

## 🛡️ Backup e proteção de dados

A aplicação possui um sistema de proteção contra operações que podem causar perda de dados.

Antes de operações destrutivas, um backup automático pode ser criado.

Entre essas operações estão:

* Criar um novo treino abandonando o atual.
* Limpar o treino.
* Importar treinos.
* Restaurar um backup.
* Outras operações que possam substituir dados existentes.

Também existe proteção contra alterações não salvas.

Quando existem modificações no treino atual que ainda não foram salvas, a aplicação alerta o usuário antes de permitir que o conteúdo seja substituído.

### 🔄 Restaurar backup

Um backup automático pode ser restaurado através da opção:

```text
Restaurar backup
```

O objetivo é reduzir o risco de perda acidental dos treinos durante alterações ou operações de substituição.

---

## 📤 Exportação e importação

Os treinos podem ser:

* Exportados para JSON.
* Importados posteriormente.

A exportação permite realizar backups manuais e transportar os treinos para outro navegador ou dispositivo.

O formato atual de exportação suporta **múltiplos treinos**.

A aplicação também mantém compatibilidade com formatos anteriores de exportação.

Arquivo gerado:

```text
treinos-calistenia.json
```

---

## 🌗 Tema

A aplicação possui suporte aos temas:

* Claro.
* Escuro.

A preferência selecionada é armazenada no navegador e restaurada automaticamente quando a aplicação é aberta novamente.

---

## 🧩 Exercícios disponíveis

A aplicação possui exercícios pré-configurados:

| Categoria | Exercícios                                     |
| --------- | ---------------------------------------------- |
| Empurrar  | Flexão, Flexão diamante, Paralelas             |
| Puxar     | Barra fixa, Barra supinada                     |
| Pernas    | Agachamento, Avanço                            |
| Abdômen   | Abdominal, Abdominal infra, Elevação de pernas |
| Isometria | Prancha                                        |

Também é possível adicionar **qualquer exercício personalizado**.

---

## 🖥️ Interface

A interface foi desenvolvida seguindo uma abordagem **mobile-first**, considerando principalmente o uso durante o treino.

<img width="750" height="1398" alt="image" src="https://github.com/user-attachments/assets/67e340a4-9684-4f7f-9982-181a9ec8436b" />

<img width="370" height="1568" alt="image" src="https://github.com/user-attachments/assets/054b9636-7126-4cd6-b2d9-99acd4fcc52a" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/aa2e31d1-c1b4-45e9-9124-8fb23d464f1e" />

<img width="509" height="1568" alt="image" src="https://github.com/user-attachments/assets/f6a123c3-a1e2-477d-8c53-07f575f610cb" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/e8a72701-6ba8-4a4c-9de0-29e5787f636a" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/6f012870-ebc8-4e5a-95fb-bcfd4160c2d8" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/8e1ebb96-be23-461e-a05a-6ae91f73334e" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/bded2ae3-2cc0-4bf5-b0e7-2b50e8baff40" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/8cf6689c-5f0b-49d5-a263-899385e8b68a" />

<img width="750" height="1334" alt="image" src="https://github.com/user-attachments/assets/b11fa374-1945-4b61-95f5-be8e44c0dc5a" />

<img width="750" height="1398" alt="image" src="https://github.com/user-attachments/assets/a4d369fb-6782-49fd-80c2-2182edfe2bdc" />

<img width="384" height="1568" alt="image" src="https://github.com/user-attachments/assets/1f41d04a-6fcf-4d53-9bae-bef7b2013028" />

---

## 📱 PWA

O Sequence Training possui estrutura de **Progressive Web App (PWA)**.

Isso permite instalar a aplicação no dispositivo e utilizá-la com uma experiência semelhante a um aplicativo.

Estrutura:

```text
Sequence-Training/
│
├── index.html
├── manifest.json
├── service-worker.js
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-512-maskable.png
└── README.md
```

O PWA utiliza:

* Web App Manifest.
* Service Worker.
* Ícones para instalação.
* Cache dos arquivos principais.
* HTTPS através do GitHub Pages.

> O funcionamento offline e a estratégia de cache continuam sendo aprimorados no roadmap.

---

## 🏗️ Arquitetura

O projeto foi desenvolvido propositalmente sem backend.

```text
┌─────────────────────────────┐
│          Browser            │
│                             │
│  ┌───────────────────────┐  │
│  │        HTML            │  │
│  │        CSS             │  │
│  │     JavaScript         │  │
│  └───────────┬───────────┘  │
│              │              │
│              ▼              │
│       localStorage          │
│              │              │
│              ▼              │
│       Dados locais          │
│                             │
└─────────────────────────────┘
```

### Tecnologias

* HTML5
* CSS3
* JavaScript Vanilla
* LocalStorage API
* File API
* Web Audio API
* Vibration API
* Service Worker
* Web App Manifest

Não são utilizados frameworks ou bibliotecas externas obrigatórias.

---

## 📁 Estrutura do projeto

A estrutura atual utiliza uma arquitetura propositalmente simples:

```text
Sequence-Training/
│
├── index.html
├── manifest.json
├── service-worker.js
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-512-maskable.png
└── README.md
```

O aplicativo permanece concentrado principalmente no `index.html`, enquanto os arquivos adicionais são utilizados pelo PWA.

Essa abordagem facilita:

* Desenvolvimento.
* Manutenção.
* Portabilidade.
* Hospedagem.
* Deploy no GitHub Pages.

---

## 🚀 Como executar

### Clonar o projeto

```bash
git clone https://github.com/peedrinhoph/Sequence-Training.git
```

Entrar no diretório:

```bash
cd Sequence-Training
```

### Executar

Como é uma aplicação estática, pode ser utilizado um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Também é possível abrir o `index.html` diretamente no navegador para utilização básica.

> Para testar corretamente recursos relacionados ao PWA, Service Worker e instalação, recomenda-se utilizar um servidor HTTP ou o GitHub Pages.

---

## 🌐 Deploy no GitHub Pages

O projeto pode ser publicado gratuitamente utilizando o GitHub Pages.

No repositório:

```text
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Deploy from a branch
```

Selecione:

```text
Branch: main
Folder: / (root)
```

Após o deploy, o aplicativo estará disponível através da URL fornecida pelo GitHub Pages.

---

## 🔐 Privacidade

O aplicativo não possui backend e não envia os dados dos treinos para servidores externos.

Os dados ficam armazenados localmente no navegador.

Isso significa que o projeto não necessita de:

* Cadastro.
* Login.
* Banco de dados.
* API.
* Servidor.

### ⚠️ Importante

Os dados armazenados no `localStorage` podem ser perdidos caso os dados do site sejam apagados pelo navegador.

Por isso, recomenda-se utilizar a função de **Exportar treinos** para manter uma cópia dos dados.

---

## 📦 Formato dos dados

A versão atual de exportação utiliza o formato:

```json
{
  "version": 4,
  "exportedAt": "2026-10-15T12:15:29.282Z",
  "workouts": [
    {
      "id": "fb426c52-f840-4abe-a581-80fa78872961",
      "name": "Quarta",
      "exercises": [
        {
          "id": "5d6a34d2-5ab9-47c1-a183-995c29fd110c",
          "name": "Abdominal",
          "sets": 2,
          "reps": 10,
          "rest": 15,
          "weights": [
            0,
            10
          ],
          "custom": false,
          "libraryId": "abdominal",
          "muscleGroup": "Abdômen"
        }
      ],
      "createdAt": "2026-09-15T20:32:47.853Z",
      "updatedAt": "2026-09-15T21:41:40.053Z",
      "lastUsedAt": "2026-10-15T12:13:16.898Z"
    }
  ],
  "exerciseLibrary": [
    {
      "id": "flexao",
      "name": "Flexão",
      "muscleGroup": "Peito",
      "custom": false
    },
    {
      "id": "flexao-diamante",
      "name": "Flexão diamante",
      "muscleGroup": "Tríceps",
      "custom": false
    },
    {
      "id": "barra-fixa",
      "name": "Barra fixa",
      "muscleGroup": "Costas",
      "custom": false
    },
    {
      "id": "barra-supinada",
      "name": "Barra supinada",
      "muscleGroup": "Costas / Bíceps",
      "custom": false
    },
    {
      "id": "paralelas",
      "name": "Paralelas",
      "muscleGroup": "Peito / Tríceps",
      "custom": false
    },
    {
      "id": "agachamento",
      "name": "Agachamento",
      "muscleGroup": "Pernas",
      "custom": false
    },
    {
      "id": "avanco",
      "name": "Avanço",
      "muscleGroup": "Pernas / Glúteos",
      "custom": false
    },
    {
      "id": "abdominal",
      "name": "Abdominal",
      "muscleGroup": "Abdômen",
      "custom": false
    },
    {
      "id": "abdominal-infra",
      "name": "Abdominal infra",
      "muscleGroup": "Abdômen",
      "custom": false
    },
    {
      "id": "elevacao-pernas",
      "name": "Elevação de pernas",
      "muscleGroup": "Abdômen",
      "custom": false
    },
    {
      "id": "prancha",
      "name": "Prancha",
      "muscleGroup": "Abdômen",
      "custom": false
    }
  ]
}
```

O formato suporta:

* Múltiplos treinos.
* Identificação individual dos treinos.
* Exercícios personalizados.
* Séries.
* Repetições.
* Intervalos.
* Carga individual por série.
* Data de criação.
* Data de atualização.

A aplicação mantém compatibilidade com formatos anteriores de exportação.

---

## 🔄 Fluxo do treino

```text
┌──────────────────┐
│ Criar treino     │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Adicionar        │
│ exercícios       │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Configurar       │
│ séries/reps      │
│ carga/descanso   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Organizar        │
│ exercícios       │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Salvar treino    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Iniciar treino   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Executar série   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Série concluída  │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Descanso         │
└────────┬─────────┘
         ↓
    Próxima série
         │
         └──────────────┐
                        ↓
              Próximo exercício
                        │
                        ↓
                ┌──────────────┐
                │ 100%         │
                │ concluído    │
                └──────────────┘
                        ↓
                ┌──────────────┐
                │ Histórico    │
                └──────────────┘
```

---

# 🗺️ Roadmap

A evolução do Sequence Training será feita priorizando primeiro **estabilidade e confiabilidade**, depois **experiência de treino**, **acompanhamento de evolução** e, por último, recursos mais avançados.

## 🟢 Fase 1 — Consolidar a base

* [x] Persistência dos treinos no `localStorage`
* [x] Persistência do histórico
* [x] Persistência do tema
* [x] Persistência da sessão em andamento
* [x] Backup automático
* [x] Restauração de backup
* [x] Proteção contra alterações não salvas
* [x] Testes completos de persistência
* [x] Versionamento dos dados e sistema de migração
* [x] Melhorar gerenciamento de versões do Service Worker/cache

## 🟢 Fase 2 — Melhorar a criação dos treinos

* [x] Suporte a múltiplos treinos
* [x] Criar novo treino
* [x] Visualizar treino salvo
* [x] Atualizar treino existente
* [x] Duplicar treino
* [x] Excluir treino
* [x] Exercícios personalizados
* [x] Carga individual por série
* [x] Melhorar interface de **Meus treinos**
* [x] Ordenar treinos por nome ou último uso
* [x] Mostrar última execução
* [x] Criar biblioteca de exercícios
* [x] Categorizar exercícios por grupo muscular
* [x] Melhorar cadastro de exercícios personalizados
* [x] Melhorar o acesso a opções de ação com dropdown
* [x] Melhorar a lista de exercícios da biblioteca

## 🟡 Fase 3 — Evoluir a execução do treino

* [x] Controle de séries
* [x] Controle de repetições
* [x] Cronômetro de execução
* [x] Cronômetro de descanso
* [x] Pausar e continuar
* [x] Pular série
* [x] Pular descanso
* [x] Pular exercício
* [x] Indicação do próximo exercício
* [x] Sinais sonoros
* [x] Suporte à vibração
* [x] Controles de `+15s` e `-15s` no descanso
* [x] Melhorar indicação da próxima série/exercício

## 🟡 Fase 4 — Evoluir o histórico

* [x] Registro de treinos concluídos
* [x] Registro da duração
* [x] Registro de repetições
* [x] Resumo dos exercícios
* [x] Histórico detalhado por exercício
* [x] Histórico de cargas e repetições
* [x] Gráficos de evolução
* [x] Frequência semanal de treinos
* [x] Volume total de treino
* [x] Tempo total treinado
* [x] Recordes pessoais (PR)
* [x] Notificação de novo recorde

## 🟠 Fase 5 — Progressão

* [ ] Comparar desempenho com o treino anterior
* [ ] Exibir desempenho anterior durante o treino
* [ ] Sugestão de progressão
* [ ] Criar metas de repetições
* [ ] Criar metas de carga
* [ ] Indicador visual de progresso
* [ ] Avaliação de dificuldade/RPE

## 🔵 Fase 6 — Dashboard

* [ ] Criar dashboard inicial
* [ ] Resumo dos treinos da semana
* [ ] Total de séries
* [ ] Total de repetições
* [ ] Tempo total treinado
* [ ] Evolução dos principais exercícios
* [ ] Resumo de recordes pessoais
* [ ] Último treino realizado
* [ ] Próximo treino sugerido

## 🔵 Fase 7 — Recursos avançados

* [ ] Suporte a circuitos
* [ ] Timer para HIIT
* [ ] Timer EMOM
* [ ] Timer AMRAP
* [ ] Suporte a exercícios isométricos
* [ ] Suporte a técnicas avançadas de treino
* [ ] Configuração de tempo de execução
* [ ] Tempo sob tensão

## ⚫ Fase 8 — Sincronização

> Futuramente, caso o projeto evolua para uma arquitetura com backend.

* [ ] Sistema de usuários/login
* [ ] Banco de dados
* [ ] Sincronização entre dispositivos
* [ ] Backup na nuvem
* [ ] Recuperação de dados em outro dispositivo

---

## 🎯 Prioridades atuais

A ordem planejada para as próximas evoluções é:

```text
1. Estabilidade e persistência
        ↓
2. Backup e recuperação
        ↓
3. Experiência durante a execução
        ↓
4. Histórico e evolução
        ↓
5. Progressão
        ↓
6. Dashboard
        ↓
7. Recursos avançados
        ↓
8. Sincronização em nuvem
```

### Objetivo

> Evoluir o Sequence Training de um simples organizador de treinos para um **diário de calistenia completo**, mantendo a proposta de ser rápido, simples, funcional e acessível tanto no celular quanto no desktop.

---

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

```bash
# Faça um fork do projeto

# Clone
git clone https://github.com/peedrinhoph/Sequence-Training.git

# Crie uma branch
git checkout -b feature/minha-feature

# Faça suas alterações

# Commit
git commit -m "feat: adiciona minha feature"

# Push
git push origin feature/minha-feature
```

Depois, abra um **Pull Request**.

---

## 📄 Licença

Este projeto está disponível sob a licença definida no repositório.

---

## 👨‍💻 Autor

**Pedro Henrique**

Projeto desenvolvido com foco em uma experiência simples, rápida e prática para criação e execução de treinos de calistenia.

---

<p align="center">
  Desenvolvido com HTML, CSS e JavaScript ❤️
</p>
