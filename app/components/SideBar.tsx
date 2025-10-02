import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const SideBar = () => {
  const nav = [
    { name: "XJTU", icon: faSchool },
    { name: "Xi'an, China", icon: faLocationDot },
    { name: "a@likecat.cn", icon: faEnvelope, href: "mailto:a@likecat.cn" },
    { name: "alikecat", icon: faGithub, href: "https://github.com/alikecat" },
    {
      name: "0000-0002-1867-0243",
      icon: faOrcid,
      href: "https://orcid.org/0000-0002-1867-0243",
    },
  ];
  return (
    <div className="shrink-0 w-full mx-auto">
      <div className="sticky top-28 flex flex-col py-4 space-y-4 font-sans">
        <Image
          src="/Profile.jpg"
          alt="Professional Profile Photo"
          width={256}
          height={256}
          quality={100}
          className="mx-auto rounded-full border-4 border-cyan-500/30 shadow-2xl transform hover:scale-105 hover:brightness-110 hover:shadow-cyan-500/30 transition-all duration-500"
        />
        <h1 className="font-dune font-bold text-2xl text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Bojun Zhang
        </h1>
        <p className="font-mono text-center text-slate-300 leading-relaxed">
          PhD Candidate in Mechanical Engineering
          <br />
          {`Xi'an Jiaotong University`}
        </p>
        <div className="table leading-loose border-t border-white/20 py-4 font-bold">
          {nav.map((link) =>
            link.href ? (
              <Link
                key={link.name}
                href={link.href}
                className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out table-row"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="table-cell m-auto"
                />
                <span className="table-cell">{link.name}</span>
              </Link>
            ) : (
              <div key={link.name} className="table-row">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="table-cell m-auto"
                />
                <span className="table-cell">{link.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}