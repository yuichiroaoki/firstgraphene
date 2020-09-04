FROM node:12.18.0-alpine as build

# set working directory
WORKDIR /app/react_frontend

COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN npm ci

COPY ./react_frontend ./

RUN npm run build

FROM python:3.8.3

WORKDIR /app/responder_backend
ENV PYTHONPATH "${PYTHONPATH}:/app"
ENV PORT '8081'

# add and install requirements
COPY ./responder_backend/requirements.txt ./
RUN pip install -r requirements.txt

COPY ./responder_backend ./
COPY --from=build /app/react_frontend/build/ ./build/

EXPOSE 8081
CMD [ "python", "main.py", "--host=0.0.0.0" ]