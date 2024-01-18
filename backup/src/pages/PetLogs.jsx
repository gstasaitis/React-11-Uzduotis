import { useState, useEffect } from "react" 
import { Link, useNavigate, useParams } from "react-router-dom" 

const PetLogs = () => {
  const navigate = useNavigate() 
  const [data, setData] = useState({}) 
  const { logId } = useParams() 
  const [petName, setPetName] = useState("") 

  useEffect(() => {
    const fetchPetInfo = async () => {
      try {
        const response = await fetch(`https://vetbee-backend.glitch.me/v1/pets/${logId}`) 
        if (response.ok) {
          const petData = await response.json() 
          setPetName(petData.name) 
          
        } else {
          console.error(`Error fetching pet information. Status: ${response.status}`) 
        }
      } catch (error) {
        console.error(`Error fetching pet information: ${error.message}`) 
      }
    } 

    fetchPetInfo() 
  }, [logId]) 

  const submitLog = async (e) => {
    e.preventDefault() 

    if (!logId) {
      console.error('Invalid logId') 
      return 
    }

    const logData = {
      pet_id: logId,
      description: data.description,
      status: data.status,
    } 

    try {
      const response = await fetch('https://vetbee-backend.glitch.me/v1/logs/', {
        method: 'POST',
        body: JSON.stringify(logData),
        headers: {
          'Content-Type': 'application/json'
        }
      }) 

      const result = await response.json() 
      console.log('API Response:', result) 
      navigate(`/addlog/${logId}`) 
      
      if (result.id) {
        alert('Pet log added')
      }
    } catch (error) {
      console.error('API Error:', error.message) 
      alert('An error occurred. Please try again.') 
    }
  } 
  
  const goBack = () => {
    navigate(`/addlog/${logId}`) 
  } 

  return (
    <div className="petlogs">
      <h1>{petName}: Log</h1>

      <form onSubmit={submitLog}>
        <h3>Status</h3>
        <input onChange={(e) => setData({ ...data, status: e.target.value })} type="text" placeholder="Huberium Celliulitus" />
        <h3>Description</h3>
        <textarea onChange={(e) => setData({ ...data, description: e.target.value })} name="" id="" cols="30" rows="10" placeholder="Removed some fat"></textarea>
        <br />
        <button type="submit" className="button">ADD LOG</button>
        <button type="button" className="delete" onClick={goBack}>
          GO BACK
        </button>
      </form>
    </div>
  ) 
} 

export default PetLogs 
