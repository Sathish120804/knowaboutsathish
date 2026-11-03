import React, { useState } from 'react';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Exact Indian country code + Sathish's number 9940816288 + prefilled inquiry message
  const whatsappUrl =
    "https://wa.me/919940816288?text=Hi%20Sathish%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%20Please%20let%20me%20know%20how%20we%20can%20proceed.";

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2.5 print:hidden pointer-events-auto"
    >
      {/* Desktop Tooltip Label */}
      <div
        className={`hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border border-borderTheme-light dark:border-borderTheme-dark text-textMain-light dark:text-textMain-dark shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-200 pointer-events-none select-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Let's Discuss Your Project</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sathish on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        title="Contact Sathish on WhatsApp"
      >
        {/* Subtle ripple / beacon on hover */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 animate-ping pointer-events-none" />

        {/* Recognizable WhatsApp Icon SVG */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.507 14.307l-.009.075c-.236-.12-.1.05-1.428-.682-.394-.16-.677-.14-.97.18-.302.327-.852 1.054-.997 1.258-.152.204-.326.24-.564.12-.236-.118-.996-.367-1.898-1.17-.7-.624-1.173-1.393-1.31-1.63-.138-.236-.015-.363.104-.482.107-.107.238-.278.356-.418.12-.14.16-.24.238-.399.08-.16.04-.3-.02-.42-.06-.12-.533-1.285-.732-1.76-.193-.46-.39-.398-.535-.406-.138-.008-.297-.01-.456-.01-.16 0-.418.06-.637.3-.218.238-.835.815-.835 1.988 0 1.172.854 2.304.973 2.464.12.16 1.68 2.564 4.07 3.595.568.246 1.012.393 1.358.503.57.182 1.09.156 1.5.095.458-.068 1.408-.576 1.607-1.132.2-.556.2-1.033.14-1.133-.06-.1-.219-.16-.456-.28zM12.04 2C6.528 2 2.05 6.478 2.05 11.99c0 1.763.46 3.486 1.332 5.002L2 22l5.163-1.354c1.464.798 3.112 1.218 4.876 1.218 5.512 0 9.99-4.478 9.99-9.99C22.03 6.478 17.552 2 12.04 2zm0 18.273c-1.542 0-3.054-.415-4.372-1.198l-.314-.186-3.25.852.868-3.167-.204-.326c-.86-1.37-1.314-2.96-1.314-4.597 0-4.57 3.717-8.287 8.286-8.287 4.57 0 8.287 3.717 8.287 8.287 0 4.57-3.718 8.287-8.287 8.287z" />
        </svg>
      </a>
    </aside>
  );
};
