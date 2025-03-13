import { useState } from "react"
import { generateId } from "@/lib/utils"
import { Todo } from "@/types/todo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface TodoFormProps {
  onAddTodo: (todo: Todo) => void
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!text.trim()) return
    
    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    
    onAddTodo(newTodo)
    setText("")
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-card rounded-xl shadow-sm border border-primary/10">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border-primary/20 focus-visible:ring-primary/30"
      />
      <Button 
        type="submit" 
        disabled={!text.trim()} 
        aria-label="Add task"
        className="shadow-md"
      >
        <Plus className="size-4 mr-2" />
        Add
      </Button>
    </form>
  )
}
