const init = "";
export const loginreducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
