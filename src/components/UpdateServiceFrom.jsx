import  { useState } from "react";
import './updateservice.css'

function UpdateServiceForm({ service, updateService, setEditService }) {
  const [updatedService, setUpdatedService] = useState(service);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedService.name || !updatedService.description || !updatedService.price) {
      alert("Please fill all fields.");
      return;
    }
    updateService(updatedService);
    setEditService(null);
  };

  return (
    <form  className="updateservice"   onSubmit={handleSubmit}>
      <h2 className="updateheader">Edit Service</h2>
      <div className="inputfeild">
       <div>
       <input
          type="text"
          value={updatedService.name}
          onChange={(e) => setUpdatedService({ ...updatedService, name: e.target.value })}
        />
        </div>

       <div>
       <input
          type="text"
          value={updatedService.description}
          onChange={(e) => setUpdatedService({ ...updatedService, description: e.target.value })}
        />
        </div>
       <div> 
       <input
          type="number"
          value={updatedService.price}
          onChange={(e) => setUpdatedService({ ...updatedService, price: e.target.value })}
        />
        </div>
        
        
       
        <button className="updatebtn" type="submit">Update Service</button>
        <button  className="updatebtn" type="button" onClick={() => setEditService(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateServiceForm;
