import "bootstrap/dist/css/bootstrap.min.css";
import house1 from "./images/carousel-1.jpg";
import house2 from "./images/carousel-2.jpg";
import aboutImg from "./images/about.jpg";
import apartment from "./images/apartment.png";
import villa from "./images/villa.png";
import homeImg from "./images/home.png";
import office from "./images/office.png";
import building from "./images/building.png";
import townhouse from "./images/townhouse.png";
import shop from "./images/shop.png";
import garage from "./images/garage.png";

const PropertyList = () => {
  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="container-fluid hero-container">
          <div className="row g-0 align-items-stretch">

            <div className="col-lg-6 d-flex flex-column justify-content-center px-5">
              <h1 className="fw-bold mb-2">Property List</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-success">Home</li>
                  <li className="breadcrumb-item text-success">Pages</li>
                  <li className="breadcrumb-item active">Property List</li>
                </ol>
              </nav>
            </div>

            <div className="col-lg-6">
              <img
                src={house1}
                alt="Property"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid bg-success py-4">
        <div className="container">
          <div className="row g-2">

            <div className="col-md-3">
              <input
                className="form-control"
                placeholder="Search Keyword"
              />
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>Property Type</option>
              </select>
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>Location</option>
              </select>
            </div>

            <div className="col-md-3 d-grid">
              <button className="btn btn-dark fw-semibold">
                Search
              </button>
            </div>

          </div>
        </div>
      </div>
      


<div className="container py-5">
  <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
    <div>
      <h2 className="fw-bold">Property Listing</h2>
      <p className="text-muted">
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
        vero ipsum sit eirmod sit.
      </p>
    </div>

    <div className="btn-group">
      <button className="btn btn-success">Featured</button>
      <button className="btn btn-outline-success">For Sell</button>
      <button className="btn btn-outline-success">For Rent</button>
    </div>
  </div>

  <div className="row g-4">
    {[
      { tag: "For Sell", type: "Apartment" },
      { tag: "For Rent", type: "Villa" },
      { tag: "For Sell", type: "Office" },
      { tag: "For Rent", type: "Building" },
      { tag: "For Sell", type: "Home" },
      { tag: "For Rent", type: "Shop" },
    ].map((item, index) => (
      <div className="col-lg-4 col-md-6" key={index}>
        <div className="card h-100 shadow-sm">
          <div className="position-relative">
            <img
              src={house1}
              className="card-img-top"
              alt="property"
            />
            <span className="badge bg-success position-absolute top-0 start-0 m-2">
              {item.tag}
            </span>
            <span className="badge bg-light text-success position-absolute bottom-0 start-0 m-2">
              {item.type}
            </span>
          </div>

          <div className="card-body">
            <h5 className="text-success">$12,345</h5>
            <h6 className="fw-bold">Golden Urban House For Sell</h6>
            <p className="text-muted mb-3">
              <i className="bi bi-geo-alt text-success me-2"></i>
              123 Street, New York, USA
            </p>

            <div className="d-flex justify-content-between text-muted small">
              <span><i className="bi bi-rulers me-1"></i>1000 Sqft</span>
              <span><i className="bi bi-bed me-1"></i>3 Bed</span>
              <span><i className="bi bi-badge-wc me-1"></i>2 Bath</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-5">
    <button className="btn btn-success px-5 py-2">
      Browse More Property
    </button>
  </div>
</div>


      <div className="container-fluid py-5 bg-light">
  <div className="container">
    <div className="row align-items-center border rounded p-4 g-4">

      <div className="col-lg-5">
        <img
          src={aboutImg}
          className="img-fluid rounded"
          alt="agent"
        />
      </div>

      <div className="col-lg-7">
        <h3 className="fw-bold mb-3">
          Contact With Our Certified Agent
        </h3>

        <p className="text-muted">
          Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit
          sit diam justo sed vero dolor duo.
        </p>

        <div className="d-flex gap-3 flex-wrap">
          <button className="btn btn-success px-4">
            <i className="bi bi-telephone me-2"></i>
            Make A Call
          </button>

          <button className="btn btn-dark px-4">
            <i className="bi bi-calendar-check me-2"></i>
            Get Appointment
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

<footer className="bg-dark text-light pt-5">
  <div className="container">
    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <h5>Get In Touch</h5>
        <p><i className="bi bi-geo-alt me-2"></i>123 Street, New York, USA</p>
        <p><i className="bi bi-telephone me-2"></i>+012 345 67890</p>
        <p><i className="bi bi-envelope me-2"></i>info@example.com</p>
        <div className="d-flex gap-2">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6">
        <h5>Photo Gallery</h5>
        <div className="row g-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div className="col-4" key={i}>
              <img
                src={house1}
                className="img-fluid rounded"
                alt="gallery"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <h5>Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
          />
          <button className="btn btn-success">Signup</button>
        </div>
      </div>

    </div>

    <hr className="border-secondary my-4" />

    <div className="d-flex justify-content-between flex-wrap">
      <p className="mb-0">
        © Your Site Name. All Rights Reserved.
      </p>
      <div className="d-flex gap-3">
        <span>Home</span>
        <span>Cookies</span>
        <span>Help</span>
        <span>FAQs</span>
      </div>
    </div>
  </div>
</footer>



    </>
  );
};

export default PropertyList;
