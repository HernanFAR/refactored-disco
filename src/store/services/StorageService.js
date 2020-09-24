let addIfNotExist = (element, valueIfNotExist) => {
  if (!localStorage.getItem(element)) {
    localStorage.setItem(element, valueIfNotExist);
  }
};

export default {
  namespaced: true,
  actions: {
    // eslint-disable-next-line
    initStorage ({ }) {
      addIfNotExist("friends", "[]");
      addIfNotExist("added", "0");
      addIfNotExist("deleted", "0");
    }
  }
};
