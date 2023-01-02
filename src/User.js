import axios from "axios";

import { Link } from "react-router-dom";
import Usercreate from "./Usercreate";
import Student from "./Student";
import Teacher from "./Teacher";

function User() {
  
  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">User</h1>
        <Link to={"/user_create"} className=" btn btn-primary mr-2">Create User{" "}
        </Link>
<Link to={'/user_student'} className="btn btn-primary mr-2">Student</Link>
       
<Link to={"/user_teacher"} className="btn btn-primary mr-2">Teacher</Link>
        </div>
     
    </>
  );
}

export default User;
