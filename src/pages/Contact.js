import "bootstrap/dist/css/bootstrap.min.css";
import house1 from "./images/carousel-1.jpg";



const Contact=()=>{
    return(
        <>

      <div className="container-fluid bg-light p-0">
        <div className="container-fluid hero-container">
          <div className="row g-0 align-items-stretch">

            <div className="col-lg-6 d-flex flex-column justify-content-center px-5">
              <h1 className="fw-bold mb-2">Contact Us</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-success">Home</li>
                  <li className="breadcrumb-item text-success">Pages</li>
                  <li className="breadcrumb-item active">Contact</li>
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
    <h2 className="fw-bold">Contact Us</h2>
    <p className="text-muted">
      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
      vero ipsum sit eirmod sit.
    </p>
  </div>

  <div className="row g-4 mb-5">
    <div className="col-md-4">
      <div className="border border-success rounded text-center p-4 h-100">
        <i className="bi bi-geo-alt text-success fs-3 mb-2"></i>
        <p className="mb-0">123 Street, New York, USA</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="border border-success rounded text-center p-4 h-100">
        <i className="bi bi-envelope text-success fs-3 mb-2"></i>
        <p className="mb-0">info@example.com</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="border border-success rounded text-center p-4 h-100">
        <i className="bi bi-telephone text-success fs-3 mb-2"></i>
        <p className="mb-0">+012 345 6789</p>
      </div>
    </div>
  </div>

  <div className="row g-4">
    <div className="col-lg-6">
      <iframe
        title="map"
        className="w-100 h-100 rounded"
        style={{ minHeight: "350px", border: 0 }}
        src="https://www.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>

    <div className="col-lg-6">
      <p className="text-muted">
        The contact form is currently inactive. Get a functional and working contact
        form with Ajax & PHP in a few minutes. Just copy and paste the files.
      </p>

      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-success w-100 py-2">
              Send Message
            </button>
          </div>
        </div>
      </form>
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
    )
}
export default Contact;