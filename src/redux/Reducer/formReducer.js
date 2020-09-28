import * as ActionTypes from "../ActionTypes";

export const Initial = {
  firstName: "",
  lastName: "",
  telNum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};

const InitialFeedback = (state = Initial, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        Initial: action.payload,
      };

    default:
      return state;
  }
};
