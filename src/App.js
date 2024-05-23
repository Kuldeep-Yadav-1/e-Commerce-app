import React from 'react' ;
import Navbar from './component/Navbar';
import Card from './component/Card';
import CustomerData from './component/CustomerData';

function App() {

const [isLoggedIn , setIsLoggedIn] = React.useState(false)

// isLogedIn = false



  return (
    <div>
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/> 
      <CustomerData/>
    </div>

  );
}

export default App;
