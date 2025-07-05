"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface Member {
  name: string;
  image: string;
}

export default function TeamSection({ members }: { members: Member[] }) {
  return (
    <section className="bg-[#FBEDE4] px-4 sm:px-6 lg:py-20">
      <p className="text-center text-[#EF9273] text-sm font-medium mb-2">---------- Team ----------</p>
      <h2 className="text-4xl font-bold text-[#1F1F1F] text-center mb-12">Meet Our Team</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {members.map((member, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden group shadow-md transition-transform hover:scale-[1.02]">
            <Image src={member.image} alt={member.name} width={300} height={400} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent px-4 pt-8 pb-4 text-center text-white">
              <h3 className="text-base font-semibold">{member.name}</h3>
              <p className="text-xs text-gray-300">Role</p>
              <div className="mt-2 flex justify-center gap-4 text-sm text-white">
                <Link href="#" className="hover:text-[#cb997e] transition"><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link href="#" className="hover:text-[#cb997e] transition"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="#" className="hover:text-[#cb997e] transition"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}