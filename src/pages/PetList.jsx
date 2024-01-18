import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const PetList = () => {
    const { id } = useParams();
    const [petList, setPetlist] = useState([]);

    const fetchPetList = async () => {
    const resp = await fetch("https://vetbee-backend.glitch.me/v1/pets");
    const json = await resp.json();
    setPetlist(json);
};

    useEffect(() => {
        fetchPetList();
    }, []);

    const handleDelete = async (petId) => {
    try {
        const resp = await fetch(
        "https://vetbee-backend.glitch.me/v1/pets/" + petId,
        {
        method: "DELETE",
        }
    );
    if (resp.ok) {
        const newPetList = petList.filter((pet) => pet.id !== petId);
        setPetlist(newPetList);
    }
    } catch (error) {
    console.error("Error deleting pet:", error);
    }
};

return (
    <>
    <div className="petlist">
        <h1>Pet List</h1>
        <Link to="/addpet">
        <button className="button">ADD PET</button>
        </Link>
    </div>
    <motion.div className="pets">
        {!petList ? (
        <Loading />
        ) : (
        petList.map((pets) => (
            <motion.div
            key={pets.id}
            className="pet"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            >
            <h3>{pets.name}</h3>
            <p>
                {pets.dob
                ? new Date(pets.dob).toLocaleDateString("lt")
                : "Date not available"}
            </p>
            <p>{pets.client_email}</p>
            <div className="buttons">
                <Link to={`/addlog/${pets.id}`}>
                <button className="button">VIEW LOG</button>
                </Link>
                <button
                className="delete"
                onClick={() => handleDelete(pets.id)}
                >
                DELETE
                </button>
            </div>
            </motion.div>
        ))
        )}
    </motion.div>
    </>
);
};

export default PetList;
