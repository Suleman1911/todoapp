import React from "react";
import { Box, Typography } from "@mui/material";
import CompleteTask from "../Task/CompleteTask";

const Complete = ({ completedTodos, movebackToTodo }) => {
  return (
    <Box className="complete-container">
      <Typography variant="h4" className="section-title">
        Completed Todos
      </Typography>
      {completedTodos.map(todo => (
        <CompleteTask
          key={todo.id} 
          todo={todo}
          moveBackToTodo={movebackToTodo}
        />
      ))}
    </Box>
  );
};

export default Complete;
