import { TodoList } from "@/components/todo-list"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Good ToDo App
        </h1>
        <p className="text-muted-foreground mt-2">
          Keep track of your tasks and get things done
        </p>
      </header>
      
      <main className="flex-1 w-full max-w-lg mx-auto">
        <div className="bg-card/70 shadow-lg backdrop-blur-sm p-6 rounded-lg border">
          <TodoList />
        </div>
      </main>
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Good ToDo App</p>
      </footer>
    </div>
  )
}

export default App
