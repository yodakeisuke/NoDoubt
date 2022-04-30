const ColorCode = {
  RED: '#FF5722',
  OFF_WHITE: '#EEEEEE',
  PURE_WHITE: "white",
  DEEP_DARK_BLUE: '#004466',
  GREEN: '#C5E1DA',
} as const;

export type ColorCodeType = typeof ColorCode[keyof typeof ColorCode];

export default ColorCode;
