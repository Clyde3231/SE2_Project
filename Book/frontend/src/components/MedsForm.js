import React, { useState } from "react";
import axios from "axios";
import "./MedsForm.css"; // Import a CSS file for styling

const MedsForm = () => {
  const [medicineData, setMedicineData] = useState({
    medId: "",
    medName: "",
    genericName: "",
    dosageForm: "",
    manufacturer: "",
    ageGroup: "",
    formulation: "",
    netContent: "",
    indication: "",
    sideEffects: "",
    availability: true,
    image: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setMedicineData({ ...medicineData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/app/meds/", medicineData);
      alert("Medicine added successfully!");
      setMedicineData({
        medId: "",
        medName: "",
        genericName: "",
        dosageForm: "",
        manufacturer: "",
        ageGroup: "",
        formulation: "",
        netContent: "",
        indication: "",
        sideEffects: "",
        availability: true,
        image: "",
      });
    } catch (error) {
      console.error("Error adding medicine:", error);
      alert("Error adding medicine. Please try again.");
    }
  };

  return (
    <div className="meds-form-container">
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={medicineData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Medicine Name:</label>
          <input
            type="text"
            name="medName"
            value={medicineData.medName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Generic Name:</label>
          <input
            type="text"
            name="genericName"
            value={medicineData.genericName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Dosage Form:</label>
          <select
            name="dosageForm"
            value={medicineData.dosageForm}
            onChange={handleChange}
          >
            <option value="">Select Dosage Form</option>
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Liquid">Liquid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={medicineData.manufacturer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age Group:</label>
          <select
            name="ageGroup"
            value={medicineData.ageGroup}
            onChange={handleChange}
          >
            <option value="">Select Age Group</option>
            <option value="Senior">Senior</option>
            <option value="Kids">Kids</option>
            <option value="Adults">Adults</option>
          </select>
        </div>

        <div className="form-group">
          <label>Formulation:</label>
          <input
            type="text"
            name="formulation"
            value={medicineData.formulation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Net Content:</label>
          <input
            type="text"
            name="netContent"
            value={medicineData.netContent}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Indication:</label>
          <input
            type="text"
            name="indication"
            value={medicineData.indication}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Side Effects:</label>
          <input
            type="text"
            name="sideEffects"
            value={medicineData.sideEffects}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Availability:</label>
          <input
            type="checkbox"
            name="availability"
            checked={medicineData.availability}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default MedsForm;
