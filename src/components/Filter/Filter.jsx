import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/filterSlice';
import { getFilter } from '../../redux/filterSlice';

export function Filter() { 
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <Label>
            Find contact by name: 
            <Input 
            type="text" 
            value={filter} 
            onChange={(evt)=> dispatch(filterContacts(evt.target.value))}>
            </Input>
        </Label>
        
    )
}