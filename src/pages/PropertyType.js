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

const PropertyType = () => {
  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="container-fluid hero-container">
          <div className="row g-0 align-items-stretch">

            <div className="col-lg-6 d-flex flex-column justify-content-center px-5">
              <h1 className="fw-bold mb-2">Property Type</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-success">Home</li>
                  <li className="breadcrumb-item text-success">Pages</li>
                  <li className="breadcrumb-item active">Property Type</li>
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
  <div className="text-center mb-5">
    <h2 className="fw-bold">Property Types</h2>
    <p className="text-muted">
      Eirmod sed ipsum dolor sit rebum labore magna erat.
    </p>
  </div>

  <div className="row g-4">
    {[
      { name: "Apartment", img: apartment },
      { name: "Villa", img: villa },
      { name: "Home", img: homeImg },
      { name: "Office", img: office },
      { name: "Building", img: building },
      { name: "Townhouse", img: townhouse },
      { name: "Shop", img: shop },
      { name: "Garage", img: garage },
    ].map((item, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="card h-100 border-0 shadow-sm">

          
          <img
            src={item.img}
            className="card-img-top mx-auto mb-3 d-flex justify-content-center align-items-center"
            alt={item.name}
            style={{ height: "100px", width:"100px", width: "80px",height: "80px", borderRadius: "50%", border: "3px dashed #28a745"}}
          />

          <div className="card-body text-center">
            <h6 className="fw-bold mb-1">{item.name}</h6>
            <span className="text-success small">123 Properties</span>
          </div>

        </div>
      </div>
    ))}
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

export default PropertyType;
