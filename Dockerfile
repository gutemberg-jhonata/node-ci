FROM node:18
WORKDIR /app
COPY . .
RUN npm i pnpm -g
RUN pnpm i
RUN pnpm build
CMD ["pnpm", "start"]
EXPOSE 8080
