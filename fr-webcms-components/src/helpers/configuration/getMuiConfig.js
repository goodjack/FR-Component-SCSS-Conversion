import merge from 'lodash.merge';
import baseConfig from './baseConfig';

/**
 * Get the component config corresponding to a base config.
 */
export default function getMuiConfig(overrideConfig) {
  return merge({}, baseConfig, overrideConfig);
}

export function getCompConfig(overrideConfig) {
  return merge({}, baseConfig, overrideConfig);
}
