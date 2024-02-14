import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

// Create a beautiful date
const createDate = () => {
  const date = new Date().toString().split(" ");
  const result = `${date[0]}, ${date[2]} ${date[1]} ${date[3]}, ${date[4]}`;

  return result;
};

// Slice content
const toDoSlice = createSlice({
  name: "toDos",
  initialState: {
    cards: [],
  },
  reducers: {
    getData(state, action) {
      state.cards = JSON.parse(localStorage.getItem("cardsData")) || [];
    },

    addCard(state, action) {
      const newTaskObject = {
        title: action.payload.title,
        description: action.payload.description,
        date: createDate(),
        completed: false,
        id: uuid(),
      };
      try {
        state.cards.push(newTaskObject);
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to save data");
      } finally {
        action.payload.setTitle("");
        action.payload.setDescription("");
      }
    },

    editCard(state, action) {
      try {
        const currentCardNumber = state.cards.indexOf(
          state.cards.find((item) => item.id === action.payload.id)
        );
        const currentData = state.cards[currentCardNumber];
        currentData.title = action.payload.newTitle;
        currentData.description = action.payload.newDescription;
        currentData.completed = action.payload.newCompleted;
        currentData.date = createDate();
        state.cards[currentCardNumber] = currentData;
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to change data");
      }
    },

    deleteCard(state, action) {
      try {
        state.cards = state.cards.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("cardsData", JSON.stringify(state.cards));
      } catch {
        console.error("Failed to delete data");
      }
    },
  },
});

export const { getData, addCard, editCard, deleteCard } = toDoSlice.actions;
export default toDoSlice.reducer;
