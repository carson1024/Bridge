"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import { useUniversityDetail } from "@/src/hooks";
import { useSearchParams } from "next/navigation";
import SpinnerShow from "@/src/components/common/SpinnerShow";
import Link from "next/link";

const UniversityDetail = () => {
  const router = useSearchParams();
  const universityName = router.get("university");
  const { university, isLoading, isError } = useUniversityDetail(universityName); // Fetch university data

  if (isLoading) {
    return <SpinnerShow />;
  }

  if (isError) {
    return <p>Error loading university details.</p>;
  }

  if (!university) {
    return <p>No university found.</p>;
  }

  return (
    <>
      {/* Header */}
      <DefaulHeader />

      {/* University Details Section */}
      <div className="university-details justify-center items-center position-relative mt-140 ">
        <div className="container">
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${university.Images}`} // Use NEXT_PUBLIC_ prefix
            alt={university.name}
            className="main-img-mea mb-30"
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="university-details-meta text-center">
                <h2 className="main-title tx-dark mb-30">{university.name}</h2>
                <p className="text-lg tx-dark mb-20">
                  Location: {university.location}
                </p>
                <p className="mb-50">{university.description}</p>

                <Link
                  href="/contact/contact"
                  className="btn-twentyOne fw-500 tran3s"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.university-details */}
      {/* Footer */}
      <DefaultFooter />
    </>
  );
};

export default UniversityDetail;
