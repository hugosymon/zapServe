# Casos de Uso - zapServe

## UC01 - Visualizar Serviços Disponíveis
**Ator**: Usuário  
**Objetivo**: Conhecer os serviços oferecidos pela plataforma

### Fluxo Principal
1. Usuário acessa a página inicial
2. Sistema exibe carrossel com serviços
3. Usuário navega pelos serviços usando setas ou indicadores
4. Sistema mostra detalhes de cada categoria

---

## UC02 - Realizar Login/Cadastro
**Ator**: Usuário  
**Objetivo**: Acessar funcionalidades da plataforma

### Fluxo Principal
1. Usuário clica em "Login" no menu
2. Sistema exibe tela de login/cadastro
3. Usuário escolhe entre login ou cadastro
4. Usuário preenche formulário
5. Sistema simula autenticação (apenas visual)

---

## UC03 - Buscar Serviços
**Ator**: Usuário  
**Objetivo**: Encontrar profissional específico

### Fluxo Principal
1. Usuário acessa página de pesquisa
2. Usuário digita termo de busca OU seleciona categoria
3. Sistema filtra cards de serviços
4. Usuário visualiza resultados filtrados

### Fluxo Alternativo
- Usuário pode combinar busca por texto + categoria
- Sistema aplica ambos os filtros simultaneamente

---

## UC04 - Agendar Serviço
**Ator**: Usuário  
**Objetivo**: Solicitar agendamento de serviço

### Fluxo Principal
1. Usuário clica em "Mais Info" em um card
2. Sistema exibe detalhes do serviço (dados aleatórios)
3. Usuário seleciona data e horário
4. Sistema valida se horário está no intervalo disponível
5. Sistema confirma agendamento
6. Sistema redireciona para página inicial

### Fluxo de Exceção
- Se horário inválido: Sistema exibe alerta de erro

---

## UC05 - Usar Chat de Suporte
**Ator**: Usuário  
**Objetivo**: Tirar dúvidas sobre serviços

### Fluxo Principal
1. Usuário acessa página de chat
2. Usuário digita mensagem
3. Sistema processa mensagem
4. Sistema responde com base em palavras-chave
5. Conversa continua até usuário sair

### Respostas Automáticas
- "oi/olá" → Saudação
- "preço" → Pergunta sobre especificação
- "agendar" → Solicita data/horário
- "obrigado" → Despedida
- Outros → Mensagem de não compreensão

---

## UC06 - Navegar Entre Páginas
**Ator**: Usuário  
**Objetivo**: Explorar diferentes seções da plataforma

### Fluxo Principal
1. Usuário clica em item do menu de navegação
2. Sistema carrega página correspondente
3. Usuário pode usar botões "Voltar" quando disponíveis
4. Sistema mantém navegação consistente

---

## UC07 - Visualizar Informações da Empresa
**Ator**: Usuário  
**Objetivo**: Conhecer mais sobre a zapServe

### Fluxo Principal
1. Usuário clica em "Sobre" no menu
2. Sistema exibe página com informações da empresa
3. Usuário lê sobre ideais, transparência e serviços
4. Usuário pode navegar de volta ao menu principal