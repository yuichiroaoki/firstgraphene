const elements = [
    // ノードのデータ
    { 
        data: { 
            id: 'one', 
            label: 'Node 1' 
        }, 
        position: { x: 100, y: 300 },
        group: "nodes" 
    },
    { 
        data: { 
            id: 'two', 
            label: 'Node 2' 
        }, 
        position: { x: 500, y: 300 },
        group: "nodes" 
    },
    // エッジのデータ
    { 
        data: { 
            source: 'one', 
            target: 'two', 
            label: 'Edge from Node1 to Node2',
            weight: 1.254,
            rank: 1,
        },
        group: "edges"
    }
]

export default elements;