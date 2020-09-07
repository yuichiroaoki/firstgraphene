const COLORS = {
    purp: "#43447a"
  };
  
const nodeStyles = [
  {
    selector: "node",
    style: {
      "background-color": COLORS.purp,
      // ラベルの名前表示
      "label": "data(label)",
      "font-size": 12,
    }
  }
];
const edgeStyles = [
  {
    selector: "edge",
    style: {
      // エッジのスタイル設定
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      // 重みによってエッジの色を変更（重みがマイナスに大きくなるにつれて青、プラスになるにつれて赤になる設定）
      "target-arrow-color": "mapData(weight, -10, 10, blue, red)",
      "line-color": "mapData(weight, -10, 10, blue, red)",
      "label": "data(weight)", 
      "font-size": 12,
    }
  }
];
  
export default [...nodeStyles, ...edgeStyles];
  