import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsSlice';
import { Form, Label, Input, Button } from './ContactsForm.styled';

export function ContactForm () {
    const dispatch = useDispatch();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        const form = evt.target.elements;
        dispatch(addContact(form.name.value, form.number.value))
        evt.target.reset();
    }

    return (
            <Form onSubmit={handleSubmitForm}>
                <Label htmlFor={'nameInput'}>Name</Label>
                <Input
                    id={'nameInput'}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                <Label htmlFor={'phoneInput'}>Number</Label>
                <Input
                    id={'phoneInput'}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <Button type='submit'> Add contact</Button>
            </Form>
        )
}
