import { useState } from "react"
import { Todo } from "@/types/todo"
import { TodoItem } from "@/components/todo-item"
import { TodoForm } from "@/components/todo-form"
import { ListChecks } from "lucide-react"

interface TodoListProps {
  initialTodos?: Todo[]
}

export function TodoList({ initialTodos = [] }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  
  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos])
  }
  
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length
  
  return (
    <div className="flex flex-col gap-5 w-full">
      <TodoForm onAddTodo={addTodo} />
      
      <div className="flex items-center gap-2 px-2 text-sm text-muted-foreground">
        <ListChecks className="h-4 w-4" />
        {totalCount > 0 ? (
          <p>
            {completedCount} of {totalCount} {totalCount === 1 ? 'task' : 'tasks'} completed
          </p>
        ) : (
          <p>No tasks yet. Add one above!</p>
        )}
      </div>
      
      <div className="space-y-3">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
          ))
        ) : (
          <div className="p-8 text-center border rounded-xl border-dashed border-primary/20">
            <p className="text-muted-foreground">Your todo list is empty</p>
          </div>
        )}
      </div>
    </div>
  )
}
