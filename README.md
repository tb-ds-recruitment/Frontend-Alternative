# Zadanie rekrutacyjne

Projekt startowy został przygotowany w oparciu o React, TypeScript, Vite, TanStack Query, TanStack Router oraz Tailwind CSS.

## Cel zadania

Twoim zadaniem jest przygotowanie widoku aplikacji, który pobiera dane z publicznego API JSONPlaceholder i prezentuje użytkowników oraz powiązane z nimi dane.

## Wymagania funkcjonalne

### 1. Lista użytkowników

Na stronie głównej wyświetl listę użytkowników pobranych z endpointa:

```txt
https://jsonplaceholder.typicode.com/users
```

Lista powinna być zaprezentowana w formie tabeli.

Tabela powinna:

- wyświetlać pola `name`, `username` oraz `email`,
- umożliwiać filtrowanie użytkowników,
- być posortowana alfabetycznie po polu `name`.

### 2. Wybór użytkownika

Dodaj możliwość wyboru pojedynczego użytkownika z tabeli.

Po wybraniu użytkownika należy pobrać i wyświetlić jego:

- posty z endpointa:

```txt
https://jsonplaceholder.typicode.com/posts
```

- zadania z endpointa:

```txt
https://jsonplaceholder.typicode.com/todos
```

Dane powinny zostać przefiltrowane po `userId` wybranego użytkownika.

### 3. Posty i zadania

Posty oraz zadania wybranego użytkownika powinny wyświetlić się w tym samym czasie, synchronicznie.

Oznacza to, że:

- sekcja z postami i zadaniami powinna zostać pokazana dopiero wtedy, gdy oba zapytania zakończą się sukcesem,
- w trakcie pobierania danych należy pokazać stan ładowania,
- w przypadku błędu należy pokazać czytelny komunikat błędu.
- pobierz tylko posty / zadania dla wybranego użytkownika (bez filtrowania po stronie klienta)

## Wymagania techniczne

- TanStack Query jest opcjonalne.
- Do obsługi routingu użyj TanStack Router.
- Do stylowania użyj Tailwind CSS lub innej metody stylowania.
- Kod powinien być napisany w TypeScript.

## Uruchomienie projektu

Zainstaluj zależności:

```bash
npm install
```

Uruchom aplikację w trybie developerskim:

```bash
npm run dev
```

## Zadanie dodatkowe

Zadanie dodatkowe oraz jego treść widoczna na podstronie reduce-array