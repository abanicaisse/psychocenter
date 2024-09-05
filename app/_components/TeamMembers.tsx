import Image, { StaticImageData } from "next/image";
import React from "react";

import juscarPic from "@/public/juscar.jpg";
import { Button } from "@/components/ui/button";

const TeamMembers = () => {
  const teamMembers: {
    name: string;
    pic: StaticImageData;
    role: string;
    bio: string;
  }[] = [
    {
      name: "Kajibwami Ndjovu Evariste",
      pic: juscarPic,
      role: "Co-fondateur & PDG",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas veniam enim?",
    },
    {
      name: "Pachanga",
      pic: juscarPic,
      role: "Co-fondateur & Coordonateur projet",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas veniam enim?",
    },
    {
      name: "Asifiwe Ndjovu Juscar",
      pic: juscarPic,
      role: "Psychologue Clinicien",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas veniam enim?",
    },
  ];
  return (
    <section className="pt-[1.5rem] pb-[2rem] -mt-[0rem] bg-secondary">
      <div className="w-full flex flex-col gap-[2rem] md:gap-[3.45rem] max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <h1 className="text-center text-3xl font-semibold leading-normal">
          Notre Equipe de Base
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 250px))",
            rowGap: "2rem",
            columnGap: "2.5rem",
            justifyContent: "center",
          }}
        >
          {teamMembers.map((member) => (
            <div className="w-full flex flex-col gap-4  bg-white px-4 py-6 rounded-[0.6rem]">
              <Image
                src={member.pic}
                width={250}
                height={250}
                alt={member.name}
                className="w-full rounded-[0.6rem]"
              />
              <div className="w-full flex flex-col gap-2">
                <h1 className="text-[1.25rem] font-semibold text-primary">
                  {member.name}
                </h1>
                <p className="text-base text-[#7D7D7D] underline">
                  {member.role}
                </p>
                <p className="text-[0.85rem] text-[#7D7D7D]">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-fit mx-auto bg-white text-primary hover:bg-primary hover:text-accent border-[1px] border-primary mt-0">
          Tous nos membres
        </Button>
      </div>
    </section>
  );
};

export default TeamMembers;
