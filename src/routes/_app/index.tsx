import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🍳 Breakfast With Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Welcome to your new TanStack Start project!
        </p>
      </div>
    </div>
  )
}
