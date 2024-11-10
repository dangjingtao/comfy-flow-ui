import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { Upload, Button } from "@douyinfe/semi-ui";
import { IconUpload } from "@douyinfe/semi-icons";

const UploadWorkFlow = () => {
  const action = "https://api.semi.design/upload";

  const button = (
    <Button icon={<IconUpload />} theme="light">
      点击上传
    </Button>
  );
  return (
    <>
      <>
        <Upload
          action={action}
          prompt={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                height: 32,
                marginLeft: 10,
              }}
            >
              请上传comfyui 工作流
            </div>
          }
          promptPosition="right"
        >
          {button}
        </Upload>
        <div
          style={{
            marginBottom: 12,
            marginTop: 12,
            borderBottom: "1px solid var(--semi-color-border)",
          }}
        ></div>
      </>
    </>
  );
};

// import { getStaticCode } from "xy-shared/server";
// export const getStaticProps = getStaticCode(["learn/quickstart"]);

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div>
      <div>
        <UploadWorkFlow />
      </div>
      <div style={{ width: "100%", height: "76vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
