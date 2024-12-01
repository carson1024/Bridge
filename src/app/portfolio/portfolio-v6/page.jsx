import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import PortfolioTopTitle from "@/src/components/portfolio/PortfolioTopTitle";
import PortfolioGallery6 from "@/src/components/portfolio/PortfolioGallery6";
import CallToAction from "@/src/components/portfolio/CallToAction";
export const metadata = {
  title: "Portfolio V6  ",
};
const PortfolioV5 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery six
        ============================================== 
        --> */}
      <PortfolioGallery6 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV5;
