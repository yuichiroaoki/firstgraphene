import responder
import graphene
from schema import schema
from settings import MONGO_URL, DB_NAME
import pandas as pd
from database import setup 

#Mongobとmongoengineにより接続
from mongoengine import connect
connect(DB_NAME, host=MONGO_URL, alias='default')

#Reactのstaticフォルダの指定
#production
# api = responder.API(static_dir="./build/static", templates_dir="./build")
#development
api = responder.API(static_dir="../react_frontend/build/static", templates_dir="../react_frontend/build")

#ホームにアクセスするとReactのviewが表示される
@api.route("/")
def index(req, resp):
    resp.html= api.template('index.html')

#Grapheneを用いてGraphQLサーバーを立てる
view = responder.ext.GraphQLView(api=api, schema=schema)

#/graphにアクセスするとGraphQLのスキーマやクエリの確認ができる
api.add_route("/graph", view)


#クライアント側のルーティングに対応
@api.route('/{react_route}')
def react(req, resp, *, react_route):
    resp.html= api.template('index.html')

if __name__ == '__main__':
    setup()
    api.run()