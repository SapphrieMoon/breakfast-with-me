import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <div>
      <header className="p-4 border-b">🍳 Breakfast With Me</header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
