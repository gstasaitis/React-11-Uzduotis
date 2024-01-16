const AddPet = () => {
  return (
    <div className="form">
        <h2>Add Your Pet</h2>
        <form action="" method="post">
            <h3>Pet Name:</h3>
            <input type="text" placeholder="Lockis" />
            <h3>Pet Birthday:</h3>
            <input type="date" placeholder="mm/dd/yyy" />
            <h3>Pet Email</h3>
            <input type="email" placeholder="lockis@gmail.com" />
            <br />
            <button className="button">ADD PET</button>
        </form>
    </div>
  )
}

export default AddPet