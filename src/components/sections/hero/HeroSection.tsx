"use client";

import { useSocialLinks } from "@/hooks/use-social-links";
import { memo } from "react";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { SiGithub } from "react-icons/si";
const iconsMap = {
  github: SiGithub,
  linkedin: BsLinkedin,
  youtube: AiFillYoutube,
  twitter: AiFillTwitterCircle,
  email: AiOutlineMail,
  envelope: AiOutlineMail,
  whatsapp: AiOutlineWhatsApp,
  facebook: FaFacebook,
  resume: IoIosDocument
};

function HeroSocialLinks() {
  const { socialLinks } = useSocialLinks(true);

  return (
    <section>
      <div className="w-full mx-auto">
        <div className="text-left mb-4">
          <p
            className="text-[var(--paragraph)] text-sm pt-2"
            style={{ borderColor: "var(--card-border-color)" }}
          >
            Where to find me{" "}
            <span className="text-[var(--headline)] font-medium">(digitally)</span>{" "}
            if you wish to
          </p>
        </div>

        <div className="mt-4 w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-start gap-4">
            {socialLinks.map((social) => {
              const IconComponent = iconsMap[social.icon.toLowerCase() as keyof typeof iconsMap];
              return (
                <a
                  key={social._id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg px-3 py-2 font-medium text-xs gap-2 shadow transition focus:outline-none"
                  style={{
                    backgroundColor: "var(--card-background)",
                    color: "var(--headline)",
                    border: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--link-color)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "transparent")
                  }
                >
                  {IconComponent && (
                    <IconComponent
                      aria-hidden="true"
                      className="text-[var(--paragraph)]"
                      size={16}
                    />
                  )}
                  <span>{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


function HeroSection() {
  return (
    <div className="header max-md:pt-[50px]">
      <div className="header-content">
        <h1 className="header-title text-[var(--headline)]">Mohammad Asad Khan</h1>
        <h1 className="subtitle capitalize text-[var(--headline)]">
          Full-Stack Developer (MERN) | AI Enthusiast
        </h1>
        <p className="text-[var(--paragraph)]">
          I’m a full-stack developer with nearly 3 years of experience building scalable, secure, and high-performance web applications. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js) along with strong knowledge of modern frameworks like Next.js, React Native, and TypeScript.
          <br />
          <br />
          I’ve led teams and delivered projects ranging from e - learning platforms to AI - powered SaaS tools, consistently focusing on writing clean, maintainable code and designing user - friendly interfaces.My passion lies in solving real - world problems through technology, especially by integrating AI and automation into modern applications.
          <br />
          <br />
          Driven by curiosity, I stay up to date with advancements in AI, cloud technologies, and system design to ensure every project I work on is future - ready and impactful.My ultimate goal is to create digital solutions that not only work but add lasting value to businesses and users alike.
        </p>
      </div>

      {/* Social Links */}
      <HeroSocialLinks />
    </div>
  );
}

export default memo(HeroSection);
