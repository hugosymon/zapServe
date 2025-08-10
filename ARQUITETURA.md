# Arquitetura do Sistema - zapServe

## Estrutura do Projeto

```
zapServe/
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos principais
│   │   ├── login.css       # Estilos do login
│   │   ├── form.css        # Estilos do formulário
│   │   └── pesquisa.css    # Estilos da pesquisa
│   ├── js/
│   │   ├── carrossel.js    # Funcionalidade do carrossel
│   │   ├── chat.js         # Chat bot
│   │   ├── form.js         # Agendamento
│   │   ├── login.js        # Animações do login
│   │   └── pesquisa.js     # Busca e filtros
│   └── images/             # Imagens dos serviços
├── index.html              # Página inicial
├── loginpage.html          # Login/Cadastro
├── pesquisa.html           # Busca de serviços
├── form.html               # Agendamento
├── chat.html               # Chat
└── sobre.html              # Sobre a empresa
```

## Componentes Principais

### Frontend (Client-Side)
- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização e responsividade
- **JavaScript Vanilla**: Interatividade e lógica

### Módulos JavaScript

#### carrossel.js
- Navegação automática e manual
- Indicadores visuais
- Responsividade

#### chat.js
- Simulação de chat bot
- Respostas pré-programadas
- Interface de mensagens

#### form.js
- Validação de horários
- Dados simulados de serviços
- Agendamento fictício

#### pesquisa.js
- Filtros por categoria
- Busca por texto
- Exibição dinâmica de resultados

## Fluxo de Dados

### Navegação
```
index.html → pesquisa.html → form.html
     ↓
loginpage.html ← → chat.html
```

### Dados Simulados
- **Serviços**: Array hardcoded em form.js
- **Chat**: Respostas pré-definidas em chat.js
- **Usuários**: Sem persistência (apenas UI)

## Padrões Utilizados

### CSS
- Mobile-first design
- Variáveis CSS para cores
- Flexbox para layouts

### JavaScript
- Event listeners
- DOM manipulation
- Modular functions
- DOMContentLoaded pattern

## Responsividade

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large screens: > 1440px