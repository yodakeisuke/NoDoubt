const ColorCode = {
  RED: '#FF5722',
  OFF_WHITE: '#EEEEEE',
  DEEP_DARK_BLUE: '#2D4059',
  GREEN: '#97BFB4',
} as const;

export type ColorCodeType = typeof ColorCode[keyof typeof ColorCode];

export default ColorCode;
