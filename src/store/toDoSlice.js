import { createSlice } from "@reduxjs/toolkit";

// Slice content
const toDoSlice = createSlice({
  name: "toDos",
  initialState: {
    cards: [],
    currentCard: {},
  },
  reducers: {
    getData(state, action) {
      state.cards = JSON.parse(localStorage.getItem("cardsData")) || [];
    },

    getCardById(state, action) {
      const card = state.cards.find((item) => item.id === action.payload.id);
      state.currentCard = card;
    },

    addCard(state, action) {
      try {
        state.cards.push(action.payload.card);
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to save data");
      }
    },

    editCard(state, action) {
      try {
        state.cards[
          state.cards.findIndex((item) => item.id === state.currentCard.id)
        ] = action.payload.card;
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to change data");
      }
    },

    deleteCard(state, action) {
      try {
        state.cards = state.cards.filter(
          (item) => item.id !== state.currentCard.id
        );
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to delete data");
      }
    },
  },
});

export const { getData, addCard, editCard, deleteCard, getCardById } =
  toDoSlice.actions;
export default toDoSlice.reducer;
