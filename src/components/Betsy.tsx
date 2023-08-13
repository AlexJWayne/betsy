import betsy from "../assets/splash.webp";
import { useCurrentRecording } from "../hooks/use-current-recording";
import clsx from "clsx";

export function Betsy() {
  const { onClickHome } = useCurrentRecording();
  return (
    <a href="." className="relative" onClick={onClickHome}>
      <img
        src={betsy}
        alt="Betsy"
        className={clsx(
          "relative z-10 m-auto w-[1000px] transition-all",
          "hover:-translate-x-8 hover:translate-y-2 hover:scale-105",
        )}
      />
    </a>
  );
}
