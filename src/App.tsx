import { useState } from "react"
import { TodoList } from "@/components/todo-list"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen todo-gradient flex flex-col items-center p-4 sm:p-6 ${isDarkMode ? 'dark' : ''}`}>
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <header className="mb-10 mt-8 text-center">
        <div className="inline-block p-2 px-4 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
          Simple • Fast • Effective
        </div>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Good ToDo App
        </h1>
        <p className="text-muted-foreground mt-3">
          Keep track of your tasks and get things done
        </p>
      </header>
      
      <main className="flex-1 w-full max-w-lg mx-auto">
        <TodoList />
      </main>
      
      <footer className="mt-12 mb-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Good ToDo App</p>
      </footer>
    </div>
  )
}

export default App
