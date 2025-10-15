import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <h1 className="mt-5 fs-2 mb-4">Ready to Streamline Your Tasks?</h1>
        <p className="text-muted mb-3">
          Join thousands of organized individuals and teams. Start managing your tasks more efficiently today.
        </p>
        <button
          className="fs-6 p-2 btn btn-primary mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Get Started for Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
