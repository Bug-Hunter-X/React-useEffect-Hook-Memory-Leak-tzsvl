# React useEffect Hook Memory Leak

This repository demonstrates a common error in React applications: a memory leak caused by forgetting to return a cleanup function from a `useEffect` hook.

The `bug.js` file shows the incorrect code with a missing cleanup function in the `useEffect` hook.  This results in a continuously running `setInterval`, even after the component unmounts, leading to a memory leak.

The `bugSolution.js` file provides the correct implementation with a cleanup function that clears the interval when the component unmounts, preventing the memory leak.

## How to reproduce:

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the application.
5. Observe the behavior of the counter in the browser.
6. Unmount the component (e.g., by navigating away from the page).
7. The memory leak is not visible directly, but it's present in the background in the incorrect implementation.

## Solution:

Always include a cleanup function within the useEffect hook, using the return statement to clear any timers, event listeners, or other resources when the component is unmounted to prevent memory leaks.