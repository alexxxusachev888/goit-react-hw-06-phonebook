import { createSlice, nanoid } from "@reduxjs/toolkit";

const fakeContacts = 
{
  contacts: [ 
    {id: 'asrgasrgasrgasrgasrg', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'SDGfvdzfvbdzfvbzsfv', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'SFbzdbfzdfbzdbvzrzs', name: 'Eden Clements', number: '645-17-79'},
    {id: 'SFvbSFXsvdsxzvdSVDcs', name: 'Annie Copeland', number: '227-91-26'}],
  filter: "",
}

export const contactsList = createSlice({
  name: "contacts",
  initialState: fakeContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
      state.contacts.push(action.payload)
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
    deleteContact:{
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        }
      }
    } ,
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload.query;
        if (action.payload.query === "") {
          state.contacts = fakeContacts.contacts;
        } else {
          state.contacts = state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(action.payload.query.toLowerCase())
          });
        }
      },
      prepare (query) {
        return {
          payload: {
            query,
          }
          }
        }
      }
    } 
  })

export const getFilterQuery = (state) => state.filter;

export const { addContact, deleteContact, filterContacts } = contactsList.actions;
export const contactsReducer = contactsList.reducer;

