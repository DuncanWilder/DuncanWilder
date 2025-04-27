function Component() {
  /**
   * Bunch of logic for v1
   */
  const [count, setCount] = useState(0);
  /**
   * Bunch of logic for v2
   */
  const [countV2, setCountV2] = useState(0);

  if (someFeatureFlag) {
    return <h1>Version 2 - {countV2}</h1>
  }

  return <h1>Version 1 - {count}</h1>
}
