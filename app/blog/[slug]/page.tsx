import React from "react";
import activite1 from "@/public/articles/psycho-center-activite1.jpeg";
import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin } from "lucide-react";

const BlogDetail = () => {
  const blogArticle: {
    title: string;
    pubDate: string;
    description: string;
    location: string;
    img: StaticImageData;
    tag?: string;
  } = {
    title: "Sensibilisation aux déplacés internes lors de la clinique mobile",
    pubDate: "05 Septembre, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos debitis ducimus velit officiis qui.",
    location: "Bukavu, Sud-Kivu",
    img: activite1,
    tag: "Activité",
  };

  return (
    <main className="pt-[3rem] -mt-[2rem]">
      <div className="w-full flex items-center max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <div className={`w-full flex flex-col gap-[1.5rem]`}>
          <h1 className="text-2xl font-semibold leading-normal mb-0">
            {blogArticle.title}
          </h1>
          <div className="w-full flex-1 flex flex-col gap-6">
            <Image
              src={blogArticle.img}
              width={100}
              height={100}
              alt={`activité`}
              className="w-full rounded-[0.6rem]"
            />
          </div>
          <div className="w-full flex-1">
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-3">
              <Clock4 /> <span>{blogArticle.pubDate}</span>
            </p>
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-6">
              <MapPin /> <span>{blogArticle.location}</span>
            </p>
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-xl mb-3">
              {blogArticle.description}
            </p>
          </div>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            impedit consequuntur perspiciatis iste eius culpa, dignissimos
            facilis ipsa? Ipsam molestiae neque magnam laborum ipsa explicabo
            illum amet accusamus earum, vero iure saepe sapiente sit excepturi
            vitae repellat ad laudantium quae beatae ducimus eaque. Quibusdam,
            architecto natus. Doloremque harum ex quasi eius tempore natus
            eveniet aperiam aliquid vero voluptas vel dolore accusantium,
            commodi eos animi magnam recusandae veritatis adipisci sit ipsum
            ipsa explicabo doloribus? Accusamus modi voluptates blanditiis,
            tempora repellat qui animi dolorum deserunt beatae quos delectus
            laudantium dolor fugiat perferendis dolorem incidunt itaque
            repudiandae quam rerum! Maiores a rem suscipit debitis rerum,
            commodi, cupiditate eaque maxime nam error consequatur. Eaque
            reprehenderit similique officia fugiat rem earum voluptate commodi
            dignissimos?
          </p>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            impedit consequuntur perspiciatis iste eius culpa, dignissimos
            facilis ipsa? Ipsam molestiae neque magnam laborum ipsa explicabo
            illum amet accusamus earum, vero iure saepe sapiente sit excepturi
            vitae repellat ad laudantium quae beatae ducimus eaque. Quibusdam,
            architecto natus. Doloremque harum ex quasi eius tempore natus
            eveniet aperiam aliquid vero voluptas vel dolore accusantium,
            commodi eos animi magnam recusandae veritatis adipisci sit ipsum
            ipsa explicabo doloribus? Accusamus modi voluptates blanditiis,
            tempora repellat qui animi dolorum deserunt beatae quos delectus
            laudantium dolor fugiat perferendis dolorem incidunt itaque
            repudiandae quam rerum! Maiores a rem suscipit debitis rerum,
            commodi, cupiditate eaque maxime nam error consequatur. Eaque
            reprehenderit similique officia fugiat rem earum voluptate commodi
            dignissimos?
          </p>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            impedit consequuntur perspiciatis iste eius culpa, dignissimos
            facilis ipsa? Ipsam molestiae neque magnam laborum ipsa explicabo
            illum amet accusamus earum, vero iure saepe sapiente sit excepturi
            vitae repellat ad laudantium quae beatae ducimus eaque. Quibusdam,
            architecto natus. Doloremque harum ex quasi eius tempore natus
            eveniet aperiam aliquid vero voluptas vel dolore accusantium,
            commodi eos animi magnam recusandae veritatis adipisci sit ipsum
            ipsa explicabo doloribus? Accusamus modi voluptates blanditiis,
            tempora repellat qui animi dolorum deserunt beatae quos delectus
            laudantium dolor fugiat perferendis dolorem incidunt itaque
            repudiandae quam rerum! Maiores a rem suscipit debitis rerum,
            commodi, cupiditate eaque maxime nam error consequatur. Eaque
            reprehenderit similique officia fugiat rem earum voluptate commodi
            dignissimos?
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
