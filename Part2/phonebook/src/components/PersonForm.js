

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, addPerson}) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }


    return (
        <form>
        <div>
          <p>name: <input value={newName} onChange={handleNameChange} /></p>
          <p>number: <input value={newNumber} onChange={handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit" onClick={addPerson} >add</button>
        </div>
      </form>
    )
}

export default PersonForm;