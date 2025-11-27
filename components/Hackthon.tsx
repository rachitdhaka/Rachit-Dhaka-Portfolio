"use client";
import React from "react";

import delhi from "@/public/Hackathon/EthDelhi.png"
import mumbai from "@/public/Hackathon/EthMumbai.png"
import ethIndia from "@/public/Hackathon/EthIndia.png"

const hackathons = [
    {
        date: "September 26th - 28th, 2025",
        name: "EthGlobal New Delhi",
        location: "New Delhi, India",
        description: "Developed an AI-driven RWA lending platform that bridges physical assets and DeFi through Filecoin-verified compliance and Pyth-powered valuation.",
        image: delhi
    },
    {
        date: "December 6 - 8, 2024",
        name: "Eth India",
        location: "Bengaluru, India",
        description: "Developed a Web3 freelancing marketplace that combats fraud through smart contract escrows and decentralized identity verification.",
        image: ethIndia
    },
    {
        date: "March 29th - 31st, 2024",
        name: "Eth Mumbai 🏆",
        location: "Mumbai, India",
        description: "A blockchain-based platform that eliminates fake credentials by offering transparent, tamper-proof verification of skills and achievements.",
        image: mumbai
    },
];

export const Hackthon = () => {

  return (
    <div className="px-2 py-4 mt-10">
      <div className="max-w-fit mx-auto text-center mb-8">
        <p className="bg-black text-white px-2 py-0.5 text-lg rounded-lg">
          Hackathons
        </p>
      </div>

      <HackathonCard />
    </div>
  );
};
export const HackathonCard = () => {
  return (
    <div>
      {hackathons.map((hackathon, index) => (
        <div key={index} className="flex gap-4  px-2 border-dashed border-b">
          {/* image  */}
          <div className=" relative  shrink-0">
            <img
              src={hackathon.image.src}
              alt={hackathon.name}
              className="w-12 h-12 object-cover mt-2 rounded-full border"
            />
            <div className="absolute top-0 bottom-0 right-6 -z-[10] w-[1px] bg-gray-200 dark:bg-neutral-700"></div>
          </div>

          {/* content */}
          <div className="flex flex-col gap-2 py-2">
            <div>
              <Date>{hackathon.date}</Date>
              <Name>{hackathon.name}</Name>
              <Location>{hackathon.location}</Location>
            </div>
            <div>
              <Description>{hackathon.description}</Description>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
























export const Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return <p className={"text-muted-foreground text-sm"}>{children}</p>;
};

export const Name = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return <p className={"font-bold tracking-normal text-lg"}>{children}</p>;
};

export const Location = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return (
    <p className={"text-muted-foreground tracking-tight text-sm"}>{children}</p>
  );
};

export const Date = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return <p className={"text-muted-foreground text-sm"}>{children}</p>;
};
