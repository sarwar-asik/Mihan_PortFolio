import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import fb from "../assets/fbIcon.png";
import linkedIn from "../assets/LinkedINIcon.png";
import twitter from "../assets/Twiiter.png";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Swal("Your message sent", {
        icon: "success",
      });
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 block lg:flex justify-between shadow">
      <section>
        <h3 className="text-3xl font-bold font-serif"> Contact Me, </h3>
        <p className="text-slate-700 mt-2 mb-3">
          You can contact with me for any query about me . With my Social media{" "}
      
          and Contact form . I am glad to your     <br /> to your message
        </p>
        <div className="flex gap-5">
          <Image
            height={30}
            width={30}
            className="rounded-[7px] shadow-2xl"
            src={fb}
            alt="facebook"
          />
          <Image
            height={30}
            width={30}
            className="rounded-[7px] shadow-2xl"
            src={linkedIn}
            alt="linkedIn"
          />

          <Image
            height={30}
            width={30}
            className="rounded-[7px] shadow-2xl"
            src={twitter}
            alt="Twitter"
          />
        </div>
      </section>
      <section className="py-3 lg:px-[40px] lg:w-[80%] ">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
           <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
                Type Your Gmail
            </label>
           <input type="email" className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3" {...register("contacts",{required:true})} placeholder="Your gmail"/>
           </div>
           <div className="">

           </div>
           <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
               Your Message
            </label>
           <textarea type="email" className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300" {...register("contacts" ,{required:true})} placeholder="Your Message"/>
           </div>
           <div className="">
            <button type="submit"  className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold " >Send Message</button>

           </div>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
