FROM node:12.18.0-alpine as build
WORKDIR /react_frontend
COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN npm ci
COPY ./react_frontend ./
RUN npm run build

FROM python:3.8
WORKDIR /responder_backend
ENV PYTHONPATH "${PYTHONPATH}:/"

COPY ./responder_backend/requirements.txt .
RUN pip install -r requirements.txt

COPY ./responder_backend ./

CMD [ "python", "./responder_backend/main.py" ]