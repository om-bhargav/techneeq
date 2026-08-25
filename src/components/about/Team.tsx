"use client";

import { useState } from "react";
import Section from "../global/section/Section";

const teamMembers = [
    {
        name: "Alex Morgan",
        role: "Founder & Managing Partner",
        image: "https://picsum.photos/id/64/800/800",
    },
    {
        name: "Jordan Carter",
        role: "Partner",
        image: "https://picsum.photos/id/91/800/800",
    },
    {
        name: "Ryan Mitchell",
        role: "Partner",
        image: "https://picsum.photos/id/177/800/800",
    },
    {
        name: "Daniel Brooks",
        role: "Principal",
        image: "https://picsum.photos/id/433/800/800",
    },
    {
        name: "Ethan Williams",
        role: "Director",
        image: "https://picsum.photos/id/447/800/800",
    },
    {
        name: "Noah Anderson",
        role: "Vice President",
        image: "https://picsum.photos/id/823/800/800",
    },
];

export default function Team() {
    const [activeMember, setActiveMember] = useState<
        (typeof teamMembers)[number] | null
    >(null);

    return (
        <Section className="bg-(--secondary-background) py-8 md:py-16">
            <Section.Header
                label="Our Team"
                title="The people behind"
                highlight="the systems."
                description="A multidisciplinary team of engineers, data scientists, and strategists building technology that helps ambitious organizations move forward."
            />

            <Section.Body>
                <div className="border-t border-foreground/15">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group relative flex cursor-pointer items-center justify-between border-b border-foreground/15 py-3 transition-colors duration-300 md:py-5"
                            onMouseEnter={() => setActiveMember(member)}
                            onMouseLeave={() => setActiveMember(null)}
                        >
                            {/* Name */}
                            <h3
                                className="
                  text-2xl
                  font-normal
                  tracking-[-0.035em]
                  text-foreground/25
                  transition-colors
                  duration-300
                  group-hover:text-foreground
                  md:text-3xl
                "
                            >
                                {member.name}
                            </h3>

                            {/* Role */}
                            <span
                                className="
                  text-xs
                  tracking-[-0.01em]
                  text-foreground/25
                  transition-colors
                  duration-300
                  group-hover:text-foreground
                  md:text-sm
                "
                            >
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </Section.Body>

            {/* Fixed image preview */}
            <div
                className={`
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          z-50
          aspect-square
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:w-[320px]
          lg:w-[380px]
          ${activeMember
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }
        `}
            >
                {activeMember && (
                    <img
                        src={activeMember.image}
                        alt={activeMember.name}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>
        </Section>
    );
}