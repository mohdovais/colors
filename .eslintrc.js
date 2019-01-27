module.exports = {
  extends: "prettier",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
