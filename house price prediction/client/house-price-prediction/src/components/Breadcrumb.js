import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    // give margin to top and bottom
    <div className="ps-5 mt-3 mb-3">
      {/* link underline remove thorugh the text-decoration property */}
      <Link to="/" className="text-secondary fs-6 text-decoration-none">
        Home
      </Link>
      {pathnames.length > 0 &&
        pathnames.map((path, index) => {
          // remove the / tag with > 
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <span key={path}>
              {" > "}
              <Link
                to={routeTo}
                className="text-secondary fs-6 text-decoration-none"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </span>
          );
        })}
    </div>
  );
};

export default Breadcrumb;
