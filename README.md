💪 Sequence Training
Crie, personalize, execute e acompanhe seus treinos de calistenia em uma aplicação web rápida, responsiva e instalável.
<p align="center">
<a href="https://peedrinhoph.github.io/Sequence-Training/">
<img src="https://img.shields.io/badge/ACESSAR%20APLICAÇÃO-84CC16?style=for-the-badge&logo=githubpages&logoColor=111111" alt="Acessar Sequence Training">
</a>
</p>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa" alt="PWA">
<img src="https://img.shields.io/badge/Backend-Not%20Required-22C55E" alt="Sem backend">
<img src="https://img.shields.io/badge/License-See%20Repository-64748B" alt="Licença">
</p>

## 📌 Sobre o projeto
O **Sequence Training** é uma aplicação web desenvolvida para facilitar a organização e a execução de treinos de calistenia.

O projeto reúne a criação de rotinas personalizadas, o acompanhamento de séries e repetições, o controle de descanso e o registro do histórico de treinos em uma única aplicação.

A proposta é oferecer uma ferramenta prática para o dia a dia, sem exigir cadastro, login ou conexão com um servidor próprio.

### Principais características

- 🏋️ Criação e personalização de treinos.
- 📚 Gerenciamento de múltiplas rotinas.
- ⚖️ Configuração de carga individual por série.
- ⏱️ Cronômetros de execução e descanso.
- ⏸️ Pausa e retomada de sessões.
- 📊 Acompanhamento do progresso do treino.
- 📜 Histórico de sessões concluídas.
- 📈 Estatísticas e evolução do desempenho.
- 💾 Salvamento local e recuperação de dados.
- 📤 Importação e exportação de treinos.
- 🌗 Temas claro e escuro.
- 📱 Instalação como Progressive Web App (PWA).

A aplicação é publicada pelo GitHub Pages e pode ser acessada diretamente pelo navegador, sem instalação obrigatória.

## ✨ Funcionalidades
### 🏋️ 1. Criação e personalização de treinos
Monte rotinas de acordo com seus objetivos e organize os exercícios na ordem desejada.

- Criação de múltiplos treinos.
- Nome personalizado para cada rotina.
- Biblioteca de exercícios pré-cadastrados.
- Cadastro de exercícios personalizados.
- Organização por grupos musculares.
- Configuração de séries e repetições.
- Intervalo de descanso configurável.
- Carga individual para cada série.
- Edição e exclusão de exercícios.
- Reordenação por arrastar e soltar (drag and drop).
- Controles alternativos para movimentar os exercícios.
- Duplicação, atualização e exclusão de treinos salvos.
- Marcação de treinos favoritos.
- Ordenação dos treinos e consulta ao último uso.
- O editor também oferece mecanismos para proteger alterações ainda não salvas, reduzindo o risco de perder modificações acidentalmente.

### 📚 2. Biblioteca de exercícios
A aplicação possui exercícios pré-configurados, organizados de acordo com os grupos musculares trabalhados.

| Categoria | Exercícios                                     |
| --------- | ---------------------------------------------- |
| Empurrar  | Flexão, Flexão diamante, Paralelas             |
| Puxar     | Barra fixa, Barra supinada                     |
| Pernas    | Agachamento, Avanço                            |
| Abdômen   | Abdominal, Abdominal infra, Elevação de pernas |
| Isometria | Prancha                                        |

A biblioteca pode ser complementada com exercícios personalizados, permitindo adaptar as rotinas a diferentes níveis e preferências.

### ⚖️ 3. Carga individual por série
Cada série pode ter uma carga diferente, permitindo registrar a progressão de exercícios com peso adicional.

Exemplo:


```text
Barra fixa

Série 1: peso corporal
Série 2: peso corporal
Série 3: +5 kg
Série 4: +5 kg
```
O valor zero representa a execução com peso corporal, sem carga externa adicional.

