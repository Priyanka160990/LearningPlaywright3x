# JavaScript Identifiers

## Example Reference

**File:** `04_Chapter_Literals/08_NULL_UNDEFINED.js`

```javascript
let myName = "Priyanka";      // identifier: myName
const _count = 100;           // identifier: _count
var $price1 = 49.99;          // identifier: $price1
let firstName2 = "John";      // identifier: firstName2
```

---

## Breakdown Table

| Aspect | Rule / Explanation |
|--------|-------------------|
| **Definition** | A name given to a variable, function, class, or label so you can refer to it in code |
| **Allowed characters** | Letters (`a-z`, `A-Z`), digits (`0-9`), underscore (`_`), dollar sign (`$`) |
| **First character** | Must be a **letter**, **underscore (`_`)**, or **dollar sign (`$`)** — NEVER a digit |
| **Case sensitivity** | `Name`, `name`, and `NAME` are three different identifiers |
| **Reserved keywords** | Cannot use words like `let`, `const`, `var`, `if`, `else`, `return`, `class`, `function`, `for`, `while`, etc. |
| **Length** | No fixed limit — can be as short as `a` or as long as you like |
| **Unicode support** | Letters include Unicode characters (e.g., `ñ`, `é`, `日本語`) — most engines support it |
| **Naming conventions** | `camelCase` for variables/functions, `PascalCase` for classes, `UPPER_SNAKE_CASE` for constants |

---

## Valid vs Invalid Examples Walkthrough

| Identifier | Valid? | Why |
|-----------|--------|-----|
| `myName` | ✅ Yes | Starts with letter, uses camelCase |
| `_private` | ✅ Yes | Starts with underscore (common for private/internal) |
| `$element` | ✅ Yes | Starts with dollar sign (common in jQuery) |
| `count1` | ✅ Yes | Starts with letter, has trailing digit |
| `firstName_lastName` | ✅ Yes | Underscore allowed in the middle |
| `totalAmount$` | ✅ Yes | Dollar sign allowed in the middle/end |
| `1stPlace` | ❌ No | **Starts with a digit** — the #1 rule break |
| `my-var` | ❌ No | Hyphen `-` is **not allowed** (interpreted as subtraction) |
| `class` | ❌ No | Reserved keyword |
| `const` | ❌ No | Reserved keyword |
| `return` | ❌ No | Reserved keyword |
| `void` | ❌ No | Reserved keyword |
| `new` | ❌ No | Reserved keyword |
| `first name` | ❌ No | Space is **not allowed** |

---

## Pipeline Diagram — How JavaScript Reads Your Code

```
Source Code (.js)
      |
      ▼
[ 1. Tokenization / Lexing — Scanner ]
      |
      ▼
   Tokens (identifiers, keywords, operators, literals, etc.)
      |
      ▼
[ 2. Parsing — Syntax Analyzer ]
      |
      ▼
   AST (Abstract Syntax Tree)
      |
      ▼
[ 3. Execution — V8 Engine ]
```

### Step-by-step for `let myName = "Priyanka"`:

1. **Tokenization** — The scanner breaks the line into tokens: `let` (keyword), `myName` (identifier), `=` (operator), `"Priyanka"` (string literal), `;` (terminator).
2. **Validation** — The parser checks if `myName` is a valid identifier (starts with a letter, no spaces, not a reserved keyword). It passes.
3. **AST** — The parser builds an AST node: `VariableDeclarator` with `id: {name: "myName"}` and `init: {value: "Priyanka"}`.
4. **Execution** — V8 allocates memory for `myName` and assigns the string `"Priyanka"` to it.

> If `myName` were invalid (e.g., `1stName`), the parser would throw a **SyntaxError** at step 2 before any execution happens.

---

## TLDR

| Concept | One-line summary |
|---------|------------------|
| **Identifier** | A name you give to variables, functions, or classes |
| **Valid start** | Letter, `_`, or `$` — never a digit |
| **Allowed chars** | Letters, digits, `_`, `$` — no spaces, no hyphens |
| **Keywords** | You cannot use reserved words like `let`, `if`, `class` as identifiers |
| **Case matters** | `Name` ≠ `name` ≠ `NAME` |
