import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const AddLog = () => {
  const { logId } = useParams();
  const [petLogs, setPetLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [petName, setPetName] = useState("");

  useEffect(() => {
    const fetchLogInfo = async () => {
      try {
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/logs/${logId}`);
        if (resp.ok) {
          const json = await resp.json();
          console.log("API response:", json);
          setPetLogs(json); 
          setPetName(json[0].name);
        } else {
          setError(`Error fetching log. Status: ${resp.status}`);
        }
      } catch (error) {
        setError(`Error fetching log: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchLogInfo();
  }, [logId]);

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
  <div className="cards">
        {loading ? (
  <Loading />
) : error ? (
  <p>Error: {error}</p>
) : (
  petLogs.map((logEntry) => (
    <div className="card" key={logEntry.id}>
      <div className="cardhead">
        <h3>{logEntry.status}</h3>
        <p>{logEntry.description}</p>
      </div>
      <div className="date">{new Date(logEntry.dob).toLocaleDateString("lt")}</div>
    </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AddLog;