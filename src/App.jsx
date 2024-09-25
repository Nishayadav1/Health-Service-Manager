import { useState } from "react";
import ServiceList from "./components/ServiceList";
import AddServiceForm from "./components/AddServiceFrom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [services, setServices] = useState([
    { id: 1, name: "General Checkup", description: "Basic health checkup", price: 50 },
    { id: 2, name: "Dental Cleaning", description: "Complete dental cleaning", price: 75 }
  ]);

  // Add a new service
  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="App">
       <Header/>
      <div className="main-container">
      <div className="main-container1">
        <AddServiceForm addService={addService} />
      </div>  

        <div className="main-container2">
            <ServiceList
              services={services}
              deleteService={deleteService}
              updateService={updateService}/>
        </div>  

      </div>

    </div>
  );
}

export default App;
