const resolvers = {
  Query: {
    recipes() {
      return { title: "NudelSuppe" };
    }
  }
};

module.exports = resolvers;
