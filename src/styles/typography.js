import { createFontStyle, createFontFamily } from './utils/typography';

const createFontFamilyWorkSans = () => createFontFamily('Work Sans', true);
const createFontFamilyLora = () => createFontFamily('Lora', true);

const fonts = {
  mainFont: createFontStyle(createFontFamilyWorkSans()),
  loraFont: createFontStyle(createFontFamilyLora())
};
const typography = {};

export { typography, fonts };
