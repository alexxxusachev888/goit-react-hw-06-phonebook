import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsList = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
      state.push(action.payload)
    },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        }
      }
    }, 
    deleteContact (state, action) {
        return state.filter(({id}) => id !== action.payload);
      },
    } 
  })
export const getContacts = (state) => state.contacts;
export const { addContact, deleteContact } = contactsList.actions;
export const contactsReducer = contactsList.reducer;
