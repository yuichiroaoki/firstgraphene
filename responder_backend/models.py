from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, FloatField, IntField
)


class Department(Document):
    meta = {'collection': 'department'}
    name = StringField()


class Role(Document):
    meta = {'collection': 'role'}
    name = StringField()


class Employee(Document):
    meta = {'collection': 'employee'}
    name = StringField()
    hired_on = DateTimeField(default=datetime.now)
    department = ReferenceField(Department)
    role = ReferenceField(Role)
    
class Nodes(Document):
    meta = {'collection': 'nodes'}
    label = StringField()

class BigGraph(Document):
    meta = {'collection': 'bigGraph'}
    node1 = ReferenceField(Nodes)
    label = StringField()
    node2 = ReferenceField(Nodes)
    weight = FloatField()
    rank = IntField()

class SmallGraph(Document):
    meta = {'collection': 'bigGraph'}
    node1 = ReferenceField(Nodes)
    type = StringField()
    node2 = ReferenceField(Nodes)
    weight = FloatField()
    rank = IntField()

