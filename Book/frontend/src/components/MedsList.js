import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MedsList.css";
import Medicineitem from "./Medicineitem"; // Assuming Medicineitem is your component

const MedsList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMeds = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/app/meds/");
        setMedicines(response.data.reverse()); // Reverse the array before setting it
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMeds();
  }, []);

  return (
    <div className="cardsmed">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__containerprod">
        <div className="cards__wrapperprod">
          <div className="cards__itemsprod">
            {medicines.map((medicine) => (
              <div key={medicine.medId}>
                <Medicineitem
                  src={medicine.image} // Replace 'src' with the image field in your model
                  text={medicine.medName} // Replace 'text' with the name field in your model
                  label="Medicine" // Label or any specific information
                  path={`/meds/${medicine.medId}`} // Path based on the ID
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedsList;
