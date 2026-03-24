// Hoisting Trap
// Output: undefined

//  Temporal Dead Zone (TDZ)
// Output: ReferenceError: Cannot access 'a' before initialization

//  Function vs Block Scope
// Output: 2
// Output: 1

//  Shadowing + TDZ Trap
// Output: ReferenceError: Cannot access 'x' before initialization

// Classic Closure Problem (var)
// Output: 3, 3, 3

// Closure with let
// Output: 0, 1, 2

//  Nested Scope (Closure)
// Output: 2

//  Re-declaration Error
// Output: SyntaxError: Identifier 'a' has already been declared

//  Function Hoisting vs Variable Hoisting
// Output: [Function: foo]

//  Scope + Mutation
// Output: 20

//  Block Scope Leakage (var)
// Output: 10

//  Block Scope (let)
// Output: ReferenceError: a is not defined

//  Parameter Shadowing
// Output: 10

//  Closure + Async Trap
// Output: 3, 3, 3

// IIFE Fix (Advanced)
// Output: 0, 1, 2