import { ContactElem } from 'components/ContactElem/ContactElem';
import { ListOfContacts } from './ContactsList.styled';
import { useSelector } from "react-redux";
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

export function ContactsList() {
    const contacts = useSelector(getContacts);
    const filterQuery = useSelector(getFilter);

    const contactsToRender =  filterQuery.trim() 
        ? contacts.filter(({ name }) => name.toLowerCase().includes(filterQuery.toLowerCase())) 
        : contacts;

    return (
        <ListOfContacts>
            {contactsToRender.map(({id, name, number}) => {
                return (<ContactElem id={id} name={name} number={number}/>)
            })}
        </ListOfContacts>
    )
}
