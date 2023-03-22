import { useDispatch } from "react-redux";
import { addContact } from '../../redux/reducer';
import { Form, Label, Input, Button } from './ContactsForm.styled';

export function ContactForm () {

    const dispatch = useDispatch();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        dispatch(addContact(form.elements.name.value, form.elements.number.value))
        form.reset();
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

/* export const ContactForm = (onAddContact) => {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
         number: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })
   
    return (
        <Formik
        initialValues={{
            name: '',
            number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit= {(values, actions) => {
            onAddContact({...values, id: nanoid()});
            actions.resetForm()
        
        }}
      >
        <Form>
          <Label htmlFor="firstName">Name</Label>
          <Field id="firstName" name="name" type="text" />
          <ErrorMessage name="name" />

          <Label htmlFor="phoneNumber">Number</Label>
          <Field id="phoneNumber" name="number" type="number" />
          <ErrorMessage name="number" componenet="span"/>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>)
    }; */


/* export const ContactForm = (onAddContact) => {
   
    const formik = useFormik({
      initialValues: {
        name: '',
        number: '',
      },
      validationSchema: Yup.object().shape({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
          number: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      }),
      onSubmit: (values, actions) => {
        onAddContact({...values, id: nanoid()});
        console.log(values)
    
      }
    });

    return (
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="firstName">Name</Label>
        <Input
          id="firstName"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <Label htmlFor="phoneNumber">Number</Label>
        <Input
          id="phoneNumber"
          name="number"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
  
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }; */


