module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    plugins: [
        "react-hooks",
        "import",
        "@typescript-eslint",
    ],
    rules: {
        strict: [
            "error",
            "never",
        ],
        "import/named": [
            "error",
        ],
        "import/default": [
            "off",
        ],
        "import/namespace": [
            "off",
        ],
        "import/export": [
            "error",
        ],
        "import/no-named-as-default": [
            "error",
        ],
        "import/no-named-as-default-member": [
            "error",
        ],
        "import/no-deprecated": [
            "off",
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "test/**",
                    "tests/**",
                    "spec/**",
                    "**/__tests__/**",
                    "**/__mocks__/**",
                    "test.{js,jsx}",
                    "test-*.{js,jsx}",
                    "**/*{.,_}{test,spec}.{js,jsx}",
                    "**/jest.config.js",
                    "**/jest.setup.js",
                    "**/vue.config.js",
                    "**/webpack.config.js",
                    "**/webpack.config.*.js",
                    "**/rollup.config.js",
                    "**/rollup.config.*.js",
                    "**/gulpfile.js",
                    "**/gulpfile.*.js",
                    "**/Gruntfile{,.js}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.*.js",
                    "**/karma.conf.js",
                ],
                optionalDependencies: false,
            },
        ],
        "import/no-mutable-exports": [
            "error",
        ],
        "import/no-commonjs": [
            "off",
        ],
        "import/no-amd": [
            "error",
        ],
        "import/no-nodejs-modules": [
            "off",
        ],
        "import/first": [
            "error",
        ],
        "import/imports-first": [
            "off",
        ],
        "import/no-duplicates": [
            "error",
        ],
        "import/no-namespace": [
            "off",
        ],
        "import/extensions": [
            "off",
            "ignorePackages",
        ],
        "import/order": [
            "error",
            {
                groups: [
                    [
                        "builtin",
                        "external",
                        "internal",
                    ],
                ],
            },
        ],
        "import/newline-after-import": [
            "error",
        ],
        "import/prefer-default-export": [
            "error",
        ],
        "import/no-restricted-paths": [
            "off",
        ],
        "import/max-dependencies": [
            "off",
        ],
        "import/no-absolute-path": [
            "error",
        ],
        "import/no-dynamic-require": [
            "error",
        ],
        "import/no-internal-modules": [
            "off",
        ],
        "import/unambiguous": [
            "off",
        ],
        "import/no-webpack-loader-syntax": [
            "error",
        ],
        "import/no-unassigned-import": [
            "off",
        ],
        "import/no-named-default": [
            "error",
        ],
        "import/no-anonymous-default-export": [
            "off",
        ],
        "import/exports-last": [
            "off",
        ],
        "import/group-exports": [
            "off",
        ],
        "import/no-default-export": [
            "off",
        ],
        "import/no-named-export": [
            "off",
        ],
        "import/no-self-import": [
            "error",
        ],
        "import/no-cycle": [
            "error",
            {
                maxDepth: "∞",
                ignoreExternal: false,
            },
        ],
        "import/no-useless-path-segments": [
            "error",
            {
                commonjs: true,
            },
        ],
        "import/dynamic-import-chunkname": [
            "off",
        ],
        "import/no-relative-parent-imports": [
            "off",
        ],
        "import/no-unused-modules": [
            "off",
        ],
        "arrow-body-style": [
            "error",
            "as-needed",
            {
                requireReturnForObjectLiteral: false,
            },
        ],
        "arrow-parens": [
            "error",
            "always",
        ],
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "constructor-super": [
            "error",
        ],
        "generator-star-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "no-class-assign": [
            "error",
        ],
        "no-confusing-arrow": [
            "error",
            {
                allowParens: true,
            },
        ],
        "no-const-assign": [
            "error",
        ],
        "no-dupe-class-members": [
            "error",
        ],
        "no-duplicate-imports": [
            "off",
        ],
        "no-new-symbol": [
            "error",
        ],
        "no-restricted-exports": [
            "off",
        ],
        "no-restricted-imports": [
            "off",
        ],
        "no-this-before-super": [
            "error",
        ],
        "no-useless-computed-key": [
            "error",
        ],
        "no-useless-constructor": [
            "off",
        ],
        "no-useless-rename": [
            "error",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        "no-var": [
            "error",
        ],
        "object-shorthand": [
            "error",
            "always",
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        "prefer-arrow-callback": [
            "error",
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        "prefer-const": [
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: true,
            },
        ],
        "prefer-destructuring": [
            "error",
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "prefer-numeric-literals": [
            "error",
        ],
        "prefer-reflect": [
            "off",
        ],
        "prefer-rest-params": [
            "error",
        ],
        "prefer-spread": [
            "error",
        ],
        "prefer-template": [
            "error",
        ],
        "require-yield": [
            "error",
        ],
        "rest-spread-spacing": [
            "error",
            "never",
        ],
        "sort-imports": [
            "off",
        ],
        "symbol-description": [
            "error",
        ],
        "template-curly-spacing": [
            "error",
        ],
        "yield-star-spacing": [
            "error",
            "after",
        ],
        "init-declarations": [
            "off",
        ],
        "no-catch-shadow": [
            "off",
        ],
        "no-delete-var": [
            "error",
        ],
        "no-label-var": [
            "error",
        ],
        "no-restricted-globals": [
            "error",
            {
                name: "isFinite",
                message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
            },
            {
                name: "isNaN",
                message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
            },
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top",
        ],
        "no-shadow": [
            "off",
        ],
        "no-shadow-restricted-names": [
            "error",
        ],
        "no-undef": [
            "error",
        ],
        "no-undef-init": [
            "error",
        ],
        "no-undefined": [
            "off",
        ],
        "no-unused-vars": [
            "off",
        ],
        "no-use-before-define": [
            "off",
        ],
        "array-bracket-newline": [
            "off",
            "consistent",
        ],
        "array-element-newline": [
            "off",
        ],
        "array-bracket-spacing": [
            "error",
            "never",
        ],
        "block-spacing": [
            "error",
            "always",
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true,
            },
        ],
        camelcase: [
            "error",
            {
                properties: "never",
                ignoreDestructuring: false,
                ignoreImports: false,
                ignoreGlobals: false,
            },
        ],
        "capitalized-comments": [
            "off",
            "never",
            {
                line: {
                    ignorePattern: ".*",
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
                block: {
                    ignorePattern: ".*",
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
            },
        ],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "comma-style": [
            "error",
            "last",
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],
        "computed-property-spacing": [
            "error",
            "never",
        ],
        "consistent-this": [
            "off",
        ],
        "eol-last": [
            "error",
            "always",
        ],
        "function-call-argument-newline": [
            "off",
            "consistent",
        ],
        "func-call-spacing": [
            "error",
            "never",
        ],
        "func-name-matching": [
            "off",
            "always",
            {
                includeCommonJSModuleExports: false,
                considerPropertyDescriptor: true,
            },
        ],
        "func-names": [
            "warn",
        ],
        "func-style": [
            "off",
            "expression",
        ],
        "function-paren-newline": [
            "error",
            "consistent",
        ],
        "id-blacklist": [
            "off",
        ],
        "id-denylist": [
            "off",
        ],
        "id-length": [
            "off",
        ],
        "id-match": [
            "off",
        ],
        "implicit-arrow-linebreak": [
            "error",
            "beside",
        ],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                ],
                ignoreComments: false,
                offsetTernaryExpressions: false,
            },
        ],
        "jsx-quotes": [
            "off",
            "prefer-single",
        ],
        "key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        "keyword-spacing": [
            "error",
            {
                before: true,
                after: true,
                overrides: {
                    return: {
                        after: true,
                    },
                    throw: {
                        after: true,
                    },
                    case: {
                        after: true,
                    },
                },
            },
        ],
        "line-comment-position": [
            "off",
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                exceptAfterSingleLine: true,
            },
        ],
        "lines-around-comment": [
            "off",
        ],
        "lines-around-directive": [
            "error",
            {
                before: "always",
                after: "always",
            },
        ],
        "max-depth": [
            "off",
            4,
        ],
        "max-lines": [
            "off",
        ],
        "max-lines-per-function": [
            "off",
        ],
        "max-nested-callbacks": [
            "off",
        ],
        "max-params": [
            "off",
            3,
        ],
        "max-statements": [
            "off",
            10,
        ],
        "max-statements-per-line": [
            "off",
        ],
        "multiline-comment-style": [
            "off",
            "starred-block",
        ],
        "multiline-ternary": [
            "off",
            "never",
        ],
        "new-cap": [
            "error",
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: [
                    "Immutable.Map",
                    "Immutable.Set",
                    "Immutable.List",
                ],
                properties: true,
            },
        ],
        "new-parens": [
            "error",
        ],
        "newline-after-var": [
            "off",
        ],
        "newline-before-return": [
            "off",
        ],
        "newline-per-chained-call": [
            "error",
            {
                ignoreChainWithDepth: 4,
            },
        ],
        "no-array-constructor": [
            "error",
        ],
        "no-bitwise": [
            "off",
        ],
        "no-continue": [
            "off",
        ],
        "no-inline-comments": [
            "off",
        ],
        "no-lonely-if": [
            "error",
        ],
        "no-mixed-operators": [
            "error",
            {
                groups: [
                    [
                        "%",
                        "**",
                    ],
                    [
                        "%",
                        "+",
                    ],
                    [
                        "%",
                        "-",
                    ],
                    [
                        "%",
                        "*",
                    ],
                    [
                        "%",
                        "/",
                    ],
                    [
                        "/",
                        "*",
                    ],
                    [
                        "&",
                        "|",
                        "<<",
                        ">>",
                        ">>>",
                    ],
                    [
                        "==",
                        "!=",
                        "===",
                        "!==",
                    ],
                    [
                        "&&",
                        "||",
                    ],
                ],
                allowSamePrecedence: false,
            },
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
        ],
        "no-multi-assign": [
            "error",
            {
                ignoreNonDeclaration: true,
            },
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        "no-negated-condition": [
            "off",
        ],
        "no-nested-ternary": [
            "error",
        ],
        "no-new-object": [
            "error",
        ],
        "no-plusplus": [
            "off",
        ],
        "no-spaced-func": [
            "error",
        ],
        "no-tabs": [
            "error",
        ],
        "no-ternary": [
            "off",
        ],
        "no-trailing-spaces": [
            "error",
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],
        "no-underscore-dangle": [
            "error",
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
                allowAfterThisConstructor: false,
                allowFunctionParams: true,
            },
        ],
        "no-unneeded-ternary": [
            "error",
            {
                defaultAssignment: false,
            },
        ],
        "no-whitespace-before-property": [
            "error",
        ],
        "nonblock-statement-body-position": [
            "error",
            "below",
            {
                overrides: {},
            },
        ],
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: {
                    minProperties: 5,
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    minProperties: 5,
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    multiline: false,
                    consistent: true,
                },
                ExportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        "object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true,
                allowMultiplePropertiesPerLine: false,
            },
        ],
        "one-var": [
            "error",
            "never",
        ],
        "one-var-declaration-per-line": [
            "error",
            "always",
        ],
        "operator-assignment": [
            "error",
            "always",
        ],
        "operator-linebreak": [
            "error",
            "after",
            {
                overrides: {
                    "=": "none",
                },
            },
        ],
        "padded-blocks": [
            "error",
            {
                blocks: "never",
                classes: "never",
                switches: "never",
            },
            {
                allowSingleLineBlocks: true,
            },
        ],
        "padding-line-between-statements": [
            "off",
        ],
        "prefer-exponentiation-operator": [
            "off",
        ],
        "prefer-object-spread": [
            "error",
        ],
        "quote-props": [
            "error",
            "as-needed",
            {
                keywords: false,
                unnecessary: true,
                numbers: false,
            },
        ],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        "require-jsdoc": [
            "off",
        ],
        semi: [
            "error",
            "always",
        ],
        "semi-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "semi-style": [
            "error",
            "last",
        ],
        "sort-keys": [
            "off",
            "asc",
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        "sort-vars": [
            "off",
        ],
        "space-before-blocks": [
            "error",
        ],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "space-in-parens": [
            "error",
            "never",
        ],
        "space-infix-ops": [
            "error",
        ],
        "space-unary-ops": [
            "error",
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                line: {
                    exceptions: [
                        "-",
                        "+",
                    ],
                    markers: [
                        "=",
                        "!",
                        "/",
                    ],
                },
                block: {
                    exceptions: [
                        "-",
                        "+",
                    ],
                    markers: [
                        "=",
                        "!",
                        ":",
                        "::",
                    ],
                    balanced: true,
                },
            },
        ],
        "switch-colon-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ],
        "template-tag-spacing": [
            "error",
            "never",
        ],
        "unicode-bom": [
            "error",
            "never",
        ],
        "wrap-regex": [
            "off",
        ],
        "callback-return": [
            "off",
        ],
        "global-require": [
            "error",
        ],
        "handle-callback-err": [
            "off",
        ],
        "no-buffer-constructor": [
            "error",
        ],
        "no-mixed-requires": [
            "off",
            false,
        ],
        "no-new-require": [
            "error",
        ],
        "no-path-concat": [
            "error",
        ],
        "no-process-env": [
            "off",
        ],
        "no-process-exit": [
            "off",
        ],
        "no-restricted-modules": [
            "off",
        ],
        "no-sync": [
            "off",
        ],
        "for-direction": [
            "error",
        ],
        "getter-return": [
            "error",
            {
                allowImplicit: true,
            },
        ],
        "no-async-promise-executor": [
            "error",
        ],
        "no-await-in-loop": [
            "error",
        ],
        "no-compare-neg-zero": [
            "error",
        ],
        "no-cond-assign": [
            "error",
            "always",
        ],
        "no-console": [
            "off",
        ],
        "no-constant-condition": [
            "warn",
        ],
        "no-control-regex": [
            "error",
        ],
        "no-debugger": [
            "error",
        ],
        "no-dupe-args": [
            "error",
        ],
        "no-dupe-else-if": [
            "off",
        ],
        "no-dupe-keys": [
            "error",
        ],
        "no-duplicate-case": [
            "error",
        ],
        "no-empty": [
            "error",
        ],
        "no-empty-character-class": [
            "error",
        ],
        "no-ex-assign": [
            "error",
        ],
        "no-extra-boolean-cast": [
            "error",
        ],
        "no-extra-parens": [
            "off",
            "all",
            {
                conditionalAssign: true,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: "all",
                enforceForArrowConditionals: false,
            },
        ],
        "no-extra-semi": [
            "off",
        ],
        "no-func-assign": [
            "error",
        ],
        "no-import-assign": [
            "off",
        ],
        "no-inner-declarations": [
            "error",
        ],
        "no-invalid-regexp": [
            "error",
        ],
        "no-irregular-whitespace": [
            "error",
        ],
        "no-loss-of-precision": [
            "off",
        ],
        "no-misleading-character-class": [
            "error",
        ],
        "no-obj-calls": [
            "error",
        ],
        "no-promise-executor-return": [
            "off",
        ],
        "no-prototype-builtins": [
            "error",
        ],
        "no-regex-spaces": [
            "error",
        ],
        "no-setter-return": [
            "off",
        ],
        "no-sparse-arrays": [
            "error",
        ],
        "no-template-curly-in-string": [
            "error",
        ],
        "no-unexpected-multiline": [
            "error",
        ],
        "no-unreachable": [
            "error",
        ],
        "no-unreachable-loop": [
            "off",
        ],
        "no-unsafe-finally": [
            "error",
        ],
        "no-unsafe-negation": [
            "error",
        ],
        "no-useless-backreference": [
            "off",
        ],
        "no-negated-in-lhs": [
            "off",
        ],
        "require-atomic-updates": [
            "off",
        ],
        "use-isnan": [
            "error",
        ],
        "valid-jsdoc": [
            "off",
        ],
        "valid-typeof": [
            "error",
            {
                requireStringLiterals: true,
            },
        ],
        "accessor-pairs": [
            "off",
        ],
        "array-callback-return": [
            "error",
            {
                allowImplicit: true,
                checkForEach: false,
            },
        ],
        "block-scoped-var": [
            "error",
        ],
        complexity: [
            "off",
            11,
        ],
        "class-methods-use-this": [
            "off",
        ],
        "consistent-return": [
            "error",
        ],
        curly: [
            "error",
            "multi",
            "consistent",
        ],
        "default-case": [
            "error",
            {
                commentPattern: "^no default$",
            },
        ],
        "default-case-last": [
            "off",
        ],
        "default-param-last": [
            "off",
        ],
        "dot-notation": [
            "error",
            {
                allowKeywords: true,
                allowPattern: "",
            },
        ],
        "dot-location": [
            "error",
            "property",
        ],
        eqeqeq: [
            "error",
            "always",
            {
                null: "ignore",
            },
        ],
        "grouped-accessor-pairs": [
            "off",
        ],
        "guard-for-in": [
            "off",
        ],
        "max-classes-per-file": ["off"],
        "no-alert": [
            "warn",
        ],
        "no-caller": [
            "error",
        ],
        "no-case-declarations": [
            "off",
        ],
        "no-constructor-return": [
            "off",
        ],
        "no-div-regex": [
            "off",
        ],
        "no-else-return": [
            "error",
            {
                allowElseIf: false,
            },
        ],
        "no-empty-function": [
            "off",
        ],
        "no-empty-pattern": [
            "error",
        ],
        "no-eq-null": [
            "off",
        ],
        "no-eval": [
            "error",
        ],
        "no-extend-native": [
            "error",
        ],
        "no-extra-bind": [
            "error",
        ],
        "no-extra-label": [
            "error",
        ],
        "no-fallthrough": [
            "error",
        ],
        "no-floating-decimal": [
            "error",
        ],
        "no-global-assign": [
            "error",
            {
                exceptions: [],
            },
        ],
        "no-native-reassign": [
            "off",
        ],
        "no-implicit-coercion": [
            "off",
        ],
        "no-implicit-globals": [
            "off",
        ],
        "no-implied-eval": [
            "error",
        ],
        "no-invalid-this": [
            "off",
        ],
        "no-iterator": [
            "error",
        ],
        "no-labels": [
            "error",
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],
        "no-lone-blocks": [
            "error",
        ],
        "no-loop-func": [
            "error",
        ],
        "no-magic-numbers": [
            "off",
        ],
        "no-multi-spaces": [
            "error",
            {
                ignoreEOLComments: false,
            },
        ],
        "no-multi-str": [
            "error",
        ],
        "no-new": [
            "error",
        ],
        "no-new-func": [
            "error",
        ],
        "no-new-wrappers": [
            "error",
        ],
        "no-octal": [
            "error",
        ],
        "no-octal-escape": [
            "error",
        ],
        "no-param-reassign": [
            "off",
        ],
        "no-proto": [
            "error",
        ],
        "no-redeclare": [
            "error",
        ],
        "no-restricted-properties": [
            "error",
            {
                object: "arguments",
                property: "callee",
                message: "arguments.callee is deprecated",
            },
            {
                object: "global",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "self",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "window",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "global",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                object: "self",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                object: "window",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                property: "__defineGetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                property: "__defineSetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                object: "Math",
                property: "pow",
                message: "Use the exponentiation operator (**) instead.",
            },
        ],
        "no-return-assign": [
            "error",
            "always",
        ],
        "no-return-await": [
            "error",
        ],
        "no-script-url": [
            "error",
        ],
        "no-self-assign": [
            "error",
            {
                props: true,
            },
        ],
        "no-self-compare": [
            "error",
        ],
        "no-sequences": [
            "error",
        ],
        "no-throw-literal": [
            "error",
        ],
        "no-unmodified-loop-condition": [
            "off",
        ],
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
                enforceForJSX: false,
            },
        ],
        "no-unused-labels": [
            "error",
        ],
        "no-useless-call": [
            "off",
        ],
        "no-useless-catch": [
            "error",
        ],
        "no-useless-concat": [
            "error",
        ],
        "no-useless-escape": [
            "error",
        ],
        "no-useless-return": [
            "error",
        ],
        "no-void": [
            "error",
        ],
        "no-warning-comments": [
            "off",
        ],
        "no-with": [
            "error",
        ],
        "prefer-promise-reject-errors": [
            "error",
            {
                allowEmptyReject: true,
            },
        ],
        "prefer-named-capture-group": [
            "off",
        ],
        "prefer-regex-literals": [
            "off",
        ],
        radix: [
            "error",
        ],
        "require-await": [
            "off",
        ],
        "require-unicode-regexp": [
            "off",
        ],
        "vars-on-top": [
            "error",
        ],
        "wrap-iife": [
            "error",
            "outside",
            {
                functionPrototypeMethods: false,
            },
        ],
        yoda: [
            "error",
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "no-public",
                overrides: {
                    properties: "explicit",
                },
            },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": [
            "error",
            {
                ignoreRestArgs: true,
            },
        ],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-implicit-any-catch": "off",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-type-alias": [
            "error",
            {
                allowAliases: "in-unions-and-intersections",
                allowCallbacks: "always",
                allowConditionalTypes: "always",
                allowConstructors: "always",
                allowLiterals: "in-unions-and-intersections",
                allowMappedTypes: "always",
                allowTupleTypes: "always",
                allowGenerics: "always",
            },
        ],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "none",
                ignoreRestSiblings: true,
            },
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: true,
                classes: false,
                variables: true,
                enums: false,
                typedefs: false,
                ignoreTypeReferences: true,
            },
        ],
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".mjs",
                    ".js",
                    ".json",
                ],
            },
        },
        "import/extensions": [
            ".js",
            ".mjs",
            ".jsx",
        ],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$",
        ],
    },
};
