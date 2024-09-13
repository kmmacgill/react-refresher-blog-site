import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/aboutme">About me</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;