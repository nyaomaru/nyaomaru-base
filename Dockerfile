FROM node:20.12.0-bookworm
LABEL maintainer="Nyaomaru<nyaonyao0725@gmail.com>"

VOLUME ["/app/.next"]

COPY package.json pnpm-lock.yaml /app/

WORKDIR /app

RUN corepack enable
RUN pnpm install --frozen-lockfile

COPY . /app
