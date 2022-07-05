const init = "";
export const languagereducer = (state = init, action) => {
  switch (action.type) {
    case "ADDLANG": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
