"use client";
import { useServices } from "@/src/hooks"; // Your hook to fetch services
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ServiceSidebar = () => {
  const router = useSearchParams();
  const id = router.get("id");
  const { services, isLoading, isError } = useServices();

  if (isLoading) {
    return <p>Loading services...</p>;
  }

  if (isError) {
    return <p>Error loading services.</p>;
  }

  return (
    <div className="service-category mb-40">
      <h4 className="tx-dark mb-15">Services</h4>
      <ul className="style-none">
        {services.map((service) => (
          <li
            key={service.id}
            style={{
              color:
                id === String(service.id) ? "#FF0000" : "", // Use red if active, otherwise yellow
              cursor: "pointer", // Add a cursor pointer for hover effect
            }}
            // Add 'text-main-color' if it's the active service
          >
            <Link href={`/pages-menu/service-details?id=${service.id}`}>
              {service.service_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSidebar;
