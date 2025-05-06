import React from "react";
import { Box, Typography } from "@mui/material";
import Completetask from "../Task/Completetask";

const Complete = ({ completedTodos, moveBackToTodo }) => {
  return (
    <Box className="complete-container">
      <Typography variant="h4" className="section-title">
        Completed Todos
      </Typography>
      {completedTodos.map(todo => (
        <Completetask
          key={todo.id} 
          todo={todo}
          moveBackToTodo={moveBackToTodo}
        />
      ))}
    </Box>
  );
};

export default Complete;
