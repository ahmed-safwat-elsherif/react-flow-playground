import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/material/styles";

const styles = {
  root: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "1px solid",
  } as SxProps,
};

export type CustomNodeType = Node<
  {
    value: string | number;
  },
  "custom-node"
>;

const CustomNode = (props: NodeProps<CustomNodeType>) => {
  const { data: { value } = {} } = props;
  return (
    <Box sx={styles.root} className="test">
      <Handle type="source" position={Position.Right} />
      <Stack justifyContent="center" alignItems="center" height="100%">
        <Box component="span">{value}</Box>
      </Stack>
      <Handle type="target" position={Position.Left} />
    </Box>
  );
};

export default CustomNode;
