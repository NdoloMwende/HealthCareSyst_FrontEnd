// src/hooks/useFetch.ts

import { useEffect, useState } from "react";
import axiosClient from "src/lib/api/axiosClient";

/**
 * Generic hook for fetching API data.
 * 
 * Usage:
 * const { data, loading, error, refetch } = useFetch("/patients");
 */

