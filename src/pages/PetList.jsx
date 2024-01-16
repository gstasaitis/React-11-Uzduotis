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
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/pets/${id}`)
        if (resp.ok) {
            const json = await resp.json();
            if (json.dob) {
                const dobDate = new Date(json.dob)
                setDob(dobDate.toLocaleDateString("lt"))
            } else {
                console.error("dob is undefined")
                setDob("Date not available")
            }
        } else {
            console.error("Error fetching pet dob. Status:", resp.status)
            setDob("Error fetching pet dob")
        }
    } catch (error) {
        console.error("Error fetching pet dob:", error);
        setDob("Error fetching pet dob")
    }
}

useEffect(() => {
    fetchPetList()
    fetchPetDob()
    fetchPetNameData()
}, [])


const handleDelete = async (petId) => {
    try {
        const resp = await fetch(
            "https://vetbee-backend.glitch.me/v1/pets/" + petId,
            {
                method: "DELETE"
            }
        )
        if (resp.ok) {
            const newPetList = petList.filter((pet) => pet.id !== petId)
            setPetlist(newPetList)
        }
    } catch (error) {
        console.error("Error deleting pet:", error)
    }
}

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
            <p>{pets.dob ? new Date(pets.dob).toLocaleDateString("lt") : "Date not available"}</p> 
            <p>{pets.client_email}</p>
    <div className="buttons">
    <Link to="/addlog">
        <button className="button">VIEW LOG</button>
    </Link>
    <button
        className="delete"
        onClick={() => handleDelete(pets.id)}
        >
        DELETE
    </button>
    </div>
        </div>
    ))}
</div>
    </>
    )
}

export default PetList