### ⏱️ 4. Execução do treino em tempo real
Durante a sessão, a interface apresenta as informações necessárias para acompanhar o treino sem precisar voltar ao editor.

- Exercício atual.
- Série atual e total de séries.
- Repetições previstas.
- Carga da série.
- Cronômetro de execução.
- Cronômetro de descanso.
- Próxima série ou exercício.
- Barra e percentual de progresso.
- Tempo total da sessão.
- Controles para avançar ou interromper a execução.
- A interface prioriza a leitura rápida das informações, especialmente em telas menores.

### ⏸️ 5. Controle da sessão
A execução pode ser pausada e retomada conforme a necessidade.

Os controles incluem:

- Pausar e continuar o treino.
- Pular uma série.
- Pular um exercício.
- Pular o descanso.
- Ajustar o descanso com incrementos de +15s e -15s.
- Consultar a próxima etapa do treino.
- Encerrar a sessão.
- O tempo em pausa não é contabilizado como tempo efetivo de treino.

### 🔔 6. Descanso, sons e vibração
O intervalo configurado é utilizado entre as séries.

A aplicação também oferece sinais sonoros para eventos da sessão e suporte à vibração em dispositivos e navegadores compatíveis.

Os sons são gerados pela Web Audio API, sem depender de arquivos de áudio externos.

A vibração utiliza a Vibration API quando disponível.

### 🔄 7. Recuperação da sessão
O estado de uma sessão em andamento é persistido para facilitar a retomada após uma atualização ou reabertura da página.

Isso permite recuperar informações como o exercício atual, a série, o progresso e os dados da sessão armazenados.

A recuperação depende da disponibilidade e integridade dos dados locais no navegador.

### 📜 8. Histórico detalhado
Ao concluir um treino, a aplicação registra a sessão no histórico.

Entre as informações disponíveis estão:

- Nome do treino.
- Data e horário da conclusão.
- Duração.
- Exercícios realizados.
- Total de repetições.
- Séries concluídas ou puladas.
- Cargas utilizadas.
- Detalhes de execução por exercício.
- O histórico permanece separado da configuração dos treinos. Assim, editar uma rotina não exige apagar os registros de sessões anteriores.

### 📈 9. Estatísticas e progressão
A aplicação reúne informações sobre o desempenho acumulado para facilitar o acompanhamento da evolução.

Os recursos incluem:

- Frequência semanal de treinos.
- Metas semanais e acompanhamento de consistência.
- Tempo total treinado.
- Volume de treino quando há carga externa registrada.
- Histórico de cargas e repetições.
- Gráficos de evolução.
- Recordes pessoais (personal records ou PRs).
- Notificações de novos recordes.
- Comparação com desempenhos anteriores.
- Sugestões de progressão após sessões elegíveis.
Essas informações ajudam a visualizar tendências e identificar oportunidades para aumentar gradualmente o desafio.

### 💾 10. Persistência e proteção de dados
Os dados são armazenados no próprio navegador.

O IndexedDB é utilizado como armazenamento principal, com localStorage como alternativa quando o IndexedDB não está disponível. O sistema também contempla a migração de dados legados.

A persistência abrange, entre outros elementos:

- Treinos salvos.
- Biblioteca de exercícios.
- Histórico de sessões.
- Backups.
- Metadados de migração.
- A aplicação possui mecanismos de proteção para operações que podem substituir dados existentes, além de recursos para recuperação de backups.

### 📤 11. Exportação e importação
Os dados podem ser exportados para JSON, facilitando a criação de cópias de segurança e a transferência entre ambientes.

Os recursos de gerenciamento de dados incluem:

- Exportação de treinos.
- Importação de arquivos JSON compatíveis.
- Suporte a múltiplos treinos.
- Compatibilidade com formatos anteriores.
- Backup automático.
- Restauração de backups disponíveis.
  
Recomendação: mantenha exportações periódicas dos seus treinos. O armazenamento local não substitui um backup independente.

