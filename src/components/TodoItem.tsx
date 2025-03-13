import React from 'react';
import { Button } from '@/components/ui/button';
import { Todo } from '@/types/todo';
import { X, Check } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          className={`size-6 rounded-full ${todo.completed ? 'bg-green-100 border-green-500 text-green-600 dark:bg-green-900/30 dark:border-green-600' : 'border-gray-300 dark:border-gray-600'}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && <Check className="size-3" />}
        </Button>
        <span className={`text-sm ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
          {todo.text}
        </span>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
        onClick={() => onDelete(todo.id)}
      >
        <X className="size-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
