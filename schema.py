import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Department as DepartmentModel
from models import Employee as EmployeeModel
from models import Role as RoleModel


class Department(MongoengineObjectType):

    class Meta:
        model = DepartmentModel
        interfaces = (Node,)


class Role(MongoengineObjectType):

    class Meta:
        model = RoleModel
        interfaces = (Node,)


class Employee(MongoengineObjectType):

    class Meta:
        model = EmployeeModel
        interfaces = (Node,)

class EmployeeInput(graphene.InputObjectType):
    name = graphene.String(required=True)

class CreateEmployee(graphene.Mutation):
    class Arguments:
        employee_data = EmployeeInput(required=True)

    employee = graphene.Field(Employee)

    def mutate(root, info, employee_data=None):
        employee = Employee(
            name=employee_data.name,
        )
        EmployeeModel(name=employee_data.name).save()
        return CreateEmployee(employee=employee)

# ... the Mutation Class
class MyMutations(graphene.ObjectType):
    create_employee = CreateEmployee.Field()

#クエリの設定
class Query(graphene.ObjectType):
    node = Node.Field()
    all_employees = MongoengineConnectionField(Employee)
    all_role = MongoengineConnectionField(Role)
    all_department = MongoengineConnectionField(Department)
    role = graphene.Field(Role)
    employee = graphene.Field(Employee)
    department = graphene.Field(Department)

schema = graphene.Schema(query=Query, types=[Department, Employee, Role],
 mutation=MyMutations)