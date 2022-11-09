import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (Formdata) => {
    window.location.href = `mailto:bojan.stojicevic@outlook.com?subject=${Formdata.subject}&body= Hi, my name is ${Formdata.name}. ${Formdata.message}. (${Formdata.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 ">
        <div className="space-y-1 xl:space-y-5 md:space-y-5">
          <div className="flex items-center space-x-5 justify-center mt-20">
            <PhoneIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xs xl:text-base md:text-base">+381 64 8966459</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xs xl:text-base md:text-base">
              bojan.stojicevic@outlook.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xs xl:text-base md:text-base">Kneza Lazara 26</p>
            <p className="text-xs">12208 Kostolac, Serbia</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-28 xl:w-60 md:w-60 text-xs"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-28 xl:w-60 md:w-60 text-xs"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput text-xs"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput text-xs"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
