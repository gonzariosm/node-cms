/**
 * Gets the environment based on NODE_ENV var.
 *
 * @returns {object} Enviroment
 */
export default function getEnv() {
  return {
    name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
  };
}
