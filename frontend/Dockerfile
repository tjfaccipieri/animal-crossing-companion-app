# ------ Parte 1 - preparando o projeto no node ------

# Usando a imagem do node na mesma versão que foi construido localmente
FROM node:20 AS build

# Definindo a pasta do container onde a aplicação vai rodar
WORKDIR /app

# Copiando o package.json para pegar as dependencias
COPY package*.json ./

# Rodando o npm install para instalar tudo que o projeto precisa
RUN npm install

# Copiando todo o conteudo da pasta do projeto para a pasta APP do container
COPY . .

# Rodando um build na aplicação para gerar o projeto final
RUN npm run build


# ------ Parte 2 - montando o servidor para expor os arquivos estáticos do build ------

# Usando o nginx na versão alpine dele
FROM nginx:alpine

# Copiar o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos de build gerados para o diretório padrão do Nginx (a pasta dist pode mudar dependendo da aplicação)
COPY --from=build /app/dist /usr/share/nginx/html

# Expondo a porta 80 do container para acesso
EXPOSE 80

# Comando padrão de run do nginx pelo console
CMD ["nginx", "-g", "daemon off;"]
