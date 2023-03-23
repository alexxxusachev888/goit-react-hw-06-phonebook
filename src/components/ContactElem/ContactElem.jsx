import PropTypes from 'prop-types';
import { FcContacts } from 'react-icons/fc';
import { Contact, Name, Number, Button } from './ContactElem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';

export function ContactElem({id, name, number}) {
    const dispatch = useDispatch();

    return (
        <Contact key={id}>
            <FcContacts/>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <Button onClick={()=> dispatch(deleteContact(id))}>Delete</Button>
        </Contact>
    )
}

ContactElem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}