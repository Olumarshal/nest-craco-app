import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the React App</h1>
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
};

export default Home;
