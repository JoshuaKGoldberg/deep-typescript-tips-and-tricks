function getSafe(action: () => string) {
  try {
    return action();
  } catch (error) {}
}

getSafe(() => {
  throw "Not an error?!";
});
