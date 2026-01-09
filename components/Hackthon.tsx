"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";

import delhi from "@/public/Hackathon/EthDelhi.png";
import mumbai from "@/public/Hackathon/EthMumbai.png";
import ethIndia from "@/public/Hackathon/EthIndia.png";

// Move static data outside component to prevent recreation on re-renders
const hackathons = [
  {
    date: "September 26th - 28th, 2025",
    name: "EthGlobal New Delhi",
    location: "New Delhi, India",
    description:
      "Developed an AI-driven RWA lending platform that bridges physical assets and DeFi through Filecoin-verified compliance and Pyth-powered valuation.",
    image: delhi,
  },
  {
    date: "December 6 - 8, 2024",
    name: "Eth India",
    location: "Bengaluru, India",
    description:
      "Developed a Web3 freelancing marketplace that combats fraud through smart contract escrows and decentralized identity verification.",
    image: ethIndia,
  },
  {
    date: "March 29th - 31st, 2024",
    name: "Eth Mumbai 🏆",
    location: "Mumbai, India",
    description:
      "A blockchain-based platform that eliminates fake credentials by offering transparent, tamper-proof verification of skills and achievements.",
    image: mumbai,
  },
] as const;

// Memoized typography components
const Description = memo(({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-sm">{children}</p>
));
Description.displayName = "Description";

const Name = memo(({ children }: { children: React.ReactNode }) => (
  <p className="font-bold tracking-normal text-lg">{children}</p>
));
Name.displayName = "Name";

const Location = memo(({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground tracking-tight text-sm">{children}</p>
));
Location.displayName = "Location";

const DateText = memo(({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-sm">{children}</p>
));
DateText.displayName = "DateText";

// Memoized individual hackathon card
const HackathonItem = memo(
  ({
    hackathon,
    isLast,
  }: {
    hackathon: (typeof hackathons)[number];
    isLast: boolean;
  }) => (
    <div
      className={`flex gap-4 px-2 ${!isLast ? "border-dashed border-b" : ""}`}
    >
      {/* image */}
      <div className="relative shrink-0">
        <Image
          src={hackathon.image}
          alt={hackathon.name}
          className="w-12 h-12 object-cover mt-2 rounded-full border"
          width={48}
          height={48}
          loading="lazy"
        />
        <div className="absolute top-0 bottom-0 right-6 -z-[10] w-[1px] bg-gray-200 dark:bg-neutral-700" />
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 py-2">
        <div>
          <DateText>{hackathon.date}</DateText>
          <Name>{hackathon.name}</Name>
          <Location>{hackathon.location}</Location>
        </div>
        <div>
          <Description>{hackathon.description}</Description>
        </div>
      </div>
    </div>
  )
);
HackathonItem.displayName = "HackathonItem";

// Memoized HackathonCard list component
const HackathonCard = memo(() => {
  const hackathonItems = useMemo(
    () =>
      hackathons.map((hackathon, index) => (
        <HackathonItem
          key={hackathon.name}
          hackathon={hackathon}
          isLast={index === hackathons.length - 1}
        />
      )),
    []
  );

  return <div>{hackathonItems}</div>;
});
HackathonCard.displayName = "HackathonCard";

export const Hackthon = memo(() => {
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
});
Hackthon.displayName = "Hackthon";

// Export typography components for external use if needed
export { Description, Name, Location, DateText as Date };
