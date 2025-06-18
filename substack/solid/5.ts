function DocumentDownloader(document, logger) {
  const download = () => {
    try {
      // ...
    } catch (error) {
      logger.error(error);
    }
  }

  return (
    <button onClick={download}>
      Download document
    </button>
  )
}
