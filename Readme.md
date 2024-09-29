# Animal Crossing Companion App

## Descrição do Projeto

Este projeto é uma aplicação fullstack desenvolvida para o controle interno dos entregáveis do jogo **Animal Crossing**, da Nintendo. O sistema permite que os usuários gerenciem doações para o museu do jogo, facilitando a organização e acompanhamento dos itens coletados. A aplicação é composta por um backend em Java com Spring Boot e um frontend em React, ambos dockerizados para facilitar o desenvolvimento e a implantação.

```
  Este projeto ainda está em etapa de desenvolvimento, e toda vez que for rodado um novo build do docker-compose, o banco de dados voltara para sua condição inicial, não utilize como sua única forma de controle de doações, pois os dados podem ser perdidos na atualização do projeto.
```

### Tecnologias Utilizadas

- **Backend**:

  - Java
  - Spring Boot
  - PostgreSQL
  - Lombok (para simplificação de getters e setters)

- **Frontend**:

  - React
  - Tailwind CSS (para estilização)
  - Radix UI (para componentes acessíveis)
  - @tanstack/react-query (para gerenciamento de estado e requisições)
  - Fetch padrão (para chamadas à API)

- **Docker**:
  - Docker e Docker Compose (para containerização da aplicação)

## Funcionalidades

- Registro e controle de doações para o museu.
- Interface amigável e responsiva para visualização e gerenciamento de itens.
- Renderizações condicionais para melhorar a experiência do usuário.

## Guia de Uso

### Configuração do Ambiente com Docker

1. **Clone o Repositório**:

   ```bash
       git clone https://github.com/tjfaccipieri/animal-crossing-companion-app.git
       cd animal-crossing-companion-app
   ```

2. **Docker Compose**:
   Certifique-se de ter o Docker e o Docker Compose instalados.
   Execute o seguinte comando para iniciar todos os serviços:

```bash
docker-compose up --build
```

3. **Acessando a Aplicação**

- O frontend estará disponível em http://localhost:80.
- As APIs do backend estarão disponíveis em http://localhost:8080.
- O banco de dados PostgreSQL estará disponível na porta 5432 dentro do container, e na porta 5433 externamente.

4. **Proximos Passos**
1. Após finalizar as integrações e desenvolvimento necessário do projeto, pretendo fazer o deploy do mesmo em alguma plataforma online, com autenticação de usuário, para que cada pessoa possa acessar atravez de uma URL e ter seu próprio sistema de controle. Enquanto isso, vai rodando local mesmo que da pra brincar um pouco

5. **Contribuições**
   Estamos abertos a sugestões e melhorias! Se você tiver ideias ou ajustes para este projeto, sinta-se à vontade para contribuir:

- Fork o Repositório: Crie um fork deste repositório.
  Crie uma Branch: Crie uma branch para suas alterações.

```bash
git checkout -b minha-feature
```

Commit suas Alterações: Faça commit das suas alterações.

```bash
git commit -m "Adiciona nova funcionalidade"
```

Envie para o Repositório Remoto: Envie suas alterações para o GitHub.

```bash
git push origin minha-feature
```

Abra um Pull Request: No GitHub, abra um pull request descrevendo suas alterações.

## Agradecimentos

Obrigado por conferir este projeto! Estamos empolgados para ver suas contribuições e ideias para melhorar a aplicação!

**Se precisar de mais alguma coisa, é só avisar!**
