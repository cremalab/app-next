# `./src/utils`

This directory is intended to organize global application utilities—functions, constants, and more.

## FAQ

1. _**Are `utils` different from `helpers`, `lib`, etc.?**_ No. It's jut the name that was chosen.
2. _**What constitutes a `util`?**_ Anything that isn't a React component, type, and doesn't belong to another project-specific grouping of code (e.g. Redux related code, etc.). Application-specific logic and type transformation code are some examples of what would make a good `util`.
3. _**Must `utils` be functions?**_ No. They can be any value you need them to be, but functions tend to be the most common kind of util.
