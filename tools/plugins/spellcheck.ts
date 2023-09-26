import { CreateNodes } from "@nx/devkit";
import { dirname } from "path";

export const createNodes: CreateNodes = [
  "**/README.md",
  (file: string, context) => {
    const name = dirname(file).split("/").pop()!;
    return {
      projects: {
        [name]: {
          root: dirname(file),
          targets: {
            spellcheck: {
              command: `cspell ${file}`,
            },
          },
        },
      },
    };
  },
];
