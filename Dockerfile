# Stage 1 - Building the app
FROM node:16.20.1 as build-stage
RUN mkdir -p /home/node/verite/node_modules
ENV PATH /home/node/verite/node_modules/.bin:$PATH
WORKDIR /home/node/verite/
COPY package*.json .
COPY ./ .
RUN npm install -g npm@8.19.4
RUN npm cache clear --force
RUN npm install
RUN npm run build

# Stage 2 - Serving the app
FROM nginx:1.21.4
COPY --from=build-stage /home/node/verite/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
