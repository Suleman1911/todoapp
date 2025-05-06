import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import InputArea from "./Components/InputArea/InputArea";
import Todos from "./Components/Todos/Todos";
import Complete from "./Components/Todos/Complete";
import "./App.css";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);


  const now = format(new Date(), "dd/MM/yyyy hh:mm:ss a");

  const addTodo = (title) => {
    if (!title.trim()) return;

    const existTitle = todos.some(todo => todo.title.toLowerCase() === title.trim().toLowerCase());
    if (existTitle) {
      toast.error("Task already exists")
      return;
    }

    if (editingTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id
          ? { ...todo, title, date: `Updated at: ${now}` }
          : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      date: now,
    };
    setTodos([...todos, newTodo]);
  };


  const deleteTodo = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id)
    setTodos(updatedList);
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  const markCompleted = (id) => {
    const updatedList = todos.map((todo) =>
      todo.id === id
        ? {
          ...todo,
          completed: true,
          date: `Completed at: ${now}`,
        }
        : todo
    )
    setTodos(updatedList);
  };

  const movebackToTodo = (id) => {
    const updatedList = todos.map((todo) =>
      todo.id === id
        ? {
          ...todo,
          completed: false,
          date: `moved back at: ${now}`,
        }
        : todo
    )
    setTodos(updatedList);
  };


  return (
    <Container maxWidth="md">
      <Toaster />
      <Box className="app-container">
        <InputArea addTodo={addTodo} editingTodo={editingTodo} />
        <Box className="content-wrapper">
          <Todos
            todos={todos.filter(todo => !todo.completed)}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            markCompleted={markCompleted}
          />
          <Complete completedTodos={todos.filter(todo => todo.completed)}
            movebackToTodo={movebackToTodo}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
