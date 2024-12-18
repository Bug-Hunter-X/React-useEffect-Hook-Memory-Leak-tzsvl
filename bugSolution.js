```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Correct: Return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```