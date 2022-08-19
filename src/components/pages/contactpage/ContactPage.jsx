import React from "react";
import contactImg from "../../../assets/contact.png";
import TextIcon from "../../atoms/textIcon/TextIcon";
import email from "../../../assets/email_icon.png";
import phone from "../../../assets/phone_icon.png";
import fb from "../../../assets/fb_icon.png";
import place from "../../../assets/place_icon.png";
import Form from "../../molecules/form/Form";

const ContactPage = () => {
  return (
    <section className="pb-20 pt-[60px] bg-[#FAFAFA] flex items-center justify-around px-[100px]">
      <div className="w-full max-w-[464px]">
        <Form></Form>
      </div>
      <div className="flex w-full max-w-[610px] flex-col items-center">
        <div className="w-full h-[466px] mb-5">
          <img src={contactImg} alt="" className="h-full" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-1 pl-10">
          <TextIcon img={email}>ecommerceclub.uit@gmail.com</TextIcon>
          <TextIcon img={phone}>+8478 614 1234</TextIcon>
          <TextIcon img={fb}>ECommerce Club - UIT</TextIcon>
          <TextIcon img={place}>
            Khu phố 6, phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh
          </TextIcon>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
