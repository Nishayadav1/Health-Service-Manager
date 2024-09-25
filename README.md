
# Healthcare Services Manager

This is a simple React web application that allows users to manage a list of healthcare services. Users can add, update, and delete services. The app is built using React with hooks (`useState` and `useEffect`) to handle state management and features form validation and basic styling.

## Features

1. **Service List**: Displays a list of healthcare services, each containing the following details:
   - Service Name
   - Description
   - Price

2. **Add New Service**: Users can add new services via a form. The form requires users to input the service name, description, and price.

3. **Update Service**: Users can update the details of existing services (name, description, and price).

4. **Delete Service**: Users can delete any service from the list.

5. **State Management**: The application uses React hooks (`useState`, `useEffect`) to manage and update the services list.

## Bonus Features
- **Form Validation**: All form fields (name, description, and price) must be filled in before a service can be added.
- **Styling**: Basic CSS is used for styling, and Bootstrap can optionally be used for enhancing the UI design.

## Live Demo
You can view the live demo of the project here: [Deployed Link](#)


## Main Components

- **ServiceList**: Displays all healthcare services, and includes "Edit" and "Delete" buttons for each service.
- **AddServiceForm**: Allows users to input details (name, description, and price) to add a new service.
- **UpdateServiceForm**: Appears when a user chooses to update a service, allowing them to edit the details.

## State Management

The state of the application is managed with React’s `useState` hook. The services are stored in a state variable and updated through corresponding functions like `addService`, `updateService`, and `deleteService`.

## Technologies Used

- **React**: Frontend framework used to build the user interface.
- **CSS**: Basic styling for the layout and UI.
- **Hooks**: `useState` and `useEffect` for state management and side effects.

Healthcare Services Manager
![image](https://github.com/user-attachments/assets/a514697f-b7f4-41a9-97ff-f3b9f5f1ba5e)

