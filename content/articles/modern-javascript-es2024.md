---
title: 'Modern JavaScript ES2024 Features'
date: '2024-06-10'
description: 'Discover the latest JavaScript features and how they can improve your development workflow'
tags: ['JavaScript', 'ES2024', 'Modern', 'Features']
author: 'Fernando Ibanez'
published: true
---

# Modern JavaScript ES2024 Features

JavaScript continues to evolve with new features that make development more efficient and enjoyable. Let's explore some of the latest additions.

## Array Grouping

The new `Object.groupBy()` method makes it easy to group array elements:

```javascript
const products = [
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Shirt', category: 'Clothing', price: 29 },
  { name: 'Phone', category: 'Electronics', price: 599 },
  { name: 'Jeans', category: 'Clothing', price: 79 }
];

const grouped = Object.groupBy(products, (product) => product.category);
// Result: { Electronics: [...], Clothing: [...] }
```

## Temporal API

The new Temporal API provides better date and time handling:

```javascript
import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();
const birthday = Temporal.PlainDate.from('1990-05-15');
const age = now.toPlainDate().since(birthday).years;

console.log(`You are ${age} years old`);
```

## Pipeline Operator

The pipeline operator makes function composition more readable:

```javascript
// Instead of:
const result = fn3(fn2(fn1(value)));

// You can write:
const result = value |> fn1 |> fn2 |> fn3;
```

## Record and Tuple

Immutable data structures for better performance and predictability:

```javascript
const record = #{ name: 'John', age: 30 };
const tuple = #[1, 2, 3, 4, 5];

// Records and tuples are deeply immutable
const newRecord = #{ ...record, age: 31 };
```

## Pattern Matching

Powerful pattern matching for complex conditional logic:

```javascript
const getValue = (input) => match (input) {
  when ({ type: 'user', name }) -> `Hello, ${name}!`;
  when ({ type: 'admin', permissions }) -> `Admin with ${permissions.length} permissions`;
  when (Number) if (input > 0) -> `Positive number: ${input}`;
  when (Number) -> `Non-positive number: ${input}`;
  default -> 'Unknown input';
};
```

## Import Assertions

Specify the expected type of imported modules:

```javascript
import json from './data.json' assert { type: 'json' };
import css from './styles.css' assert { type: 'css' };
```

## Conclusion

These modern JavaScript features continue to push the language forward, making it more powerful and developer-friendly. Stay updated with the latest features to write better code!
