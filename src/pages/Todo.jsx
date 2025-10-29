import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { toast } from 'react-toastify'

function Todo() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    // Load todos from localStorage
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos))
      } catch (error) {
        console.error('Error loading todos:', error)
        setTodos([])
      }
    }
  }, [])

  const saveTodos = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) {
      toast.error('Please enter a todo item!')
      return
    }

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    const updatedTodos = [...todos, todo]
    saveTodos(updatedTodos)
    setNewTodo('')
    toast.success('Todo added!')
  }

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    saveTodos(updatedTodos)
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    saveTodos(updatedTodos)
    toast.success('Todo deleted!')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant='h4' sx={{ mb: 3, color: 'white' }}>
        My Todo List
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <form onSubmit={handleAddTodo}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label='New Todo'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='What do you need to do?'
              />
              <Button
                variant='contained'
                type='submit'
                startIcon={<AddIcon />}
                sx={{ minWidth: '120px' }}
              >
                Add
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          {todos.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant='body1' color='text.secondary'>
                No todos yet. Add one to get started!
              </Typography>
            </Box>
          ) : (
            <List>
              {todos.map((todo) => (
                <ListItem
                  key={todo.id}
                  sx={{
                    borderBottom: '1px solid #e0e0e0',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => handleDeleteTodo(todo.id)}
                      color='error'
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <Checkbox
                      edge='start'
                      checked={todo.completed}
                      onChange={() => handleToggleTodo(todo.id)}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={todo.text}
                    sx={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      opacity: todo.completed ? 0.6 : 1,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}

          {todos.length > 0 && (
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant='body2' color='text.secondary'>
                {todos.filter((t) => t.completed).length} of {todos.length}{' '}
                completed
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Todo
