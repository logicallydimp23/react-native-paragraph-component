import React, { PureComponent } from 'react'

import {
  TextProps,
} from 'react-native'

type fontTypes = 'light' | 'bold' | 'regular' | 'lightItalic' | 'italic' | 'boldItalic'

export interface ParagraphProps extends TextProps {
  /**
    * This can be one of the following values:
    *
    * - `light` -  Thinner font
    * - `bold` - Heavier font
    * - `regular` - Common font
    * - `lightItalic` - Thinner Italic font
    * - `italic` - Italic font
    * - `boldItalic` - Heavier Italic font
    *
    * > See `src/config/themes/Fonts.js` for font values.
    *
    * > The default is `regular`.
    */
  fontType?: fontTypes;
  size?: number;
  color?: string;
  /**
   * Required prop!
   */
  text: string | number | null;
  center?: boolean;
  textStyle?: object;
  tappable?: boolean;
  onTap?: () => void;
}

/**
 * Paragraph
 *
 * Simplified Text component.
 *
 * See https://react-native-halcyon.github.io/documentation/docs/components/paragraph
 */
 export class Paragraph extends PureComponent<ParagraphProps> { }