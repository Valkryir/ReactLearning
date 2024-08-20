FROM node:20

RUN apt-get update

RUN npm install -g npm && \
    npm install -g create-react-app