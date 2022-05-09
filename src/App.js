import Loader from 'react-loader-spinner';
import { useFetchContactsQuery } from './redux/contactsApi';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';

const App = () => {
  const { data = [], isFetching } = useFetchContactsQuery();

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
      {data.length === 0 ? <p>You have no contacts yet</p> : <ContactList />}
    </Container>
  );
};

export { App };
