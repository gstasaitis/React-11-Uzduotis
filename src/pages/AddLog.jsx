import { NavLink, useParams } from "react-router-dom" 
import { useEffect, useState } from "react" 
import Loading from "../components/Loading" 
import { motion } from "framer-motion";


const AddLog = () => {
  const { logId } = useParams() 
  const [petLogs, setPetLogs] = useState([]) 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null) 
  const [petName, setPetName] = useState("") 

  useEffect(() => {
    const fetchLogInfo = async () => {
      try {
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/logs/${logId}`) 
        if (resp.ok) {
          const json = await resp.json() 
          console.log("API response:", json) 
          setPetLogs(json)  
          setPetName(json[0].name) 
        } else {
          setError(`Error fetching log. Status: ${resp.status}`) 
        }
      } catch (error) {
        setError(`Error fetching log: ${error.message}`) 
      } finally {
        setLoading(false) 
      }
    } 
  
    fetchLogInfo() 
  }, [logId]) 

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
<div className="addlog">
  <div className="records">
    <h2>{petName}: Health Records</h2>
    <div className="buttonss">
    <NavLink to={`/petlogs/${logId}`}>
        <button className="button">ADD LOG</button>
      </NavLink>
      <NavLink to="/">
        <button className="delete">GO BACK</button>
      </NavLink>
    </div>
  </div>
  <motion.div 
      className="cards"
      variants={container}
      initial="hidden"
      animate="visible">
        {loading ? (
  <Loading />
  ) : error ? (
    <div className="bearload">
    <Loading/>
  <p className="bear"> No Records Found...</p>
  </div>
) : (
  petLogs.map((logEntry) => (
    <motion.div
      className="card"
      key={logEntry.id}
      variants={item}
      >
      <div className="cardhead">
        <h3>{logEntry.status}</h3>
        <p>{logEntry.description}</p>
      </div>
      <div className="date">{new Date(logEntry.dob).toLocaleDateString("lt")}</div>
    </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </>
  ) 
} 

export default AddLog 