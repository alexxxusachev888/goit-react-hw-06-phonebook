import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const contactsList = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, {payload}) {
      const isDuplicate = state.some(cnt=> {
        return cnt.name.toLowerCase() === payload.name.toLowerCase()})
      !isDuplicate ? state.push(payload) : toast.warn('That contact is on the list!');
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
    deleteContact (state, {payload}) {
        return state.filter(({id}) => id !== payload);
      },
    } 
  })
export const getContacts = (state) => state.contacts;
export const { addContact, deleteContact } = contactsList.actions;
export const contactsReducer = contactsList.reducer;
