/**
 * Remove Top and Bottom margins from text blocks.
 *
 * Converted to TypeScript to use it with styled-components from
 * the article "Cropping Away Negative Impacts of Line Height" by Kevin Powell:
 * https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce
 *
 * You can calculate the top and bottom adjustments using the following tool:
 * http://text-crop.eightshapes.com/
 */
function textCrop(
  lineHeight: number = 1.2,
  topAdjustment: string = "0px",
  bottomAdjustment: string = "0px"
) {
  const topCrop = 9;
  const bottomCrop = 8;
  const cropFontSize = 36;
  const cropLineHeight = 1.2;

  // Apply values to calculate em-based margins that work with any font size
  const dynamicTopCrop =
    Math.max(topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize;
  const dynamicBottomCrop =
    Math.max(
      bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
      0
    ) / cropFontSize;

  // Mixin output

  return `
    line-height: ${lineHeight};

    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &::before {
      margin-bottom: calc(-${dynamicTopCrop}em + ${topAdjustment});
    }

    &::after {
      margin-top: calc(-${dynamicBottomCrop}em + ${bottomAdjustment});
    }
  `;
}
