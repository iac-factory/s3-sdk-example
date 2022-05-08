const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: [ "@commitlint/config-conventional" ],
    /*
     * Resolve and load conventional-changelog-atom from node_modules.
     * Referenced packages must be installed
     */
    /// parserPreset: 'conventional-changelog-atom',
    /*
     * Resolve and load @commitlint/format from node_modules.
     * Referenced package must be installed
     */
    formatter: "@commitlint/format",
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
        /// [0] Disables, warning, or errors the rule
        /// [1] Inverts the rule
        /// [2] Value
        "type-enum": [ 2, "always", [ "Feature", "Fix", "Chore", "Documentation", "Style", "Refactor", "Test", "Reversion", "Syntax", "Bug", "CI", "Bump" ] ],
        "type-case": [ 2, "always", ["start-case", "sentence-case", "kebab-case"]],
        "scope-case": [ 2, "always", ["start-case", "sentence-case", "kebab-case"]],
        "subject-case": [ 2, "always", [ "lower-case", "upper-case", "camel-case", "kebab-case", "pascal-case", "sentence-case", "snake-case", "start-case", ]],
    },
    /*
     * Functions that return true if commitlint should ignore the given message.
     */
    ignores: [ (commit) => commit === "" ],
    /*
     * Whether commitlint uses the default ignore rules.
     */
    defaultIgnores: true,
    /*
     * Custom URL to show upon failure
     */
    helpUrl:
        "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
    /*
     * Custom prompt configs
     */
    // prompt: {
    //     messages: {},
    //     questions: {
    //         type: {
    //             description: "please input type:"
    //         }
    //     }
    // }
};

// const Type = [ "feat", "fix", "docs", "style", "refactor", "test", "revert" ];
// const Case = [
//     "lower-case", // default
//     "upper-case", // UPPERCASE
//     "camel-case", // camelCase
//     "kebab-case", // kebab-case
//     "pascal-case", // PascalCase
//     "sentence-case", // Sentence case
//     "snake-case", // snake_case
//     "start-case" // Start Case
// ];

module.exports = Configuration; /// { extends: [ "@commitlint/config-conventional" ] };
