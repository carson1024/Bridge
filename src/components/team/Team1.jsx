'use client'
import { useTeam } from "@/src/hooks";
import Image from "next/image";

const Team1 = () => {
  const {teams, isLoading, isError } = useTeam();
  console.log('Teams',teams)
  return (
    <>
      {teams?.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${member.image}`} // Use NEXT_PUBLIC_ prefix
                alt={member.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team1;
