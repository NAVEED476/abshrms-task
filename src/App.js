import logo from "./logo.svg";
import "./App.css";
import CustomerCreation from "./components/CustomerCreation";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";

function App() {
  return (
    <div className="App">
      {/* <div className="" style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Navbar />
          <CustomerCreation />
          <CustomerList/>
        </div>
      </div> */}
      <div className="" style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Navbar />
          <AddCustomer/>
        </div>
      </div>
    </div>
  );
}

export default App;
