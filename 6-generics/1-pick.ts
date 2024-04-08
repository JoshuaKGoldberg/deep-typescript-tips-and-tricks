const animals = {
  alligator: false,
  baboon: 1,
  cat: "abc",
};

function get<Container>(container: Container, key: keyof Container) {
  return container[key];
}
