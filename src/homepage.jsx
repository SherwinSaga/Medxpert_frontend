import Cards from "./cards";
import Navigation from "./navigation";

function Homepage() {
    return (
      <>
        <Navigation />
        <div className="flex justify-center p-10">
          <div className="flex flex-wrap gap-2 w-full justify-center">
            <Cards />
            
          </div>
        </div>
      </>
    );
  }
  
  export default Homepage;

