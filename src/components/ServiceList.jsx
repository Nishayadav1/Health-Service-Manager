import { useState } from "react";
import UpdateServiceForm from "./UpdateServiceFrom";
import './serviceList.css'

function ServiceList({ services, deleteService, updateService }) {
  const [editService, setEditService] = useState(null);

  return (
    <div className="service-list">
      <h2 className="serviceheader">  Service List</h2>
      {services.map((service) => (
        <div key={service.id} className="service-item">
        <div className="service-item1">
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price:Rs.{service.price}</p>
          <button className="servicebtn" onClick={() => deleteService(service.id)}>Delete</button>
          <button className="servicebtn"onClick={() => setEditService(service)}>Edit</button>
        </div>
          {editService && editService.id === service.id && (
            <div>  
                <UpdateServiceForm
                  service={editService}
                  updateService={updateService}
                  setEditService={setEditService}
                />
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
