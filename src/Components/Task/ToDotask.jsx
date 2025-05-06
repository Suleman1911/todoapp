import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";
import { Box, IconButton, Typography } from "@mui/material";

const ToDotask = ({ todo, deleteTodo, editTodo, markCompleted }) => {
  return (
    <Box className="task-box">
      <Typography variant="body1" component="p" className="task-text">
        {todo.title}
        <small>{todo.date}</small>
      </Typography>
      <Box className="task-actions">
        <IconButton onClick={() => editTodo(todo)}>
          <FaRegEdit />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <MdDelete />
        </IconButton>
        <IconButton onClick={()=>{
          markCompleted(todo.id)
        }}>
          <MdDone />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ToDotask;
