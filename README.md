# 💪 Sequence Training

> Aplicação web para criação, personalização e execução de treinos de calistenia diretamente pelo navegador.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![No Backend](https://img.shields.io/badge/Backend-None-success)](#-arquitetura)

---

## 📱 Sobre o projeto

O **Sequence Training** é uma aplicação web leve e independente criada para facilitar a montagem e execução de treinos de calistenia.

A proposta é permitir que o usuário monte seu próprio treino, definindo:

* Exercícios.
* Séries.
* Repetições.
* Intervalos de descanso.
* Ordem dos exercícios.

Durante a execução, a aplicação controla automaticamente as séries, intervalos e progresso do treino.

Tudo funciona **diretamente no navegador**, sem necessidade de conta, servidor ou banco de dados.

---

## ✨ Principais recursos

### 🏋️ Montagem do treino

* Exercícios pré-cadastrados.
* Exercícios personalizados.
* Configuração individual de séries, repetições e descanso.
* Edição dos exercícios adicionados.
* Exclusão de exercícios.
* Reordenação dos exercícios.
* Drag & drop para organização.
* Nome personalizado para cada treino.

### ⏱️ Execução

Durante o treino, a aplicação apresenta:

* Exercício atual.
* Série atual.
* Repetições.
* Cronômetro de execução.
* Intervalo de descanso.
* Próximo exercício.
* Barra de progresso.
* Percentual de conclusão.

Exemplo:

```text
17% concluído
████░░░░░░░░░░░░░░░░
```

O progresso é calculado com base nas **repetições previstas e concluídas** ao longo de todo o treino.

### 🔄 Continuidade do treino

O estado do treino é salvo automaticamente no navegador.

Se a página for atualizada ou fechada durante um treino, a aplicação pode identificar a sessão anterior e permitir que o usuário continue de onde parou.

### ⏸️ Pausar e continuar

O treino pode ser pausado a qualquer momento.

Opções disponíveis:

* Continuar treino.
* Encerrar treino.

### 🔔 Descanso

Após a conclusão de uma série, o intervalo configurado é iniciado automaticamente.

Ao terminar o descanso:

* A próxima série é liberada.
* O cronômetro de execução é iniciado.
* O dispositivo pode vibrar.
* Um sinal sonoro pode ser reproduzido.

### 💾 Persistência local

Os dados são armazenados utilizando a API:

```javascript
localStorage
```

Não existe banco de dados externo.

### 📤 Exportação e importação

Os treinos podem ser:

* Exportados para JSON.
* Importados posteriormente.

Isso permite realizar backups ou transferir um treino para outro dispositivo.

---

## 🧩 Exercícios disponíveis

A aplicação possui alguns exercícios pré-configurados:

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

### Tela de montagem

Permite configurar e organizar todos os exercícios antes de iniciar.

### Tela de execução

As informações mais importantes ficam em destaque para facilitar a visualização durante o exercício.

### Tela de descanso

Apresenta um cronômetro grande para indicar o tempo restante até a próxima série.

> 📸 **Screenshots**

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

Não são utilizados frameworks ou bibliotecas externas obrigatórias.

---

## 📁 Estrutura do projeto

A estrutura atual é propositalmente simples:

```text
Sequence-Training/
│
├── index.html
└── README.md
```

Todo o aplicativo está concentrado no `index.html`.

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

Como é uma aplicação estática, basta abrir:

```text
index.html
```

no navegador.

Também é possível utilizar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

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

Por isso, recomenda-se utilizar a função de **Exportar treino** para manter um backup.

---

## 📦 Formato dos dados

Os treinos podem ser representados em JSON.

Exemplo:

```json
{
  "version": 2,
  "exportedAt": "2026-09-07T20:07:47.480Z",
  "workout": {
    "name": "Meu treino",
    "exercises": [
      {
        "id": "a485fad9-0ddb-4d34-b924-251b3ec5acba",
        "name": "Flexão",
        "sets": 3,
        "reps": 12,
        "rest": 15,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      },
      {
        "id": "8f25664f-36a7-4940-ac55-557b3a7a78f3",
        "name": "Barra fixa",
        "sets": 3,
        "reps": 10,
        "rest": 15,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      },
      {
        "id": "35f06977-aea0-40f5-84f6-7db4060d4480",
        "name": "Agachamento",
        "sets": 3,
        "reps": 10,
        "rest": 15,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      },
      {
        "id": "8d9a468c-45ec-43c9-97e2-1279abae26d6",
        "name": "Abdominal",
        "sets": 3,
        "reps": 25,
        "rest": 30,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      },
      {
        "id": "36afb0d2-bf44-4a78-be8d-b8eaf7a56819",
        "name": "Abdominal infra",
        "sets": 3,
        "reps": 10,
        "rest": 30,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      },
      {
        "id": "4a82a9e4-bf95-4d3f-bda0-3713560c71c2",
        "name": "Abdominal Sentado",
        "sets": 3,
        "reps": 12,
        "rest": 15,
        "weights": [
          0,
          0,
          0
        ],
        "custom": true
      },
      {
        "id": "7c11cff7-03ae-407a-ad15-d8297c2f7053",
        "name": "Prancha",
        "sets": 3,
        "reps": 1,
        "rest": 30,
        "weights": [
          0,
          0,
          0
        ],
        "custom": false
      }
    ]
  }
}
```

Esse formato também facilita futuras integrações ou migrações para uma API.

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
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Organizar        │
│ exercícios       │
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
```

---

## 🎯 Roadmap

Possíveis evoluções para versões futuras:

* [ ] Histórico de treinos.
* [ ] Estatísticas de desempenho.
* [ ] Gráficos de evolução.
* [ ] Contagem de repetições acumuladas.
* [ ] Tempo total de treino.
* [ ] Calendário de treinos.
* [ ] Metas de treinamento.
* [ ] PWA instalável.
* [ ] Funcionamento offline.
* [ ] Backup automático.
* [ ] Sincronização entre dispositivos.
* [ ] Temas claro e escuro.
* [ ] Biblioteca maior de exercícios.
* [ ] Animações/demonstrações dos exercícios.
* [ ] Sistema de usuários e sincronização em nuvem.

---

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

```bash
# Faça um fork do projeto

# Clone o seu fork
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
