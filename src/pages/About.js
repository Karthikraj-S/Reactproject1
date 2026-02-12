import "bootstrap/dist/css/bootstrap.min.css";
import house1 from "./images/carousel-1.jpg";
import aboutImg from "./images/about.jpg";


const About = () => {
  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="container-fluid hero-container">
          <div className="row g-0 align-items-stretch">

            <div className="col-lg-6 d-flex flex-column justify-content-center px-5">
              <h1 className="fw-bold mb-2">About Us</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-success">Home</li>
                  <li className="breadcrumb-item text-success">Pages</li>
                  <li className="breadcrumb-item active">About</li>
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
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <img
                src={aboutImg}
                className="img-fluid rounded"
                alt="about"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                #1 Place To Find The Perfect Property
              </h2>

              <p className="text-muted">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Tempor erat elitr rebum at clita
                </li>
                <li className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Aliqu diam amet diam et eos
                </li>
                <li className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Clita duo justo magna dolore erat amet
                </li>
              </ul>

              <button className="btn btn-success px-4 py-2">
                Read More
              </button>
            </div>

          </div>
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

<div className="container py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold">Property Agents</h2>
    <p className="text-muted">
      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
      vero ipsum sit eirmod sit.
    </p>
  </div>

  <div className="row g-4">
    {[1, 2, 3, 4].map((_, index) => (
      <div className="col-lg-3 col-md-6" key={index}>
        <div className="card text-center border-0 shadow-sm h-100">
          <img
            src={aboutImg}
            className="card-img-top"
            alt="agent"
          />
          <div className="card-body">
            <h6 className="fw-bold mb-0">Full Name</h6>
            <small className="text-muted">Designation</small>

            <div className="d-flex justify-content-center gap-2 mt-3">
              <i className="bi bi-facebook text-success"></i>
              <i className="bi bi-twitter text-success"></i>
              <i className="bi bi-instagram text-success"></i>
            </div>
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

export default About;
