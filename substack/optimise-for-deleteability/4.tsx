// Impure because it uses "date" from props
function Component({ date }) {
  const formatDate = () => {
    //    👇 Problem is here
    return date.toLocaleDateString('en-GB');
  }

  return <time>{formatDate()}</time>;
}
