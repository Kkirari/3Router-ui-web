
import './navbar.css';



export default function Navbar() {
    return (
        <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="page4">Couter</a>
          <a href="fruit">Fruit</a>
          <a href="page1">page 1</a>
          <a href="page2">page 2</a>
          <a href="page3">page 3</a>
        </div>
      </div>
    );
}