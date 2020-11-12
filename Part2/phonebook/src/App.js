import React, { useState } from 'react'
import './App.css';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterString, setNewFilterString ] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.reduce((s,p) => {
      return s || p.name === newName
    }, false)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({name: newName, number: newNumber}))
  }


  const filterPersons = (str) => {
    const newPersons = persons.filter(person => person.name.toLowerCase().indexOf(str) != -1)
    return newPersons;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} setNewFilterString={setNewFilterString}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filterString === ""?persons:filterPersons(filterString)} />
    </div>
  )
}
export default App;
