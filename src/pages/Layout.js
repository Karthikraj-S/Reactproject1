import { Outlet, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import icon from "./images/building.png"

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2 m-0" to="/">
  <img
    src={icon}
    alt="Makaan"
    height="40"
    style={{padding:"10px",  width: "60px",height: "60px", borderRadius: "50%", border: "3px dashed #28a745"}}
  />
  <span className="fw-bold fs-3 text-success">Makaan</span>
</Link>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse position-absolute start-50 translate-middle-x"
            id="navbarNav">
            <ul className="navbar-nav align-items-center">

              <li className="nav-item px-2">
                <NavLink className="nav-link fw-semibold" to="/">HOME</NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link fw-semibold" to="/about">ABOUT</NavLink>
              </li>

              <li className="nav-item dropdown px-2">
                <a href="#" className="nav-link dropdown-toggle fw-semibold"
                  data-bs-toggle="dropdown">
                  PROPERTY
                </a>
                <ul className="dropdown-menu shadow border-0">
                  <li><Link className="dropdown-item" to="/propertylist">Property List</Link></li>
                  <li><Link className="dropdown-item" to="/propertytype">Property Type</Link></li>
                  <li><Link className="dropdown-item" to="/propertyagent">Property Agent</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown px-2">
                <a href="#" className="nav-link dropdown-toggle fw-semibold"
                  data-bs-toggle="dropdown">
                  PAGES
                </a>
                <ul className="dropdown-menu shadow border-0">
                  <li><Link className="dropdown-item" to="/testimonial">Testimonial</Link></li>
                  <li><Link className="dropdown-item" to="/error">Error</Link></li>
                </ul>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link fw-semibold" to="/contact">CONTACT</NavLink>
              </li>

            </ul>
          </div>

          <Link className="btn btn-success ms-auto" to="/add-property">
            Add Property
          </Link>

        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
