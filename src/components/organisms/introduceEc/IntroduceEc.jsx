import React from "react";
import introEC from "../../../assets/homepage_introEC.png";
import TextTitle from "../../atoms/textTitle/TextTitle";

const IntroduceEc = () => {
  return (
    <section className="flex flex-col mb-10 intro-ec px-[120px] items-center relative mt-20">
      <h2 className="text-[25px] font-title intro-ec-title uppercase mb-20">
        About us
      </h2>
      <div className="flex w-full mt-16">
        <div className="w-1/2">
          <img src={introEC} alt="" className="object-cover" />
        </div>
        <div className="w-1/2 pt-[96px] pr-[110px]">
          <TextTitle note="Tổng quan">Bộ môn Thương mại điện tử</TextTitle>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id
            nulla nec hendrerit ipsum malesuada leo, eget tellus. Quam phasellus
            ipsum interdum sed egestas nisl, nisl a eget. Est pulvinar cursus
            scelerisque laoreet laoreet tempor non aliqua Cursus et viverra
            dolor semper. Senectus eget orci elit sodales suspendisse. Maecenas
            quis enim, lobortis lectus eleifend eget nunc massa quam.
            Ullamcorper at gravida purus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceEc;
