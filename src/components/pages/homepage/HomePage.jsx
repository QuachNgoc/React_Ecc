import React from "react";

import "./HomePage.scss";

import IntroduceClub from "../../organisms/introduceClub/IntroduceClub";
import IntroduceNews from "../../organisms/introduceNews/IntroduceNews";
import IntroduceEvents from "../../organisms/introduceEvents/IntroduceEvents";
import IntroduceEc from "../../organisms/introduceEc/IntroduceEc";
import TextTitle from "../../atoms/textTitle/TextTitle";
import IntroduceTeams from "../../organisms/introduceTeams/IntroduceTeams";
import cooperImg from "../../../assets/cooperation.png";

const HomePage = () => {
  return (
    <>
      <IntroduceClub></IntroduceClub>
      <IntroduceNews></IntroduceNews>
      <IntroduceEvents></IntroduceEvents>
      <IntroduceEc></IntroduceEc>
      <>
        <section className="cooperation px-[100px]">
          <TextTitle note="Hợp tác">
            Các đối tác ngành thương mại điện tử
          </TextTitle>
        </section>
        <img src={cooperImg} alt="" className="w-full" />
      </>
      <IntroduceTeams></IntroduceTeams>
    </>
  );
};

export default HomePage;
