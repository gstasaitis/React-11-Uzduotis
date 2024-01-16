import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loading from "../components/Loading"

const PetList = () => {

const {id} = useParams()
const [petList, setPetlist] = useState([])
const [petName, setPetName] = useState("")
const [dob, setDob] = useState("")

const fetchPetList = async () => {
    const resp = await fetch("https://vetbee-backend.glitch.me/v1/pets")
    const json = await resp.json()
    setPetlist(json) 
}

const fetchPetNameData = async () => {
    const resp = await fetch(`https://vetbee-backend.glitch.me/v1/pets/${id}`)
    const json = await resp.json()
    setPetName(json.name)
}

const fetchPetDob = async () => {
    try {
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/pets/${id}`);

        if (resp.ok) {
            const contentType = resp.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                const json = await resp.json();

                if (json.dob) {
                    const dobDate = new Date(json.dob);
                    setDob(dobDate.toLocaleDateString("lt"));
                } else {
                    console.error("dob is undefined");
                    // Handle the case where dob is undefined
                }
            } else {
                // Handle plain text error message
                console.error(await resp.text());
                setDob("Pet not found"); // Set a default value or handle it as needed
            }
        } else if (resp.status === 404) {
            console.error("Pet not found");
            setDob("Pet not found"); // Set a default value or handle it as needed
        } else {
            console.error("Error fetching pet dob. Status:", resp.status);
            // Handle other error cases
        }
    } catch (error) {
        console.error("Error fetching pet dob:", error);
        // Handle other fetch errors appropriately
    }
};






  
  

useEffect(() => {
    fetchPetList()
    fetchPetDob()
    fetchPetNameData()
}, [])

// API INFO
// "id": 391,
// "name": "Bartas",
// "dob": 1704326400000,
// "client_email": "bartas@gmail.com",
// "archived": 0

    return (
    <>
    <div className="petlist">
        <h1>Pet List</h1>
        <Link to="/addpet">
        <button className="button">ADD PET</button>
        </Link>
    </div>
    <div className="pets">
    {!petList ? <Loading /> : petList.map((pets) => (
        <div key={pets.id} className="pet">
            <h3>{pets.name}</h3>
            {dob && <p>{dob}</p>}
            <p>{pets.client_email}</p>
    <div className="buttons">
    <Link to="/addlog">
        <button className="button">VIEW LOG</button>
    </Link>
        <button className="delete">DELETE</button>
    </div>
        </div>
    ))}
</div>
    </>
    )
}

export default PetList