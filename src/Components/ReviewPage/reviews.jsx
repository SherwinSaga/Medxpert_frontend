import Cards2 from "../Cards/cards2";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import { useState, useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';

function Reviews(){
    const [query, setQuery] = useState("");
    const [medicines, setMedicines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    useEffect(() => {
        if (query !== "") {
            fetch(`http://localhost:8080/medicine/search?query=${query}`)
                .then(response => response.json())
                .then(data => setMedicines(data));
        } else {
            fetch('http://localhost:8080/medicine/HP_medicine') 
                .then(response => response.json())
                .then(data => setMedicines(data));
        }
    }, [query]);
  
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
          <MDBNavbar className="searchBar">
            <MDBContainer fluid>
              <MDBInputGroup tag="form" className='d-flex'>
                <input className='form-control' placeholder="Search" aria-label="Search" type='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
              </MDBInputGroup>
            </MDBContainer>
          </MDBNavbar>

            <div className="flex justify-center p-10">
            <div className="flex flex-wrap gap-2 w-full justify-center">
              {currentItems.map(medicine => (
                  <Cards2 key={medicine.id} medicine={medicine} />
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
          <Footer />
        </>
      );
}


export default Reviews;