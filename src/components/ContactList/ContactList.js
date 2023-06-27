import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { List} from './ContactList.styled';
import ContactListItem from '../ContactList/ContactItem';
import Notification from '../Notifications/Notifications';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <div>
      <List>
        {filteredContacts.map((contact, id) => (
          <ContactListItem key={id} contact={contact} />
        ))}
      </List>
    </div>
  );
};


export default ContactList;
