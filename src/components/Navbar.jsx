export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <h2>
          <div className="navbar-logo">✈️</div> Wanderly
        </h2>
        <ul>
          <li>
            <button>My Trips</button>
          </li>
          <li>
            <button>Explore</button>
          </li>
          <div className="profile-button">
            <button>CR</button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
