FROM node as builder
LABEL Author="Claiton Nazaret - webapp"
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn
COPY . /app
RUN yarn build

FROM nginx:1.16.0-alpine
LABEL Author="Claiton Nazaret - nginx"
COPY --from=builder /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]