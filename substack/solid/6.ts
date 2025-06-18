interface ErrorLogger {
  error: (error: Error) => void;
}

function DocumentDownloader(
  document: Document,
  logger: ErrorLogger
) {
  // ...
}
