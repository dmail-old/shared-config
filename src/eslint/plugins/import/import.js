import { rules } from "./rules.js"

export const importPlugin = {
  name: "import",
  settings: {
    extensions: [".js", ".jsx"],
  },
  rules,
  enabled: true,
}
