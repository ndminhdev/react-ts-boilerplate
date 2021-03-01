/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * Resource list for sass-resource-loader
 * @see https://github.com/shakacode/sass-resources-loader
 * @example
 *  [
 *      path.resolve(__dirname, '../src/styles/variables.scss'),
 *  ]
 */

import path from 'path';

export const sassResourceItems = [
  path.resolve(__dirname, '../src/styles/functions.scss'),
  path.resolve(__dirname, '../src/styles/mixins.scss'),
  path.resolve(__dirname, '../src/styles/variables.scss')
];
