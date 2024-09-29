FROM postgres:16 as build

ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=root
ENV POSTGRES_DB=db_acnh

COPY ./scripts/init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432