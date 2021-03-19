import { assets } from "./constants";

/**
 * This function allows you to combine sevral classNames together.
 * For conditional classes, just pass in the condition (boolean)
 * as the first elemnt in the array and pass the classes you want
 * to merge as the other items in the array.
 * @param  {Array.<String | [Boolean, ...String]>} args
 */
export const mergeClasses = (...args: any) => {
  return args.reduce((accumulator: any, currentValue: any) => {
    if (Array.isArray(currentValue)) {
      const bool = currentValue.shift();
      if (bool) return `${accumulator} ${mergeClasses(...currentValue)}`;
      return accumulator;
    }
    if (!currentValue) return accumulator;
    return `${accumulator ? `${accumulator} ` : ""}${currentValue}`;
  }, "");
};

export const playNavigationAudio = () => {
  const navAudio = new Audio("/audio/navigation.mp3");
  navAudio.play();
};

export const secondsToHms = (d: number) => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? " hr " : " hrs ") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " min " : " mins ") : "";
  const sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
  return hDisplay + mDisplay + sDisplay;
};

export const fetchStaticFiles = () =>
  Promise.all(Object.values(assets).map((url) => fetch(url)));

export const pageLoading = () =>
  !(
    window.getComputedStyle(document.getElementById("loader")!).display ===
    "none"
  );
