import Image from "next/image";
import psychocenter from "@/public/psycho-center.jpg";
import { Button } from "@/components/ui/button";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <>
      <main className="pt-[3rem] -mt-[3rem] bg-primary">
        <div className="w-full flex items-center max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0 text-white">
          <div className="w-full max-w-[50.5rem] flex flex-col gap-[2.5rem]">
            <h1 className="text-[1.75rem] md:text-[3rem] font-500 leading-normal">
              <span className="text-accent">Soins de Sante Mentale: </span>Prise
              en charge psychosociale individuelle et communautaire
            </h1>
            <Button className="bg-white w-max text-primary hover:scale-[1.01] hover:bg-accent hover:text-primary">
              Lire Plus
            </Button>
          </div>
        </div>
      </main>
      <AboutUs />
    </>
  );
}
