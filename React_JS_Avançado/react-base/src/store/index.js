import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOTAO_CLICADO":
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    default:
      return state;
  };
}

const store = configureStore({
  reducer: reducer
});

export default store;
