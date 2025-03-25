"use client";

import React from 'react';

const ScrollingText = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden border-t border-b border-gray-200">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="mx-8 text-4xl font-serif font-light text-gray-800 whitespace-nowrap">ie | wohnrath • a | w • athié | wohnrath • ie | wohnrath • a | w • athié | wohnrath</span>
          <span className="mx-8 text-4xl font-serif font-light text-gray-800 whitespace-nowrap">ie | wohnrath • a | w • athié | wohnrath • ie | wohnrath • a | w • athié | wohnrath</span>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingText; 