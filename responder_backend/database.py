data = {}


def setup():
    global data

    from schema import NodeLabel, NodeEdges

    node1 = NodeLabel(id="1", label="Node1")
    node2 = NodeLabel(id="2", label="Node2")
    node3 = NodeLabel(id="3", label="Node3")
    node4 = NodeLabel(id="4", label="Node4")
    node5 = NodeLabel(id="5", label="Node5")
    node6 = NodeLabel(id="6", label="Node6")
    node7 = NodeLabel(id="7", label="Node7")
    node8 = NodeLabel(id="8", label="Node8")

    edge1 = NodeEdges(id="1", target="2", weight=1.2, rank=1)
    edge2 = NodeEdges(id="1", target="3", weight=4.2, rank=1)
    edge3 = NodeEdges(id="2", target="5", weight=5.2, rank=1)
    edge4 = NodeEdges(id="3", target="6", weight=1.2, rank=1)
    edge5 = NodeEdges(id="3", target="5", weight=1.2, rank=2)
    edge6 = NodeEdges(id="3", target="6", weight=1.2, rank=1)
    data = {
        "NodeLabel": {
            "1": node1,
            "2": node2,
            "3": node3,
            "4": node4,
            "5": node5,
            "6": node6,
            "7": node7,
            "8": node8,
        },
        "NodeEdges" : {
            "1": edge1,
            "2": edge2,
            "3": edge3,
            "4": edge4,
            "5": edge5,
            "6": edge6,
        }
    }

def get_label(_id):
    return data["NodeLabel"][_id]

def get_edges(_id):
    return data["NodeEdges"][_id]    
