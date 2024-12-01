// import { useRouter } from "next/router";
import DefaultHeader from "@/components/DefaultHeader";
import DefaultFooter from "@/components/DefaultFooter";

const Universities = ({ universities }) => {
//   const router = useRouter();

  if (!universities || universities.length === 0) {
    return <p>No universities available for the selected country.</p>;
  }

  return (
    <>
      <DefaultHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row gx-xxl-5">
            {universities.map((university) => (
              <div className="col-xl-4 col-sm-6" key={university.id}>
                <div className="card-style-sixteen tran3s text-center position-relative mt-30">
                  <h4 className="tx-dark">{university.name}</h4>
                  <p>{university.description || "No description available"}</p>
                  <a
                    href={`/pages-menu/university-details?university=${university.id}`}
                    className="read-more rounded-circle text-start tran3s"
                  >
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default Universities;
