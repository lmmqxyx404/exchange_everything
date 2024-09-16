pnpm build && docker build -t next-app-image . && \
docker stop $(docker ps -q) && docker rm $(docker ps -a -q) && \
docker run -d -p 4000:3000 next-app-image
