import { Link } from "react-router-dom"
import "../index.css"

export default function Navbar() {
  return (
    <div className='bg-Crystal'>
      <h1>React MySQL</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new-course'>Create Course</Link>
        </li>
      </ul>
    </div>
  );
}
