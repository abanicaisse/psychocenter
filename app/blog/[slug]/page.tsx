import React from "react";
import activite1 from "@/public/articles/psycho-center-activite1.jpeg";
import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogDetail = () => {
  const blogArticle: {
    title: string;
    pubDate: string;
    description: string;
    location: string;
    img: StaticImageData;
    tag?: string;
    readTime?: string;
  } = {
    title: "Sensibilisation aux déplacés internes lors de la clinique mobile",
    pubDate: "05 Septembre, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos debitis ducimus velit officiis qui.",
    location: "Bukavu, Sud-Kivu",
    img: activite1,
    tag: "Activité",
    readTime: "5 min",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted to-white">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-accent/10 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-16 md:pb-16">
          {/* Category Badge */}
          {blogArticle.tag && (
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-accent text-primary hover:bg-primary/90 hover:text-white">
              {blogArticle.tag}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8 tracking-tight">
            {blogArticle.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-primary/70 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">
                {blogArticle.pubDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">
                {blogArticle.location}
              </span>
            </div>
            {blogArticle.readTime && (
              <div className="flex items-center gap-2">
                <Clock4 className="w-5 h-5 text-primary" />
                <span className="text-base font-medium">
                  {blogArticle.readTime} de lecture
                </span>
              </div>
            )}
          </div>

          {/* Lead/Description */}
          <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-light max-w-3xl">
            {blogArticle.description}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10">
          <Image
            src={blogArticle.img}
            fill
            alt={blogArticle.title}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg prose-gray max-w-none">
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 mt-0">
              Introduction
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              neque impedit consequuntur perspiciatis iste eius culpa,
              dignissimos facilis ipsa? Ipsam molestiae neque magnam laborum
              ipsa explicabo illum amet accusamus earum, vero iure saepe
              sapiente sit excepturi vitae repellat ad laudantium quae beatae
              ducimus eaque. Quibusdam, architecto natus. Doloremque harum ex
              quasi eius tempore natus eveniet aperiam aliquid vero voluptas vel
              dolore accusantium, commodi eos animi magnam recusandae veritatis
              adipisci sit ipsum ipsa explicabo doloribus?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Accusamus modi voluptates blanditiis, tempora repellat qui animi
              dolorum deserunt beatae quos delectus laudantium dolor fugiat
              perferendis dolorem incidunt itaque repudiandae quam rerum!
              Maiores a rem suscipit debitis rerum, commodi, cupiditate eaque
              maxime nam error consequatur. Eaque reprehenderit similique
              officia fugiat rem earum voluptate commodi dignissimos?
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Contexte et Objectifs
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              neque impedit consequuntur perspiciatis iste eius culpa,
              dignissimos facilis ipsa? Ipsam molestiae neque magnam laborum
              ipsa explicabo illum amet accusamus earum, vero iure saepe
              sapiente sit excepturi vitae repellat ad laudantium quae beatae
              ducimus eaque. Quibusdam, architecto natus. Doloremque harum ex
              quasi eius tempore natus eveniet aperiam aliquid vero voluptas vel
              dolore accusantium, commodi eos animi magnam recusandae veritatis
              adipisci sit ipsum ipsa explicabo doloribus?
            </p>
            <p className="text-lg text-primary/70 leading-relaxed">
              Accusamus modi voluptates blanditiis, tempora repellat qui animi
              dolorum deserunt beatae quos delectus laudantium dolor fugiat
              perferendis dolorem incidunt itaque repudiandae quam rerum!
              Maiores a rem suscipit debitis rerum, commodi, cupiditate eaque
              maxime nam error consequatur. Eaque reprehenderit similique
              officia fugiat rem earum voluptate commodi dignissimos?
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Impact et Résultats
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              neque impedit consequuntur perspiciatis iste eius culpa,
              dignissimos facilis ipsa? Ipsam molestiae neque magnam laborum
              ipsa explicabo illum amet accusamus earum, vero iure saepe
              sapiente sit excepturi vitae repellat ad laudantium quae beatae
              ducimus eaque. Quibusdam, architecto natus. Doloremque harum ex
              quasi eius tempore natus eveniet aperiam aliquid vero voluptas vel
              dolore accusantium, commodi eos animi magnam recusandae veritatis
              adipisci sit ipsum ipsa explicabo doloribus?
            </p>
            <p className="text-lg text-primary/70 leading-relaxed">
              Accusamus modi voluptates blanditiis, tempora repellat qui animi
              dolorum deserunt beatae quos delectus laudantium dolor fugiat
              perferendis dolorem incidunt itaque repudiandae quam rerum!
              Maiores a rem suscipit debitis rerum, commodi, cupiditate eaque
              maxime nam error consequatur. Eaque reprehenderit similique
              officia fugiat rem earum voluptate commodi dignissimos?
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/30">
            <h3 className="text-2xl font-bold text-primary mb-4">
              En savoir plus sur nos activités
            </h3>
            <p className="text-primary/70 mb-6">
              Découvrez comment nous contribuons au bien-être des communautés à
              travers nos programmes de sensibilisation et de soutien
              psychologique.
            </p>
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Voir toutes nos activités
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
