// Unified color configuration for the entire application
export type ColorType =
  | "default"
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "pink"
  | "cyan";

export const colorConfig = {
  // Text colors for icons and titles
  text: {
    green: "text-green-300",
    purple: "text-purple-300",
    blue: "text-blue-300",
    orange: "text-orange-300",
    pink: "text-pink-300",
    cyan: "text-cyan-300",
    default: "text-slate-300",
  },
  // Badge colors for badges component
  badges: {
    green: "bg-green-500/10 hover:bg-green-500/30 text-green-200 hover:text-white border-green-400/40",
    purple: "bg-purple-500/10 hover:bg-purple-500/30 text-purple-200 hover:text-white border-purple-400/40",
    blue: "bg-blue-500/10 hover:bg-blue-500/30 text-blue-200 hover:text-white border-blue-400/40",
    orange: "bg-orange-500/10 hover:bg-orange-500/30 text-orange-200 hover:text-white border-orange-400/40",
    pink: "bg-pink-500/10 hover:bg-pink-500/30 text-pink-200 hover:text-white border-pink-400/40",
    cyan: "bg-cyan-500/10 hover:bg-cyan-500/30 text-cyan-200 hover:text-white border-cyan-400/40",
    default: "bg-slate-500/10 hover:bg-slate-500/30 text-slate-200 hover:text-white border-slate-400/40",
  },
  // Card colors for card component
  card: {
    default: {
      bg: "bg-slate-800/30",
      border: "border border-slate-500/30",
      hover: {
        bg: "hover:bg-slate-700/40",
        border: "hover:border-slate-400/50",
        shadow: "hover:shadow-xl",
      },
    },
    blue: {
      bg: "bg-blue-900/20",
      border: "border border-blue-500/40",
      hover: {
        bg: "hover:bg-blue-800/30",
        border: "hover:border-blue-400/60",
        shadow: "hover:shadow-blue-500/20 hover:shadow-xl",
      },
    },
    green: {
      bg: "bg-green-900/20",
      border: "border border-green-500/40",
      hover: {
        bg: "hover:bg-green-800/30",
        border: "hover:border-green-400/60",
        shadow: "hover:shadow-green-500/20 hover:shadow-xl",
      },
    },
    purple: {
      bg: "bg-purple-900/20",
      border: "border border-purple-500/40",
      hover: {
        bg: "hover:bg-purple-800/30",
        border: "hover:border-purple-400/60",
        shadow: "hover:shadow-purple-500/20 hover:shadow-xl",
      },
    },
    orange: {
      bg: "bg-orange-900/20",
      border: "border border-orange-500/40",
      hover: {
        bg: "hover:bg-orange-800/30",
        border: "hover:border-orange-400/60",
        shadow: "hover:shadow-orange-500/20 hover:shadow-xl",
      },
    },
    pink: {
      bg: "bg-pink-900/20",
      border: "border border-pink-500/40",
      hover: {
        bg: "hover:bg-pink-800/30",
        border: "hover:border-pink-400/60",
        shadow: "hover:shadow-pink-500/20 hover:shadow-xl",
      },
    },
    cyan: {
      bg: "bg-cyan-900/20",
      border: "border border-cyan-500/40",
      hover: {
        bg: "hover:bg-cyan-800/30",
        border: "hover:border-cyan-400/60",
        shadow: "hover:shadow-cyan-500/20 hover:shadow-xl",
      },
    },
  },
} as const;

export const getTextColorClass = (color: ColorType): string => {
  return colorConfig.text[color];
};

export const getBadgeColorClass = (color: ColorType): string => {
  return colorConfig.badges[color];
};

export const getCardColorClasses = (
  color: ColorType,
  hoverEffect: boolean
): string => {
  const config = colorConfig.card[color];
  const textColor = colorConfig.text[color];
  const baseClasses =
    "relative backdrop-blur-lg rounded-xl p-5 shadow-lg transition-all duration-300";

  if (!hoverEffect) {
    return `${baseClasses} ${config.bg} ${config.border} ${textColor}`;
  }

  return `${baseClasses} ${config.bg} ${config.border} ${textColor} cursor-pointer hover:scale-105 ${config.hover.bg} ${config.hover.border} ${config.hover.shadow}`;
};