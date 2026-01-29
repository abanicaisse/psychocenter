import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import { Users, Award, Briefcase } from "lucide-react";
import Link from "next/link";

const TeamMembers = () => {
  const teamMembers: {
    name: string;
    role: string;
    bio: string;
  }[] = [
    {
      name: "Kajibwami Evariste",
      role: "Co-fondateur & PDG",
      bio: "Psychologue clinicien, secrétaire provincial de l'Union de Psychologues Cliniciens du Congo section du Sud-Kivu",
    },
    {
      name: "LUTWAMUZIRE Pachanga",
      role: "Co-fondateur & Sup./Mob./Com.",
      bio: "Superviseur et Mobilisateur Communautaire en santé mentale",
    },
    {
      name: "Asifiwe Ndjovu Guscar",
      role: "Psychologue Clinicien Co-fondateur",
      bio: "Psychologue clinicien, Superviseur en santé mentale",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-accent/5 to-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Notre Équipe
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Équipe de Base
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Des professionnels dévoués au service de votre bien-être
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary/5 hover:border-primary/20"
            >
              {/* Avatar Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-accent/10"></div>
                <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/20 blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-accent/10 blur-3xl"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {member.name}
                  </h3>
                  <Badge className="bg-accent/20 text-primary border border-accent/30 hover:bg-accent/30">
                    {member.role}
                  </Badge>
                </div>

                <p className="text-primary/70 leading-relaxed">{member.bio}</p>

                {/* Decorative bottom bar */}
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl border border-accent/30">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-primary/70 mb-6 max-w-md">
              Vous êtes un professionnel de la santé mentale ? Rejoignez-nous
              dans notre mission.
            </p>
            <Link href="/contact-us">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
