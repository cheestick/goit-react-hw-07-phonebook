import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'felx-start',
        gap: 12,
        fontSize: 24,
        lineHeight: 1,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
