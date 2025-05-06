import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";

const InputArea = ({ addTodo, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [hasChanges, sethasChanges] = useState("");
  
  
  const handleAdd = () => {
    addTodo(title);
    setTitle("");
  };

  const handletitleChange = (e)=>{
    const newTitle = e.target.value;
    setTitle(newTitle)
    if(editingTodo){
      sethasChanges( newTitle !== editingTodo.title)
    }
  };

  useEffect(() => {
    if (editingTodo && editingTodo.title !== undefined) {
      setTitle(editingTodo.title);
      sethasChanges(false)
    } else {
      setTitle('')
      sethasChanges(false)
    }
  }, [editingTodo]);

  return (
    <Box className="input-area">
      <TextField
        className="input-field"
        value={title || ''}
        onChange={handletitleChange}
        variant="outlined"
        placeholder="Todo's Title"
        size="small"
      />
      <Button
        color="success"
        variant="outlined"
        disabled={!title.trim() || (editingTodo && !hasChanges)}
        onClick={handleAdd}
      >
        {editingTodo ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default InputArea;
