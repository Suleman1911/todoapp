import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Box, IconButton, Typography } from "@mui/material";

const CompleteTask = ({ todo, moveBackToTodo }) => {
  return (
    <Box className="task-box">
      <Typography variant="body1" component="p" className="task-text">
        {todo.title}
        <small>{todo.date}</small>
      </Typography>
      <Box className="task-actions-gap">
        <IconButton onClick={() => moveBackToTodo(todo.id)}>
          <RiArrowGoBackFill />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CompleteTask;
