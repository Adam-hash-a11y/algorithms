# TypeScript Array Algorithms (100 Exercises)

100 array algorithm exercises implemented in TypeScript, progressing from simple to advanced. Each solution is tested, linted, and enforced with pre-commit hooks.

This project includes:
- 100 fully implemented array algorithms in TypeScript
- Unit tests for every exercise
- ESLint + Prettier for code quality
- Pre-commit hooks via Husky

---

## Tech Stack

- TypeScript
- Jest
- ESLint + Prettier
- Husky

---

## Installation

```bash
git clone https://github.com/Adam-hash-a11y/ts-array-algorithms.git
cd ts-array-algorithms
npm install
```

## Run Tests

```bash
npm run test
```

---

## Exercise Levels

| Range | Level |
|---|---|
| 1 - 30 | Simple |
| 31 - 70 | Medium |
| 71 - 100 | Medium+ |

---

## Examples

**Exercise 1 — Return numbers greater than 10**
```typescript
Input:  [5, 12, 8, 20]
Output: [12, 20]
```

**Exercise 25 — Find most frequent number**
```typescript
Input:  [1, 2, 2, 3, 3, 3]
Output: 3
```

**Exercise 43 — Pairs summing to 10**
```typescript
Input:  [1, 9, 2, 8, 5]
Output: [[1, 9], [2, 8]]
```

**Exercise 76 — Longest increasing sequence**
```typescript
Input:  [1, 2, 3, 1, 2]
Output: 3
```

**Exercise 100 — Validate increasing array**
```typescript
Input:  [1, 2, 3, 4]
Output: true
```

---

## What This Covers

- Array filtering, mapping, reducing
- Sorting and searching
- Grouping and frequency maps
- Nested and deep arrays
- String manipulation
- Object arrays
- Matrix operations
- Real world data patterns

---

## CI Pipeline

- runs all tests on every push
- runs ESLint checks
- ensures quality before merge

## Git Hooks

Pre-commit hooks via Husky ensure:
- lint rules respected
- tests pass before every commit
