const redux = require("redux");
const createStore = redux.createStore;

//! Step redux
const initialState = {
  value: 0,
  age: 17,
};

//* Reducer
// fungsi untuk memantau update store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return state;
  }
};

//* Store
//  wadah besar untuk menympan state secara global
const store = createStore(rootReducer);
console.log(store.getState());

//* Subscription
// proses pemanggilan perubahan yang ada pada store
store.subscribe(() => {
  console.log("store change", store.getState());
});

//* Dispatch / Dispatching Action
// proses pemanggilan sebuah instruksi yang ada pada reducer
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 15 });
console.log(store.getState());
