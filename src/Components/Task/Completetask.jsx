import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Box, IconButton, Typography } from "@mui/material";

const Completetask = ({ todo, moveBackToTodo }) => {
  return (
    <Box className="task-box">
      <Typography variant="body1" component="p" className="task-text">
        {todo.title}
        <small>{todo.date}</small>
      </Typography>
      <Box className="task-actions-gap">
        <IconButton onClick={() => moveBackToTodo(todo.id)}>
          <FaRegEdit />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Completetask;
