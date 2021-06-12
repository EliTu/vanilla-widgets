/**
 * Babel preset config to support Jest and Typescript in Jest.
 */
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }], '@babel/preset-typescript',
    ],
};