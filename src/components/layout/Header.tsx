import { useEffect, useState } from "react"


export function Header() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check initial dark mode preference
        const darkMode = localStorage.getItem('darkMode') === 'true' ||
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDark(darkMode)
        document.documentElement.classList.toggle('dark', darkMode)
    }, [])

    const toggleDarkMode = () => {
        const newDarkMode = !isDark
        setIsDark(newDarkMode)
        document.documentElement.classList.toggle('dark', newDarkMode)
        localStorage.setItem('darkMode', String(newDarkMode))
    }
    return (
        <header className="p-4 border-b flex items-center justify-between bg-background">
            <span className="font-semibold text-lg">🍳 Breakfast With Me</span>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
            >
                {isDark ? '☀️' : '🌙'}
            </button>
        </header>
    )
}
