const initState = {
  userData: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
