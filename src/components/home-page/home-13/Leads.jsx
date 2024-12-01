"use client";

import { useBranches } from "@/src/hooks";

const leadItems = [
  { image: "/images/assets/bridge.jpg", text: "Bridge Omman" },
  { image: "/images/assets/bridge.jpg", text: "Bridge Qatar" },
  { image: "/images/assets/bridge.jpg", text: "Bridge Jordan" },
  { image: "/images/assets/adoum.jpg", text: "Adoum" },
];

const Leads = () => {
  const { branches, isLoading, isError } = useBranches();
  console.log("The branches:", branches);
  console.log(process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL);
  return (
    <>
      {branches?.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card-style-fourteen text-center mt-30"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <a href={item.link}>
              <div className="icon">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${item.image}`} // Use NEXT_PUBLIC_ prefix
                  alt="icon shape"
                  className="lazy-img m-auto "
                />
              </div>
              <p className="text-uppercase fs-10 mt-0 lg-mt-10">{item.name}</p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leads;
