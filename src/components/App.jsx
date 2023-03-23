import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { Container, Header, SubHeader } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App () {

return (
<Container>
    <Header>Phonebook</Header>
      <ContactForm/>
    <SubHeader>Contacts</SubHeader>
        <Filter/>
      <ContactsList/>
      <ToastContainer/>
</Container>);
};
