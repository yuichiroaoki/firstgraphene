from models import Department, Employee, Role
from mongoengine import connect
connect('graphene-mongo', host='mongodb+srv://yuichiroaoki:simple@cluster0.ezgmu.gcp.mongodb.net/?retryWrites=true&w=majority', alias='default')


def init_db():
    # Create the fixtures
    engineering = Department(name='Engineering')
    engineering.save()

    hr = Department(name='Human Resources')
    hr.save()

    manager = Role(name='manager')
    manager.save()

    engineer = Role(name='engineer')
    engineer.save()

    peter = Employee(name='Nancy', department=engineering, role=engineer)
    peter.save()

    roy = Employee(name='David', department=engineering, role=engineer)
    roy.save()

    tracy = Employee(name='Jack', department=hr, role=manager)
    tracy.save()