import Cards from "../Cards/cards";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import { useState, useEffect, React } from "react";
import "./homepage.css";
import { MDBContainer, MDBNavbar, MDBBtn, MDBInputGroup, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';

function Homepage() {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

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

  const handleClick = (number) => {
      setCurrentPage(number);
  }  

  const pages = Math.ceil(medicines.length / itemsPerPage);

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
                  <Cards key={medicine.id} medicine={medicine} />
              ))}
            </div>
          </div>
          <MDBPagination className="justify-content-center">
            <MDBPaginationItem disabled={currentPage === 1}>
                <MDBPaginationLink onClick={() => handleClick(currentPage - 1)}>Previous</MDBPaginationLink>
            </MDBPaginationItem>
            {[...Array(pages)].map((page, i) => (
                <MDBPaginationItem active={i + 1 === currentPage} key={i}>
                    <MDBPaginationLink onClick={() => handleClick(i + 1)}>{i + 1}</MDBPaginationLink>
                </MDBPaginationItem>
            ))}
            <MDBPaginationItem disabled={currentPage === pages}>
                <MDBPaginationLink onClick={() => handleClick(currentPage + 1)}>Next</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
          <Footer />
        </>
      );
    }
  
export default Homepage;
