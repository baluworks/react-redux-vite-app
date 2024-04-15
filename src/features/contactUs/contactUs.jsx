import {Link} from "react-router-dom";

export default function ContactUs({children}) {
  return (
    <>
      <h2>Contact US</h2>
      <ul>
        <li>
          <Link to={"/contact"}>Add1</Link>
        </li>
        <li>
          <Link to={"ad2"}>Add2 </Link>
        </li>
      </ul>
      {children}
      Ph No : 9573655444 <br></br>email:baluworks@gmail.com
    </>
  );
}
