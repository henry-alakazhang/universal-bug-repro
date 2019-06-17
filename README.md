# universal-bug-repro
Minimal reproduction of what seems to be a bug in Angular Universal

Turns out it's not actually a bug, it's just that the Unversal renderer is stricter than modern browsers (makes sense), and doesn't accept "illegal" element nesting, such as a `div` inside a `p`.
