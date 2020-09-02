import graphene
import responder
import graphene

#Mongobとmongoengineにより接続
from mongoengine import connect
connect('mutation-test', host='mongodb+srv://yuichiroaoki:simple@cluster0.ezgmu.gcp.mongodb.net/?retryWrites=true&w=majority', alias='default')

api = responder.API()


class PersonInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    age = graphene.Int(required=True)
    
class Person(graphene.ObjectType):
    name = graphene.String()
    age = graphene.Int()

class CreatePerson(graphene.Mutation):
    class Arguments:
        person_data = PersonInput(required=True)

    person = graphene.Field(Person)

    def mutate(root, info, person_data=None):
        person = Person(
            name=person_data.name,
            age=person_data.age
        )
        return CreatePerson(person=person)

# ... the Mutation Class

class MyMutations(graphene.ObjectType):
    create_person = CreatePerson.Field()

# We must define a query for our schema
class Query(graphene.ObjectType):
    person = graphene.Field(Person)




schema = graphene.Schema(query=Query, mutation=MyMutations)


view = responder.ext.GraphQLView(api=api, schema=schema)

api.add_route("/graph", view)

if __name__ == '__main__':
    api.run(port=8080)