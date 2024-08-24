import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  Connection,
  EdgeChange,
  NodeTypes,
  NodeChange,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import CustomNode, { CustomNodeType } from "./CustomNode";

const initialNodes: Node<CustomNodeType["data"]>[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { value: 1 },
    type: "textUpdater",
  },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "4" } },
  {
    id: "3",
    position: { x: 10, y: 10 },
    data: { value: 2 },
    type: "textUpdater",
  },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes: NodeTypes = {
  textUpdater: CustomNode,
};

const ReactFlowPlayground = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = (nds: NodeChange[]) => {
    setNodes((prevNodes) => applyNodeChanges(nds, prevNodes));
  };

  const onEdgesChange = (eds: EdgeChange[]) => {
    console.log({ eds });

    setEdges((prevEdges) => applyEdgeChanges(eds, prevEdges));
  };

  const onConnect = (connection: Connection) => {
    // HINT: Bad Implementation
    // const { source, target } = connection;
    // const edge: EdgeChange = {
    //   item: { id: `xy-edge__${source}-${target}`, source, target },
    //   type: "add",
    // };
    // setEdges((prevEdges) => {
    //   const result = addEdge(connection, prevEdges);
    //   console.log(result);

    //   return applyEdgeChanges([edge], prevEdges);
    // });

    setEdges((prevEdges) => addEdge(connection, prevEdges));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        // disableKeyboardA11y
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />

        <Background
          // variant={BackgroundVariant.Lines}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowPlayground;
