import React from "react";

const V1exp = ({ logo, name, position, sd, ed }) => {
  return (
    <section className="max-w-2xl w-full px-4 sm:px-8 mt-3">
      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
        {/* Logo */}
        <div className="w-10 h-10 flex-shrink-0">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Company Info */}
        <div className="flex-1 min-w-[120px]">
          <p className="text-white text-sm font-medium truncate">{name}</p>
          <p className="text-white/70 text-xs truncate">{position}</p>
        </div>

        {/* Date Range */}
        <div className="text-neutral-400 text-xs flex-shrink-0 whitespace-nowrap">
          {sd} <span className="mx-1">-</span> {ed}
        </div>
      </div>
    </section>
  );
};

export default V1exp;
