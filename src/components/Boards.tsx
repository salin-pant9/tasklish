import React from "react";

type Props = {
  name: string;
  description: string;
};

const Boards = ({ name, description }: Props) => {
  return (
    <div>
      <section className=" p-2 border-2 border-lightGreen h-[15rem] w-[15rem]  rounded-xl flex   flex-col  shadow-xl">
        <h2 className="text-[1.2rem]  font-semibold">{name}</h2>
        <p className="">Author: &quot;Author name&quot;</p>
        <h5 className="mt-3 italic text-[#B4B4B8] ">{description}</h5>
      </section>
    </div>
  );
};

export default Boards;
