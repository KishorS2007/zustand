import Navbar from "../Components/Navbar";
import { useLoginData } from "../Store/useLoginData";
function Home(){
const {Email,Password} = useLoginData()
    return(
        <>
        <Navbar />
        <h1>Home Page</h1>
        { 
        Email && Password ?<div className="m-5" ><h1><b>YourMail Id: </b>{Email}</h1> <h1><b>YourPassword: </b>{Password}</h1></div>:<></>
            
        }
        {/* <h1 className="display-1" style={{fontSize:"40vh"}}>Naveen Raj</h1> */}
        </>
    )
}
export default Home;