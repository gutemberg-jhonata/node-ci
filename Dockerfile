FROM node:18
WORKDIR /app
COPY . .
RUN npm i pnpm -g && pnpm i && pnpm build
CMD ["pnpm", "start"]
