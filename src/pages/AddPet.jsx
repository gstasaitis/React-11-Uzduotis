import { useState } from "react" 
import { useNavigate } from "react-router-dom" 

const AddPet = () => {
  const navigate = useNavigate() 
  const [data, setData] = useState({}) 

  const handleSubmit = async (e) => {
    e.preventDefault() 
    const response = await fetch('https://vetbee-backend.glitch.me/v1/pets', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    const result = await response.json() 
    console.log('API Response:', result) 

    if (result.id) {
      alert('Pet added successfully. Navigating to home page.') 
      navigate('/') 
    } 
  }

  return (
    <div className="form">
        <h2>Add Your Pet</h2>
        <form onSubmit={handleSubmit} action="" method="post">
            <h3>Pet Name:</h3>
            <input onChange={e => setData({...data, name: e.target.value})} type="text" placeholder="Taskis" />
            <h3>Pet Birthday:</h3>
            <input onChange={e => setData({...data, dob: e.target.value})} type="date" placeholder="mm/dd/yyyy" />
            <h3>Pet Email</h3>
            <input onChange={e => setData({...data, client_email: e.target.value})} type="email" placeholder="taskis@gmail.com" />
            <br />
            <button type="submit" className="button">ADD PET</button>
        </form>
    </div>
  )
}

export default AddPet 
