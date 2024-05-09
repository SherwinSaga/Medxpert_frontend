import Cards from "./cards";
import Navigation from "./navigation";
import { useState, useEffect } from "react";

function Homepage() {
    const [medicines, setMedicines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
      fetch('http://localhost:8080/medicine/HP_medicine') 
          .then(response => response.json())
          .then(data => setMedicines(data));
    }, []);



    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }  

    const pages = [];
    for (let i = 1; i <= Math.ceil(medicines.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = medicines.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
          <Navigation />
          <div className="flex justify-center p-10">
            <div className="flex flex-wrap gap-2 w-full justify-center">
              {currentItems.map(medicine => (
                  <Cards medicine={medicine} />
              ))}
            </div>
          </div>
          <div className="pagination">
              {pages.map(number => (
                  <button key={number} id={number} onClick={handleClick} className="mx-1 px-3 py-1 border rounded bg-blue-500 text-white">
                      {number}
                  </button>
              ))}
          </div>
        </>
      );
    }
  
export default Homepage;

