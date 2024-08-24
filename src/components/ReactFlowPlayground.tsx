import { useState } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  Connection,
  EdgeChange,
  NodeTypes,
  NodeChange,
  EdgeTypes,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./override.css";
import CustomNode, { CustomNodeType } from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { Box } from "@mui/material";

const initialNodes: CustomNodeType[] = [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { value: 1 },
    type: "custom-node",
  },
  {
    id: "2",
    position: { x: 200, y: 100 },
    data: { value: 2 },
    type: "custom-node",
  },
];

const nodeTypes: NodeTypes = {
  "custom-node": CustomNode,
};

const edgeTypes: EdgeTypes = {
  "custom-edge": CustomEdge,
};
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", type: "custom-edge" },
];

const ReactFlowPlayground = () => {
  const [nodes, setNodes] = useState<CustomNodeType[]>(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = (nds: NodeChange<CustomNodeType>[]) => {
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

    setEdges((prevEdges) =>
      addEdge({ ...connection, animated: true }, prevEdges)
    );
  };

  return (
    <Box style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        defaultEdgeOptions={{ type: "custom-edge" }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        fitView
        // disableKeyboardA11y
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        // colorMode="dark"
      >
        <Controls />

        <Background
          // bgColor="black"
          // variant={BackgroundVariant.Lines}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </Box>
  );
};

export default ReactFlowPlayground;
