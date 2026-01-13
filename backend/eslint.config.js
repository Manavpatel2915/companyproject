import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.node, // Node.js globals (process, __dirname, etc.)
      },
    },
    rules: {
      // Common backend rules
      "no-console": "off", // Allow console.log for backend debugging
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      // Node.js & Express.js specific rules
      "@typescript-eslint/no-require-imports": "off", // Allow require() if needed
      "@typescript-eslint/no-var-requires": "off", // Allow require() for CommonJS compatibility
    },
  },
];
