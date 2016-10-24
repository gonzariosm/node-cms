import fs from 'fs';
import yaml from 'js-yaml';
import env from './env';

/**
 * Returns the selected enviroment configuration
 *
 * @returns {object} Config
 */
export default function getConfig() {
  const config = yaml.safeLoad(
    fs.readFileSync(`${__dirname}/../config/config.yml`, 'utf-8')
  );

  return config[env().name] || {};
}
