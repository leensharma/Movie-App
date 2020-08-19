import React from "react";
function Footer() {
  return (
    <div>
      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

      <div className="row m-3">
        <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
          <h3 style={{ color: "white" }}>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            error earum perspiciatis praesentium sint ipsum provident blanditiis
            pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
            culpa cupiditate placeat facilis repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
            dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
            earum?
          </p>
          <center>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f4c10f" }}>
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f4c10f" }}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f4c10f" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f4c10f" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </center>
        </div>
        <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
          <h3 style={{ color: "white" }}>KEEP IN TOUCH</h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Address:
                </strong>{" "}
                city, state, country
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Phone:
                </strong>{" "}
                +01 00 00 00
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-envelope"></i> Email:
                </strong>{" "}
                info@infomail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
