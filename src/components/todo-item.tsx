import { Todo } from "@/types/todo"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const handleToggle = () => {
    onToggle(todo.id)
  }
  
  const handleDelete = () => {
    onDelete(todo.id)
  }
  
  return (
    <div 
      className={`flex items-center justify-between p-4 rounded-xl border ${
        todo.completed 
          ? "todo-card-completed" 
          : "todo-card"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="checkbox-pretty"
        />
        <span className={`${
          todo.completed 
            ? "line-through text-muted-foreground" 
            : "text-foreground"
          } transition-all duration-200`}
        >
          {todo.text}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        aria-label="Delete task"
        className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
      >
        <Trash className="size-4" />
      </Button>
    </div>
  )
}
