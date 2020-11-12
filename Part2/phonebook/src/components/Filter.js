
const Filter = ({filterString, setNewFilterString}) => {
    const handleFilterStringChange = (event) => {
        setNewFilterString(event.target.value)
    
      }
    return (
        <p>filter shown with <input value={filterString} onChange={handleFilterStringChange} /></p>
    )
}

export default Filter;