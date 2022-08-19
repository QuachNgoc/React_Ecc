import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../atoms/button/Button";
import "./Form.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../atoms/input/Input";
import TextArea from "../../atoms/input/TextArea";
import { send } from "emailjs-com";

const validateSchema = yup
  .object({
    name: yup.string().required("Trường này không được để trống"),
    email: yup
      .string()
      .email("Vui lòng nhập email hợp lệ")
      .required("Trường này không được để trống"),
    message: yup
      .string()
      .required("Trường này không được để trống")
      .min(20, "Tối thiểu 20 kí tự"),
  })
  .required();

const Form = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(validateSchema),
    mode: "onChange",
  });
  // console.log(isValid);
  const onSubmit = (data) => {
    // e.preventDefault();
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        const toSend = {
          from_name: data.name,
          to_name: "ECC UIT",
          message: data.message,
          reply_to: data.email,
        };
        // console.log(data);
        // console.log(process.env);
        send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          toSend,
          process.env.REACT_APP_USER_ID
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });
        reset({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    });
  };
  return (
    <div className="form-box flex flex-col p-10 bg-white rounded-[15px]">
      <h3 className="text-secondary font-title text-[25px] mb-3">Liên hệ</h3>
      <p className="text-[#67748E] mb-4 text-[15px]">
        Nếu có yêu cầu hay phản hồi gì với chúng tôi. Vui lòng điền đầy đủ và
        chính xác thông tin vào form dưới đây. Chúng tôi sẽ phản hồi lại trong
        vòng thời gian sớm nhất.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form-group flex flex-col gap-y-3 mb-5">
          <label
            htmlFor="name"
            className="font-semibold text-[#767F82] text-[15px]"
          >
            Họ tên <span className="text-[#E43756]">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Guy Hawkins"
            control={control}
          ></Input>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="form-group flex flex-col gap-y-3 mb-5">
          <label
            htmlFor="email"
            className="font-semibold text-[#767F82] text-[15px]"
          >
            Email <span className="text-[#E43756]">*</span>
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            control={control}
          ></Input>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group flex flex-col gap-y-3">
          <label
            htmlFor="message"
            className="font-semibold text-[#767F82] text-[15px]"
          >
            Lời nhắn <span className="text-[#E43756]">*</span>
          </label>
          <TextArea
            name="message"
            id="message"
            control={control}
            placeholder="Để lại lời nhắn của bạn...."
          ></TextArea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        <Button
          className={`px-12 py-4 btn-base rounded-lg mt-10 ${
            isSubmitting ? "opacity-40" : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          Gửi
        </Button>
      </form>
    </div>
  );
};

export default Form;
