import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-light border-top">
        <div className="container  ">
          <div className="row mt-5">
            <div className="col" style={{ fontSize: "14px" }}>
              <h2 className="fs-4 text-muted">TaskFlow</h2>
              <p className="text-muted">
                &copy;2024 TaskFlow, Inc. All rights reserved. Simple, modern
                task management.
              </p>
            </div>

            <div className="col" style={{ fontSize: "14px" }}>
              <p className="fs-6">TaskFlow</p>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                About
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Integrations
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Press & Media
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                {" "}
                Insights
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted"
                style={{ textDecoration: "none" }}
              >
                Careers
              </a>
              <br></br>
              <br></br>
            </div>

            <div className="col" style={{ fontSize: "14px" }}>
              <p className="fs-6">Support</p>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Tutorials
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Community Forum
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                System Status
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Downloads & resources
              </a>
              <br></br>
              <br></br>
            </div>

            <div className="col" style={{ fontSize: "14px" }}>
              <p className="fs-6">Account</p>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Terms of Service
              </a>{" "}
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Security
              </a>
              <br></br>
              <br></br>
              <a
                href=""
                className="text-muted "
                style={{ textDecoration: "none" }}
              >
                Privacy Policy{" "}
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
