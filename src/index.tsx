import React, { PureComponent } from 'react'

import {
  Text,
  TouchableOpacity,
  TextProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'

import {
  FONT,
  baseConfig,
} from '../../../src/config/themes'

const styles = StyleSheet.create({
  tappable: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
})

export type fontTypes = 'light' | 'bold' | 'regular' | 'lightItalic' | 'italic' | 'boldItalic'

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
   * Text opacity
   */
  opacity?: number;
  /**
   * Required prop!
   */
  text: string | number;
  center?: boolean;
  textStyle?: TextStyle | ViewStyle;
  tappable?: boolean;
  onTap?: () => void;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
  testID?: any
}

class Paragraph extends PureComponent<ParagraphProps> {
  public static defaultProps = {
    fontType: baseConfig.paragraph.fontType,
    size: baseConfig.paragraph.size,
    color: baseConfig.paragraph.color,
    opacity: baseConfig.paragraph.opacity,
    center: baseConfig.paragraph.center,
    textStyle: baseConfig.paragraph.textStyle,
    tappable: baseConfig.paragraph.tappable,
    onTap: baseConfig.paragraph.onTap,
    testID: baseConfig.paragraph.testID,
    textTransform: baseConfig.paragraph.textTransform,
  }

  identifyFontType = (): any => {
    const {
      fontType,
    } = this.props;

    switch (fontType) {
      case 'light':
        return FONT.light;
      case 'bold':
        return FONT.bold;
      case 'lightItalic':
        return FONT.lightItalic;
      case 'italic':
        return FONT.italic;
      case 'boldItalic':
        return FONT.boldItalic;
      default:
        return FONT.regular;
    }
  }

  render() {
    const {
      size,
      color,
      opacity,
      text,
      center,
      textStyle,
      tappable,
      onTap,
      testID,
      textTransform,
      ...props
    } = this.props;

    if (tappable) {
      return (
        <TouchableOpacity
          testID={testID}
          onPress={onTap}
          style={styles.tappable}
        >
          <Text
            style={{
              fontSize: size,
              fontFamily: this.identifyFontType(),
              color,
              opacity,
              ...center && { textAlign: 'center' },
              ...textStyle,
              ...{ textTransform },
            }}
            {...props}
          >
            {text}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <Text
        testID={testID}
        style={{
          fontSize: size,
          fontFamily: this.identifyFontType(),
          color,
          opacity,
          ...center && { textAlign: 'center' },
          ...textStyle,
          ...{ textTransform },
        }}
        {...props}
      >
        {text}
      </Text>
    );
  }
}

export default Paragraph;
