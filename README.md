# eslint-config-gergoszaszvaradi

## Install
```bash
npm install -D eslint-config-gergoszaszvaradi \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-plugin-import \
            eslint-plugin-react \
            eslint-plugin-react-hooks
```
```bash
yarn add -D eslint-config-gergoszaszvaradi \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-plugin-import \
            eslint-plugin-react \
            eslint-plugin-react-hooks
```

## Configuration
.eslintrc.yml
```yaml
env:
  browser: true
  es2021: true
  node: true
  es6: true
parser: "@typescript-eslint/parser"
parserOptions:
  project: "./tsconfig.json"
extends:
  - "eslint-config-gergoszaszvaradi"
```