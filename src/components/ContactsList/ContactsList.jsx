import { ContactElem } from 'components/ContactElem/ContactElem';
import { ListOfContacts } from './ContactsList.styled';
import { useSelector } from "react-redux";

export function ContactsList() {
    const contacts = useSelector(state => state.contacts);

    return (
        <ListOfContacts>
            {contacts.map(({id, name, number}) => {
                return (<ContactElem id={id} name={name} number={number}/>)
            })}
        </ListOfContacts>
    )
}
