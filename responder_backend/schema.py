import graphene
from graphene import relay

from database import get_edges, get_label, get_edge_list, get_all_edges

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

class EdgeConnection(relay.Connection):
    class Meta:
        node = NodeEdges

class EdgeList(graphene.ObjectType):
    class Meta:
        interfaces = (relay.Node,)

    edge_list = relay.ConnectionField(
        EdgeConnection, description="A list of edges"
    )

    def resolve_edge_list(self, info, **args):
        return [get_edges(label) for label in self.edge_list]

class Query(graphene.ObjectType):
    node = relay.Node.Field()
    edges = graphene.Field(NodeEdges, id=graphene.ID(required=True))
    edge_list = graphene.Field(EdgeList, id=graphene.ID(required=True))
    all_edges = graphene.Field(NodeEdges)

    def resolve_edges(root, info, id):
        return get_edges(id)

    def resolve_edge_list(root, info, id):
        return get_edge_list(id)


schema = graphene.Schema(query=Query)