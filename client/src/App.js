import Messenger from "./components/Messenger";
import Accountprovider from "./context/Accountprovider";
import Templateprovider from "./theme/Templateprovider";
import UserProvider from "./context/UserProvider";

function App() {


  return (
    <Templateprovider>
      <UserProvider> 
    <Accountprovider>
           <Messenger  />
   </Accountprovider>
   </UserProvider>
   </Templateprovider>
  );
}

export default App;
