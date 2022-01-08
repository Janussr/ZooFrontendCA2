import authUtils from "../utils/authUtils"
import { useNavigate } from "react-router-dom";

const User = ({ currentRoles }) => {
  const username = localStorage.getItem('user')


  const navigate = useNavigate();


  const viewAnimal = () => {
    navigate('/animal')
  }

  const viewZoo = () => {
    navigate('/zoo')
  }

  const editAnimal = () => {
    navigate('/editanimal')
  }

  return (
    <div>
      {authUtils.handleAccess('user', currentRoles) ? < h1 > Welcome {username}, this is the user page. Only users with the role: 'user' may access this.</h1> : (<h1>You do not have the correct role to view this page</h1>)}

      <br></br><br></br>
      <div className="center">
      <button className="btn btn-success m-1 " onClick={viewAnimal}>See a list of Animals</button> 
      <button className="btn btn-success m-1" onClick={viewZoo}>See a list of Zoo's</button> 
      <button className="btn btn-success m-1" onClick={editAnimal}>See a list of edit animal's</button> 
    </div>

    

    </div>
  )
}

export default User