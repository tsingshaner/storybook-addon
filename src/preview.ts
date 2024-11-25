import type { ProjectAnnotations, Renderer } from "storybook/internal/types";

import { theme } from "./theme";
import css from "./colors.css?inline"

const style = document.createElement('style')
style.textContent = css

parent?.document.head.appendChild(style)
document.head.appendChild(style.cloneNode(true))

const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    docs: {  theme},
  }
};

export default preview;
