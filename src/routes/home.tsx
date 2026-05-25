import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function HomePage() {
  const [value, setValue] = useState('')

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-50">
      <div className="mx-auto max-w-5xl">
        <label
          htmlFor="user-filter"
          className="block text-sm font-medium text-zinc-200"
        >
          Filtr uzytkownikow
        </label>
        <input
          id="user-filter"
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Wpisz imie, username lub email"
          className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-50 outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />

        <Link
          to="/reduce"
          className="mt-6 inline-flex rounded-md bg-cyan-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-cyan-300"
        >
          Przejdz do zadania reduce
        </Link>

        <div className="mt-8 text-zinc-200">Tabela uzytkownikow</div>
      </div>
    </main>
  )
}
