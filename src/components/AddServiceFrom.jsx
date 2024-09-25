import { useState } from "react";
import './addServiceFrom.css'

function AddServiceForm({ addService }) {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert("Please fill all fields.");
      return;
    }
    addService(newService);
    setNewService({ name: "", description: "", price: "" });
  };

  return (
    <form className="addservice" onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={newService.name}
        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newService.description}
        onChange={(e) => setNewService({ ...newService, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newService.price}
        onChange={(e) => setNewService({ ...newService, price: e.target.value })}
      />
      <button type="submit">Add Service</button>
    </form>
  );
}

export default AddServiceForm;
