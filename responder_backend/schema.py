import graphene
from graphene import relay

from database import get_edges, get_label

class NodeLabel(graphene.ObjectType):
    class Meta:
        interfaces = (relay.Node,)

    label = graphene.String(description="The name of the node")
    
class NodeConnection(relay.Connection):
    class Meta:
        node = NodeLabel

class NodeEdges(graphene.ObjectType):
    class Meta:
        interfaces = (relay.Node,)
    
    source = relay.ConnectionField(
        NodeConnection, description="A node of the sucrce"
    )
    target = relay.ConnectionField(
        NodeConnection, description="A node of the target"
    )
    weight = graphene.Float()
    rank = graphene.Int()

    def resolve_source(self, info, **args):
        return [get_label(label) for label in self.source]

    def resolve_target(self, info, **args):
        return [get_label(label) for label in self.target]


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    edges = graphene.Field(NodeEdges, id=graphene.ID(required=True))

    def resolve_edges(root, info, id):
        return get_edges(id)



schema = graphene.Schema(query=Query)