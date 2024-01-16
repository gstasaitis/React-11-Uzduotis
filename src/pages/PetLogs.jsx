const PetLogs = () => {
  return (
    <div className="petlogs">
      <h1>Lucky Log</h1>

      <form action="submit">
        <h3>Status</h3>
        <input type="text" placeholder="Huberium Celliulitus" />
        <h3>Description</h3>
        <textarea name="" id="" cols="30" rows="10" placeholder="Removed some fat"></textarea>
        <br />
        <button className="button">ADD PET</button>
        <button className="delete">GO BACK</button>
      </form>
    </div>
  )
}

export default PetLogs