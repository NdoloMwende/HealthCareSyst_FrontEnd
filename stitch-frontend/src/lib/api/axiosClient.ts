// src/api/axiosClient.ts

import axios from "axios";

/**
 * Axios instance used for making all API requests.
 * Centralizing this makes the code cleaner, easier to maintain,
 * and lets us add interceptors (auth tokens, logging, refresh tokens, etc.)
 */
