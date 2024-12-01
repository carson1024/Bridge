"use client"; // This line makes the component a Client Component

import Link from "next/link";
import { useServices } from "@/src/hooks";

const Service1 = () => {
  const { services, isLoading, isError } = useServices();
  console.log("services:", services);

  // Handle the loading state
  if (isLoading) {
    return <p>Loading services...</p>; // Display a loading message
  }

  // Handle error state
  if (isError) {
    return <p>Error loading services. Please try again later.</p>; // Display an error message
  }

  return (
    <>
      {services?.length > 0 ? (
        services.map((service) => (
          <div className="col-xl-4 col-sm-6" key={service.id}>
            <div className="card-style-sixteen tran3s text-center position-relative mt-30">
              <div className="image">
                <img
                  src={"https://admin.bridge.jo/uploads/" + service.image}
                  alt={service.name}
                  className="lazy-img m-auto"
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    width: "auto",
                    height: "150px",
                  }}
                />
              </div>
              <h4 className="tx-dark">
                {service.service_name || "No name available"}
              </h4>
              <Link
                href={`/pages-menu/service-details?id=${service.id}`} // Send the service ID as a query parameter
                className="read-more rounded-circle text-start tran3s"
              >
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No services available.</p> // Show a message if there are no services
      )}
    </>
  );
};

export default Service1;
