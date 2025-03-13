import { TodoList } from "@/components/todo-list"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Good ToDo App</h1>
        <p className="text-muted-foreground mt-2">
          Keep track of your tasks and get things done
        </p>
      </header>
      
      <main className="flex-1 w-full max-w-lg mx-auto">
        <TodoList />
      </main>
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Good ToDo App</p>
      </footer>
    </div>
  )
}

export default App
