import 'dotenv/config';

export const SERVER_PORT = process.env.SERVER_PORT || 8000;
export const DOMAINS_LIST = process.env.DOMAINS_LIST?.split(', ') || ['http://localhost:8000'];
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
export const BUILD_MODE = process.env.BUILD_MODE;
