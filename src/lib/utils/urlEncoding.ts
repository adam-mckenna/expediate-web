import pako from "pako";

import { Results } from "@/lib/types";

/**
 * Encodes results data into a compressed, base64-encoded string for URL storage.
 * @param results - The results data to encode.
 * @returns A URL-safe base64-encoded string containing compressed JSON data.
 */
export const encodeResults = (results: Results): string => {
  // Convert results to JSON string.
  const jsonString = JSON.stringify(results);

  // Compress using deflate (pako.deflate returns Uint8Array).
  const compressed = pako.deflate(jsonString);

  // Convert Uint8Array to base64.
  let binaryString = "";
  for (let i = 0; i < compressed.length; i++) {
    binaryString += String.fromCharCode(compressed[i]);
  }
  const base64 = btoa(binaryString);

  // Make base64 URL-safe by replacing characters that are problematic in URLs.
  // + becomes -, / becomes _, and we remove padding = (these are added back during the decoding process).
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

/**
 * Decodes a compressed, base64-encoded string back into results data.
 * @param encoded - The URL-encoded, base64-encoded, compressed string from the URL.
 * @returns The decoded results data, or null if decoding fails.
 */
export const decodeResults = (encoded: string): Results | null => {
  try {
    // Convert URL-safe base64 back to standard base64.
    // - becomes +, _ becomes /, and add back padding if needed.
    let base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");

    // Add padding if needed (base64 strings should be multiples of 4).
    const padding = base64.length % 4;
    if (padding) {
      base64 += "=".repeat(4 - padding);
    }

    // Decode from base64.
    const binaryString = atob(base64);

    // Convert binary string to Uint8Array.
    const compressed = Uint8Array.from(binaryString, (char) =>
      char.charCodeAt(0),
    );

    // Decompress using inflate (returns Uint8Array).
    const decompressed = pako.inflate(compressed);

    // Convert Uint8Array to string.
    let jsonString = "";
    for (let i = 0; i < decompressed.length; i++) {
      jsonString += String.fromCharCode(decompressed[i]);
    }

    // Parse JSON.
    const results = JSON.parse(jsonString) as Results;

    return results;
  } catch (error) {
    console.error("Failed to decode results from URL:", error);
    return null;
  }
};
