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
import call from "./images/call-to-action.jpg"
import team1 from "./images/team-1.jpg";
import team2 from "./images/team-2.jpg";
import team3 from "./images/team-3.jpg";
import team4 from "./images/team-4.jpg";
import testimonial1 from "./images/testimonial-1.jpg"
import testimonial2 from "./images/testimonial-2.jpg"
import testimonial3 from "./images/testimonial-3.jpg"
import "bootstrap-icons/font/bootstrap-icons.css";



const Home = () => {

  const propertyList = [
    { tag: "For Sell", type: "Apartment", img: house1 },
    { tag: "For Rent", type: "Villa", img: house2 },
    { tag: "For Sell", type: "Office", img: house1 },
    { tag: "For Rent", type: "Building", img: house2 },
    { tag: "For Sell", type: "Home", img: house1 },
    { tag: "For Rent", type: "Shop", img: house2 },
  ];

  const agents = [
  {
    name: "John Doe",
    role: "Senior Agent",
    img: team1,
  },
  {
    name: "Sarah Smith",
    role: "Property Consultant",
    img: team2,
  },
  {
    name: "Michael Lee",
    role: "Real Estate Broker",
    img: team3,
  },
  {
    name: "Emily Brown",
    role: "Sales Executive",
    img: team4,
  },
];

const clients = [
  {
    name: "David Johnson",
    role: "Software Engineer",
    img: testimonial1,
    review:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum.",
  },
  {
    name: "Sophia Williams",
    role: "Business Owner",
    img: testimonial2,
    review:
      "Diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem.",
  },
  {
    name: "Daniel Martin",
    role: "Architect",
    img: testimonial3,
    review:
      "Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
  },
];



  
  return (
    <>
      
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-">
          
          <div className="col-lg-6 d-flex align-items-center px-5">
            <div>
              <h1 className="display-5 fw-bold">
                Find A <span className="text-success">Perfect Home</span> <br />
                To Live With Your Family
              </h1>

              <p className="text-muted my-4">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>

              <button className="btn btn-success px-4 py-2">
                Get Started
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="h-100 d-flex flex-column">
              <img
                src={house1}
                className="img-fluid h-50 object-fit-cover"
                alt="house"
              />
              <img
                src={house2}
                className="img-fluid h-50 object-fit-cover"
                alt="house"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-success py-4">
        <div className="container">
          <div className="row g-3">

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Keyword"
              />
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>Location</option>
                <option>Chennai</option>
                <option>Bangalore</option>
              </select>
            </div>

            <div className="col-md-3 d-grid">
              <button className="btn btn-dark">
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

 <div className="container py-5">
        <div className="row g-4">
          {propertyList.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card shadow-sm h-100">
                <div className="position-relative">
                  <img src={item.img} className="card-img-top" alt="" />
                  <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    {item.tag}
                  </span>
                  <span className="badge bg-light text-success position-absolute bottom-0 start-0 m-2">
                    {item.type}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="text-success">$12,345</h5>
                  <h6 className="fw-bold">Golden Urban House</h6>
                  <p className="text-muted">
                    <i className="bi bi-geo-alt text-success me-2"></i>
                    123 Street, New York
                  </p>
                  <div className="d-flex justify-content-between small text-muted">
                    <span>1000 Sqft</span>
                    <span>3 Bed</span>
                    <span>2 Bath</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  <div className="text-center mt-5">
    <button className="btn btn-success px-5 py-2">
      Browse More Property
    </button>
  </div>


<div className="container-fluid mt-5 py-5 bg-light">
  <div className="container">
    <div className="row align-items-center border rounded p-4 g-4">

      <div className="col-lg-5">
        <img
          src={call}
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
    {agents.map((agent, index) => (
      <div className="col-lg-3 col-md-6" key={index}>
        <div className="card text-center border-0 shadow-sm h-100">

          <img
            src={agent.img}
            className="card-img-top"
            alt={agent.name}
            style={{ height: "280px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h6 className="fw-bold mb-0">{agent.name}</h6>
            <small className="text-muted">{agent.role}</small>

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


<div className="container py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold">Our Clients Say!</h2>
    <p className="text-muted">
      Eirmod sed ipsum dolor sit rebum labore magna erat.
    </p>
  </div>

  <div className="row g-4">
    {clients.map((client, index) => (
      <div className="col-lg-12" key={index}>
        <div className="border rounded p-4 shadow-sm bg-white">

          <p className="text-muted mb-4">
            {client.review}
          </p>

          <div className="d-flex align-items-center gap-3">
            <img
              src={client.img}
              alt={client.name}
              className="rounded-circle"
              width="55"
              height="55"
              style={{ objectFit: "cover" }}
            />
            <div>
              <h6 className="mb-0">{client.name}</h6>
              <small className="text-muted">{client.role}</small>
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

export default Home;
