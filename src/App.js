import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from './redux/contactsApi';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';
import { getFilter } from './redux/selectors';

const App = () => {
  const { data = [], isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = data.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter),
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {data.length > 0 && <Filter />}
      {isFetching && data.length === 0 && (
        <Loader
          className="loader"
          type="Rings"
          color="orange"
          height={100}
          width={100}
        />
      )}
      {filteredContacts.length !== 0 && <ContactList />}
      {data.length === 0 && !isFetching && <p>You have no contacts yet</p>}
    </Container>
  );
};

export { App };
