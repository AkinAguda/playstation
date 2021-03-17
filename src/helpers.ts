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
