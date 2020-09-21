export default {
  namespaced: true,
  actions: {
    // eslint-disable-next-line
    initStorage ({ }) {
      if (!localStorage.getItem("friends")) {
        localStorage.setItem("friends", "[]");
      }
    }
  }
};
