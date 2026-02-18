import React from "react";
import Button from "../../component/Button";

const CTASection = () => {
  return (
    <div className="w-full py-[26px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-[18px] bg-[#000D2F] rounded-[20px] my-[60px]">
      <h4 className="text-white text-2xl font-aeonik tracking-wide">
        Want to know more about AI ML Technology
      </h4>
      <p className="text-white text-lg font-aeonik">
        Incorporate AI ML into your workflows to boost efficiency, accuracy, and
        productivity. Discover our artificial intelligence services.
      </p>
      <div className="w-fit">
        <Button to="/contact" name="Know More" />
      </div>
    </div>
  );
};

export default CTASection;
