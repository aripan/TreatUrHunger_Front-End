import * as ActionTypes from "./ActionTypes";
// To communicate with the server
import { baseUrl } from "../shared/baseUrl";

// HERE APPLYING REDUX THUNK. Following functions are thunk
// fetchDishes
// fetchComments
// fetchPostComment
// fetchPromos
// fetchLeaders
// postFeedback
// postFavorite
// deleteFavorite
// fetchFavorites
// registerUser
// loginUser
// logoutUser

// ACTION CREATORS FOR DISHES
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      // IF CONNECTED PROPERLY WITH SERVER
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // IF NOT CONNECTED WITH SERVER
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// ACTION CREATORS FOR COMMENTS
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      // IF CONNECTED PROPERLY WITH SERVER
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // IF NOT CONNECTED WITH SERVER
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

// POSTING COMMENT ON A DISH
export const fetchPostComment = (dishId, rating, comment) => (dispatch) => {
  const newComment = {
    dish: dishId,
    rating: rating,
    comment: comment,
  };

  const bearer = "Bearer " + localStorage.getItem("token");

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\n" + error.message);
    });
};

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

// ACTION CREATORS FOR PROMOTIONS
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then(
      // IF CONNECTED PROPERLY WITH SERVER
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // IF NOT CONNECTED WITH SERVER
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

// ACTION CREATORS FOR LEADERS
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true));

  return fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

// ACTION CREATORS FOR FEEDBACK
// POST A FEEDBACK TO THE SERVER
export const postFeedback = (feedback) => (dispatch) => {
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      console.log("Feedback", response);
      alert("Thank you for your feedback!\n" + JSON.stringify(response));
    })
    .catch((error) => {
      console.log("Feedback", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};

// ACTION CREATORS FOR FAVORITES
export const postFavorite = (dishId) => (dispatch) => {
  const bearer = "Bearer " + localStorage.getItem("token");

  return fetch(baseUrl + "favorites/" + dishId, {
    method: "POST",
    body: JSON.stringify({ _id: dishId }),
    headers: {
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((favorites) => {
      console.log("Favorite Added", favorites);
      dispatch(addFavorites(favorites));
    })
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const deleteFavorite = (dishId) => (dispatch) => {
  const bearer = "Bearer " + localStorage.getItem("token");

  return fetch(baseUrl + "favorites/" + dishId, {
    method: "DELETE",
    headers: {
      Authorization: bearer,
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((favorites) => {
      console.log("Favorite Deleted", favorites);
      dispatch(addFavorites(favorites));
    })
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading(true));

  const bearer = "Bearer " + localStorage.getItem("token");

  return fetch(baseUrl + "favorites", {
    headers: {
      Authorization: bearer,
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((favorites) => dispatch(addFavorites(favorites)))
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING,
});

export const favoritesFailed = (errmess) => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errmess,
});

export const addFavorites = (favorites) => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites,
});

// ACTION CREATORS FOR REGISTRATION
export const registerUser = (creds) => (dispatch) => {
  // We dispatch requestRegistration to kickoff the call to the API
  dispatch(requestRegistration(creds));

  return fetch(baseUrl + "users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        // If login was successful, set the token in local storage
        localStorage.setItem("token", response.token);
        localStorage.setItem("creds", JSON.stringify(creds));
        // Dispatch the success action
        dispatch(fetchFavorites());
        dispatch(receiveRegistration(response));
      } else {
        let error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(registrationError(error.message)));
};

export const requestRegistration = (creds) => {
  return {
    type: ActionTypes.REGISTRATION_REQUEST,
    creds,
  };
};

export const receiveRegistration = (response) => {
  return {
    type: ActionTypes.REGISTRATION_SUCCESS,
    token: response.token,
  };
};

export const registrationError = (message) => {
  return {
    type: ActionTypes.REGISTRATION_FAILURE,
    message,
  };
};

// ACTION CREATORS FOR LOGIN
export const loginUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds));

  return fetch(baseUrl + "users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        // If login was successful, set the token in local storage
        localStorage.setItem("token", response.token);
        localStorage.setItem("creds", JSON.stringify(creds));
        // Dispatch the success action
        dispatch(fetchFavorites());
        dispatch(receiveLogin(response));
      } else {
        let error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};

export const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds,
  };
};

export const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
  };
};

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};

// ACTION CREATORS FOR LOGOUT
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem("token");
  localStorage.removeItem("creds");
  dispatch(favoritesFailed("Error 401: Unauthorized"));
  dispatch(receiveLogout());
};

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};
