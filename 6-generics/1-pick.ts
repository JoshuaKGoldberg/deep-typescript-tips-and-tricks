const animals = {
  alligator: false,
  baboon: 1,
  cat: "abc",
};

function pick<Container>(container: Container, key: keyof Container) {
  return container[key];
}
