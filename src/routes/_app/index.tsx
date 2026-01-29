import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/hero/Hero'

export const Route = createFileRoute('/_app/')({
  component: Home,
})

function Home() {
  return (
    <div className="">
      <Hero />
    </div>
  )
}
