const transactions = [
  { id: 1, category: 'food', amount: 42 },
  { id: 2, category: 'transport', amount: 18 },
  { id: 3, category: 'food', amount: 24 },
  { id: 4, category: 'books', amount: 55 },
  { id: 5, category: 'transport', amount: 12 },
]

export function ReduceTaskPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8">
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
            Zadanie dodatkowe
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">
            Odtworzenie funkcji reduce
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-300">
            Zaimplementuj funkcje pomocnicza `reduceArray` bez uzycia
            `Array.prototype.reduce`. Nastepnie uzyj jej w tym widoku do
            wyswietlenia podsumowania transakcji pogrupowanych po kategorii.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Dane wejsciowe</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900 text-zinc-300">
                <tr>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Kategoria</th>
                  <th className="px-4 py-3 font-medium">Kwota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="bg-zinc-950">
                    <td className="px-4 py-3 text-zinc-400">
                      {transaction.id}
                    </td>
                    <td className="px-4 py-3 text-zinc-100">
                      {transaction.category}
                    </td>
                    <td className="px-4 py-3 text-zinc-100">
                      {transaction.amount} PLN
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/60 p-5">
          <h2 className="text-lg font-semibold text-white">
            Oczekiwany rezultat
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Po implementacji pokaz w tym miejscu liste kategorii wraz z suma
            kwot, na przyklad: food: 66 PLN, transport: 30 PLN, books: 55 PLN.
          </p>
        </section>
      </div>
    </main>
  )
}
