//a function used so it doesn't go over a given min and max

export const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;

//why is there an error???