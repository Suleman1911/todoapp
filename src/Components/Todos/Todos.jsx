import React from "react";
import { Box, Typography } from "@mui/material";
import TodoTask from "../Task/TodoTask";

const Todos = ({ todos, deleteTodo, editTodo, markCompleted }) => {
  return (
    <Box className="todos-container">
      <Typography variant="h4" className="section-title">
        My Todos
      </Typography>
      {todos.map((todo) => (
        <TodoTask
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          markCompleted={markCompleted}
        />
      ))}
    </Box>
  );
};

export default Todos;