## 🌗 12. Tema claro e escuro
A aplicação oferece dois temas:

- ☀️ Claro.
- 🌙 Escuro.
  
A preferência visual é persistida no navegador para que a interface mantenha o tema escolhido nas próximas visitas.

## 🧩 Tecnologias utilizadas

| Tecnologia | Aplicação no projeto                                      |
| ---------  | --------------------------------------------------------- |
|HTML5       |	Estrutura e conteúdo da interface|
|CSS3        |	Layout, responsividade, componentes e temas|
|JavaScript  | Vanilla	Lógica, interações e gerenciamento das sessões|
|IndexedDB   |	Persistência principal dos dados|
|LocalStorage| API	Persistência alternativa e compatibilidade com dados legados|
|File API    |	Leitura e manipulação de arquivos importados|
|Web Audio API|	Geração de sinais sonoros|
|Vibration API|	Vibração em dispositivos compatíveis|
|Web App Manifest|	Configuração da instalação como aplicativo|
|Service Worker|	Cache, atualização e suporte à experiência PWA|
|GitHub Pages|	Hospedagem da aplicação|

O projeto não depende de frameworks JavaScript ou bibliotecas externas obrigatórias para sua execução.

## 📱 Progressive Web App (PWA)
O Sequence Training possui estrutura de Progressive Web App, permitindo sua instalação em dispositivos compatíveis.

A implementação utiliza:

- Web App Manifest.
- Service Worker.
- Ícones de instalação.
- Cache de recursos.
- HTTPS por meio do GitHub Pages.
- Verificação de atualizações do Service Worker.
- Quando suportada pelo navegador, a instalação permite acessar a aplicação de maneira semelhante a um aplicativo convencional.

A disponibilidade de instalação, notificações, vibração e recursos offline varia conforme o navegador e o dispositivo. A presença de um Service Worker não garante que todas as funcionalidades estejam disponíveis offline.

## 🏗️ Arquitetura
A aplicação foi concebida sem backend próprio, utilizando recursos nativos da plataforma web.


```text
┌───────────────────────────────────────┐
│                Browser                │
│                                       │
│  ┌─────────────────────────────────┐  │
│  │          index.html             │  │
│  │                                 │  │
│  │   HTML + CSS + JavaScript       │  │
│  └────────────────┬────────────────┘  │
│                   │                   │
│          ┌────────┴────────┐          │
│          │                 │          │
│          ▼                 ▼          │
│      IndexedDB         localStorage   │
│      Principal          Alternativo   │
│          │                 │          │
│          └────────┬────────┘          │
│                   ▼                   │
│       Treinos, histórico,             │
│       biblioteca e backups            │
│                                       │
│             Service Worker            │
│          Cache e atualizações         │
└───────────────────────────────────────┘
```
Características da arquitetura
- Não exige servidor de aplicação.
- Não exige cadastro ou autenticação.
- Não depende de banco de dados remoto.
- Armazena os dados no ambiente local do navegador.
- Mantém o código principal concentrado no index.html.
- Utiliza arquivos complementares para configuração do PWA.
- Privacidade e limitações

A ausência de backend próprio significa que a aplicação não oferece sincronização automática entre dispositivos.

Os dados locais também podem ser perdidos se o armazenamento do site for apagado ou se ocorrer uma falha no dispositivo. Por isso, é importante exportar backups regularmente.

## 📁 Estrutura do projeto

```text
Sequence-Training/
│
├── index.html
├── manifest.json
├── service-worker.js
├── favicon.ico
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-512-maskable.png
│
└── README.md
```
O index.html concentra a maior parte da interface, dos estilos e da lógica da aplicação.

Os arquivos adicionais dão suporte à identidade visual, à instalação e ao funcionamento do PWA.

## 🔐 Privacidade e segurança dos dados
O Sequence Training não necessita de uma conta para funcionar e não possui backend próprio para armazenar os dados dos usuários.

As informações dos treinos permanecem no armazenamento local do navegador.

