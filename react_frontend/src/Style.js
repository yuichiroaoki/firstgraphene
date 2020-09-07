const COLORS = {
    purp: "#43447a"
  };
  
  const nodeStyles = [
    {
      selector: "node",
      style: {
        "background-color": COLORS.purp,
        "label": "data(label)",
      }
    }
  ];
  const edgeStyles = [
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "target-arrow-color": "mapData(weight, 0, 10, blue, red)",
        "line-color": "mapData(weight, 0, 10, blue, red)",
        "width": "data(weight)"
      }
    }
  ];
  
  export default [...nodeStyles, ...edgeStyles];
  