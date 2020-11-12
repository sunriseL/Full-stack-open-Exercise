import React, { useState } from 'react'
import './App.css';

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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterStringChange = (event) => {
    setNewFilterString(event.target.value)

  }

  const filterPersons = (str) => {
    const newPersons = persons.filter(person => person.name.toLowerCase().indexOf(str) != -1)
    return newPersons;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filterString} onChange={handleFilterStringChange} /></p>
      <h2>add a new</h2>
      <form>
        <div>
          <p>name: <input value={newName} onChange={handleNameChange} /></p>
          <p>number: <input value={newNumber} onChange={handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit" onClick={addPerson} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {(filterString === ""?persons:filterPersons(filterString)).map((person) => {
        return (
          <div key={person.name} >
            {person.name} {person.number}
          </div>
        )
      })}
    </div>
  )
}

export default App;