Isso oferece algumas vantagens:

- Uso sem cadastro.
- Maior autonomia sobre os dados.
- Funcionamento independente de uma API própria.
- Ausência de sincronização obrigatória com a nuvem.
- Entretanto, o armazenamento local não é uma garantia de backup permanente.

Boas práticas
- Exporte seus treinos periodicamente.
- Guarde os arquivos JSON em um local seguro.
- Evite apagar os dados do site sem realizar uma exportação.
- Mantenha cópias dos treinos importantes em outro dispositivo ou serviço de armazenamento.
  
## 🗺️ Roadmap
O desenvolvimento do Sequence Training segue uma abordagem incremental: primeiro consolidar a confiabilidade do aplicativo, depois ampliar os recursos de acompanhamento e progressão.

### 🟢 Fase 1 — Persistência e confiabilidade
- [x] Persistência dos treinos.
- [x] Persistência do histórico.
- [x] Persistência do tema.
- [x] Recuperação da sessão em andamento.
- [x] Backup e restauração.
- [x] Proteção contra alterações não salvas.
- [x] Migração de dados legados.
- [x] Gerenciamento de versões do Service Worker.
### 🟢 Fase 2 — Criação e organização
- [x] Múltiplos treinos.
- [x] Criar, visualizar, atualizar e excluir treinos.
- [x] Duplicar treinos.
- [x] Exercícios personalizados.
- [x] Biblioteca por grupo muscular.
- [x] Carga individual por série.
- [x] Reordenação dos exercícios.
- [x] Treinos favoritos.
- [x] Ordenação e informações de último uso.
## 🟢 Fase 3 — Execução
- [x] Controle de séries e repetições.
- [x] Cronômetros de execução e descanso.
- [x] Pausar e continuar.
- [x] Pular séries e exercícios.
- [x] Pular descanso.
- [x] Ajustar o descanso em intervalos de 15 segundos.
- [x] Indicação da próxima etapa.
- [x] Sinais sonoros.
- [x] Suporte à vibração em dispositivos compatíveis.
### 🟢 Fase 4 — Histórico e estatísticas
- [x] Registro de treinos concluídos.
- [x] Histórico detalhado por exercício.
- [x] Registro de cargas e repetições.
- [x] Frequência semanal.
- [x] Tempo total treinado.
- [x] Volume de treino.
- [x] Gráficos de evolução.
- [x] Recordes pessoais.
- [x] Notificação de novos recordes.
### 🟡 Fase 5 — Progressão avançada
- [x] Consulta ao desempenho anterior.
- [x] Sugestões de progressão em situações elegíveis.
- [ ] Ampliar as opções de metas de repetições.
- [ ] Ampliar as opções de metas de carga.
- [ ] Indicadores adicionais de evolução.
- [ ] Avaliação de dificuldade e RPE.
### 🔵 Fase 6 — Dashboard
- [ ] Consolidar um dashboard inicial.
- [ ] Resumo semanal dos treinos.
- [x] Visão consolidada de séries e repetições.
- [x] Evolução dos principais exercícios.
- [x] Resumo de recordes pessoais.
- [x] Último treino realizado.
- [x] Sugestões de próximos treinos.
### 🔵 Fase 7 — Recursos avançados
- [ ] Suporte a circuitos.
- [ ] Timer para HIIT.
- [ ] Timer EMOM.
- [ ] Timer AMRAP.
- [ ] Expansão dos exercícios isométricos.
- [ ] Técnicas avançadas de treino.
- [ ] Configuração de tempo de execução.
- [ ] Tempo sob tensão.
### ⚫ Fase 8 — Sincronização entre dispositivos
Esta fase depende de uma possível evolução para uma arquitetura com backend.
- [ ] Sistema de usuários e login.
- [ ] Banco de dados remoto.
- [ ] Sincronização entre dispositivos.
- [ ] Backup na nuvem.
- [ ] Recuperação de dados em outros dispositivos.
  
