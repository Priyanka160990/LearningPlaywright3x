# JavaScript Keywords

## 1. Variable Declaration

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `let` | Yes | `let x = 10;` | Block-scoped, can be reassigned |
| `const` | Yes | `const PI = 3.14;` | Block-scoped, cannot be reassigned |
| `var` | Yes | `var y = 5;` | Function-scoped, legacy, avoid in modern code |

## 2. Control Flow — Conditional

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `if` | Yes | `if (x > 0) {}` | Executes block if condition is truthy |
| `else` | Yes | `else {}` | Fallback when `if` is false |
| `switch` | Yes | `switch (val) {}` | Match one value against multiple cases |
| `case` | Yes | `case 1:` | A branch inside `switch` |
| `default` | Yes | `default:` | Fallback branch inside `switch` |
| `? :` | No (operator) | `x > 0 ? "yes" : "no"` | Ternary — inline if/else |

## 3. Control Flow — Looping

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `for` | Yes | `for (let i=0; i<5; i++) {}` | Loop with init, condition, increment |
| `while` | Yes | `while (x < 5) {}` | Loop while condition is true |
| `do` | Yes | `do {} while (x < 5);` | Execute block once, then loop while true |
| `break` | Yes | `break;` | Exit loop immediately |
| `continue` | Yes | `continue;` | Skip rest of current iteration, go to next |
| `for...in` | Yes | `for (let key in obj) {}` | Iterate over enumerable **keys** (object) |
| `for...of` | Yes | `for (let val of arr) {}` | Iterate over **values** (iterables: array, string, map) |

## 4. Function & Scope

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `function` | Yes | `function add(a,b) { return a+b; }` | Declare a function |
| `return` | Yes | `return x;` | Exit function and send value back |
| `=>` | No (operator) | `const add = (a,b) => a+b;` | Arrow function — concise, no own `this` |
| `arguments` | Yes | `arguments[0]` | Array-like object of passed args (not in arrow fns) |
| `yield` | Yes | `yield val;` | Pause/resume a generator function |
| `yield*` | Yes | `yield* gen();` | Delegate to another generator |

## 5. Object & Class

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `class` | Yes | `class Person {}` | Blueprint for objects |
| `extends` | Yes | `class Student extends Person {}` | Inherit from a parent class |
| `super` | Yes | `super(name);` | Call parent constructor or method |
| `new` | Yes | `new Person();` | Create an instance of a class/constructor |
| `this` | Yes | `this.name` | Reference to current execution context |
| `static` | Yes | `static count() {}` | Method/property on class itself, not instances |
| `get` | Yes | `get name() {}` | Define a getter property |
| `set` | Yes | `set name(val) {}` | Define a setter property |
| `constructor` | Yes | `constructor() {}` | Method called when object is created with `new` |
| `instanceof` | Yes (operator) | `obj instanceof Person` | Check if object is instance of a class |
| `typeof` | Yes (operator) | `typeof x === "string"` | Return type of a value as string |

## 6. Error Handling

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `try` | Yes | `try { riskyCode(); }` | Wrap code that may throw |
| `catch` | Yes | `catch (err) {}` | Handle error thrown in `try` |
| `finally` | Yes | `finally { cleanup(); }` | Always runs after try/catch, regardless of error |
| `throw` | Yes | `throw new Error("fail");` | Manually throw an error |

## 7. Declaration & Scope Modifiers

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `export` | Yes | `export const x = 5;` | Make a module member available to other files |
| `import` | Yes | `import { x } from "./file.js";` | Bring in exported members from another module |
| `from` | Yes | `import x from "module";` | Part of `import` syntax — specifies source |
| `as` | Yes | `import { x as y } from "./file";` | Alias a named import/export |
| `default` | Yes | `export default class {}` | Single default export per module |
| `await` | Yes | `await promise;` | Wait for a promise to resolve (inside `async`) |
| `async` | Yes | `async function fetch() {}` | Declare a function that returns a promise |

## 8. Literals & Built-in Values

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `true` | Yes | `let flag = true;` | Boolean — truth value |
| `false` | Yes | `let flag = false;` | Boolean — false value |
| `null` | Yes | `let x = null;` | Intentional empty / nothing |
| `undefined` | Yes | `let x; // undefined` | Variable declared but not assigned |
| `NaN` | No (global prop) | `isNaN("abc"); // true` | Not a Number — result of invalid math |
| `Infinity` | No (global prop) | `1 / 0; // Infinity` | Number larger than max representable |

## 9. Object Operations

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `delete` | Yes (operator) | `delete obj.prop;` | Remove a property from an object |
| `in` | Yes (operator) | `"name" in obj` | Check if a property exists in an object |
| `void` | Yes (operator) | `void 0; // undefined` | Evaluate expression and return `undefined` |

## 10. Collection Types (ES6+)

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `Map` | No (global) | `new Map()` | Key-value with any type as key |
| `Set` | No (global) | `new Set([1,2,3])` | Collection of unique values |
| `WeakMap` | No (global) | `new WeakMap()` | Map with weak refs — keys must be objects |
| `WeakSet` | No (global) | `new WeakSet()` | Set with weak refs — values must be objects |
| `Symbol` | No (global) | `Symbol("id")` | Unique, immutable primitive — often used as object keys |

## 11. Meta Programming (ES6+)

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `Reflect` | No (global) | `Reflect.get(obj, "name")` | Built-in object for interceptable operations |
| `Proxy` | No (global) | `new Proxy(obj, handler)` | Create a custom behavior for fundamental operations |
| `of` | No | `Array.of(1,2,3)` | Create array from arguments (part of Array) |
| `target` | No | Defined in Proxy handler | The original object being proxied |

## 12. Strict Mode

| Keyword | Reserved | Example | Thumb Rule |
|---------|----------|---------|------------|
| `"use strict"` | No (directive) | `"use strict";` | Enables stricter parsing and error handling |

## 13. Reserved for Future Use

| Keyword | Reserved | Notes |
|---------|----------|-------|
| `enum` | Yes | Reserved — not currently used |
| `implements` | Yes | Reserved (strict mode) |
| `interface` | Yes | Reserved (strict mode) |
| `package` | Yes | Reserved (strict mode) |
| `private` | Yes | Reserved (strict mode) |
| `protected` | Yes | Reserved (strict mode) |
| `public` | Yes | Reserved (strict mode) |
| `await` (outside async) | Yes | Reserved in module scope |

---

## Quick Thumb Rules

| Rule | Explanation |
|------|-------------|
| **Cannot be identifiers** | Keywords like `let`, `if`, `class` cannot be used as variable/function names |
| **Reserved !== usable** | Some are reserved for future use (`enum`) — you can't use them anywhere |
| **`let` vs `const`** | Use `const` by default, `let` only when you need to reassign |
| **`var` is legacy** | Avoid `var` — use `let`/`const` for predictable scoping |
| **`null` vs `undefined`** | `null` is intentionally assigned; `undefined` means "not assigned" |
| **`typeof null` is `"object"`** | This is a known JS bug since day one — remember it for interviews |
| **`delete` only works on object properties** | Cannot delete variables declared with `let`/`const`/`var` |
| **`void` always returns `undefined`** | `void(0)` is the safest way to get `undefined` |
| **Not keywords but act like them** | `NaN`, `Infinity`, `undefined` are global properties, not reserved words — but treat them as reserved anyway |
