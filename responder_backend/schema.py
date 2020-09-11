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

    target = relay.ConnectionField(
        NodeConnection, description="A node of the target"
    )
    weight = graphene.Float()
    rank = graphene.Int()

    def resolve_target(self, info, **args):
        return [get_label(label) for label in self.target]


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    edges = graphene.Field(NodeEdges)

    def resolve_edges(root, info):
        return get_edges("2")



schema = graphene.Schema(query=Query)