O roadmap representa o planejamento do projeto e pode ser atualizado conforme as prioridades de desenvolvimento.

## 🖥️ Demonstração da interface
As imagens abaixo são capturas reais da aplicação, preservadas a partir dos arquivos já utilizados no README do projeto.

A interface foi desenvolvida com abordagem mobile-first, priorizando legibilidade, controles acessíveis e uso prático durante os exercícios.

<img width="750" height="1398" alt="Interface do Sequence Training" src="https://github.com/user-attachments/assets/67e340a4-9684-4f7f-9982-181a9ec8436b" />

<img width="370" height="1568" alt="Interface mobile do Sequence Training" src="https://github.com/user-attachments/assets/054b9636-7126-4cd6-b2d9-99acd4fcc52a" />

<img width="750" height="1334" alt="Tela da aplicação" src="https://github.com/user-attachments/assets/aa2e31d1-c1b4-45e9-9124-8fb23d464f1e" />

<img width="509" height="1568" alt="Tela mobile da aplicação" src="https://github.com/user-attachments/assets/f6a123c3-a1e2-477d-8c53-07f575f610cb" />

<img width="750" height="1334" alt="Visualização de treino" src="https://github.com/user-attachments/assets/e8a72701-6ba8-4a4c-9de0-29e5787f636a" />

<img width="750" height="1334" alt="Tela de execução do treino" src="https://github.com/user-attachments/assets/6f012870-ebc8-4e5a-95fb-bcfd4160c2d8" />

<img width="750" height="1334" alt="Acompanhamento da sessão" src="https://github.com/user-attachments/assets/8e1ebb96-be23-461e-a05a-6ae91f73334e" />

<img width="750" height="1334" alt="Controles da aplicação" src="https://github.com/user-attachments/assets/bded2ae3-2cc0-4bf5-b0e7-2b50e8baff40" />

<img width="750" height="1334" alt="Detalhes da interface" src="https://github.com/user-attachments/assets/8cf6689c-5f0b-49d5-a263-899385e8b68a" />

<img width="750" height="1334" alt="Tela adicional da aplicação" src="https://github.com/user-attachments/assets/b11fa374-1945-4b61-95f5-be8e44c0dc5a" />

<img width="750" height="1398" alt="Interface da aplicação" src="https://github.com/user-attachments/assets/a4d369fb-6782-49fd-80c2-2182edfe2bdc" />

<img width="384" height="1568" alt="Interface mobile adicional" src="https://github.com/user-attachments/assets/1f41d04a-6fcf-4d53-9bae-bef7b2013028" />

## 🤝 Contribuição
Contribuições, sugestões e melhorias são bem-vindas.

# Como contribuir
- Faça um fork do repositório.
- Clone sua cópia local.
- Crie uma branch para sua alteração.
- Implemente e teste a mudança.
- Faça um commit com uma mensagem descritiva.
- Envie a branch e abra um Pull Request.

Exemplo:

bash
```
git clone https://github.com/peedrinhoph/Sequence-Training.git
```
```
cd Sequence-Training
```
```
git checkout -b feature/minha-feature
```
# Faça suas alterações
```
git add .
```
```
git commit -m "feat: adiciona minha feature"
```
```
git push origin feature/minha-feature
```
Depois, abra um Pull Request no GitHub descrevendo a alteração e seu objetivo.

📄 Licença
Consulte os arquivos e as informações de licença disponíveis no repositório para conhecer as condições de uso, modificação e distribuição do projeto.

👨‍💻 Autor
Pedro Henrique

Desenvolvido com HTML, CSS e JavaScript, com foco em simplicidade, desempenho e praticidade para a criação e execução de treinos de calistenia.

Projeto: Sequence Training
Aplicação: Abrir no navegador
<p align="center">
Feito com 💚 para tornar os treinos mais organizados e acompanhar a evolução, uma série de cada vez.
</p>
