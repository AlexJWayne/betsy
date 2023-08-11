import betsy from "../assets/betsy-angled.webp";
import clsx from "clsx";

export function Betsy() {
  return (
    <div
      className={clsx(
        "relative z-10 m-auto h-[600px] w-[1000px] rotate-[15deg] pt-10 transition-all",
        "bg-contain bg-center bg-no-repeat",
        "pointer-events-none font-serif italic tracking-widest",
        "text-zinc-400",
      )}
      style={{
        backgroundImage: `url(${betsy})`,
        fontFamily: "'Metal Mania', cursive",
        filter: "drop-shadow(-1px 3px 3px #22222266)",
      }}
    >
      <div
        className={clsx(
          "absolute right-[210px] top-[30px] -rotate-[24deg] bg-gradient-to-b bg-clip-text text-8xl text-transparent",
          "from-red-800 to-orange-600",
        )}
      >
        BETSY's&nbsp;
      </div>
      <div
        className={clsx(
          "absolute right-[90px] top-[165px] -rotate-[27deg] bg-gradient-to-b bg-clip-text text-6xl text-transparent",
          "from-orange-600 to-red-800",
        )}
      >
        Guitar Covers&nbsp;
      </div>
    </div>
  );
}
