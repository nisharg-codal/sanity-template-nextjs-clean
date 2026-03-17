import {
  phoneNumberValidationMessages,
  stringValidationMessages,
  urlValidationMessages,
} from '@/constants/messages';
import { regex } from '@/constants/regex';

import type { ValidateNoEdgeSpaces, ValidateUrl } from '@/validators/@types/validation.types';

/**
 * Validates a URL string according to specified options and constraints.
 *
 * @param value - The URL string to validate
 * @param options - Optional configuration object for validation rules
 * @param options.allowedProtocols - Array of allowed URL protocols (default: ['http:', 'https:'])
 * @param options.externalOnly - Whether to only allow external URLs (default: true)
 *
 * @returns `true` if the URL is valid, or a string error message if validation fails
 *
 * @remarks
 * - Validates that the URL is not empty and contains no whitespace
 * - When `externalOnly` is false, allows relative paths (starting with '/') and hash fragments (starting with '#')
 * - For http/https protocols, validates domain format including:
 *   - Presence of at least one dot in the hostname
 *   - No leading or trailing dots
 *   - Only valid international domain characters (letters, numbers, hyphens)
 * - Returns a validation error message if the URL format is invalid or constraints are not met
 */
export const validateUrl: ValidateUrl = (value, options) => {
  const { allowedProtocols = ['http:', 'https:'], externalOnly = true } = options ?? {};

  if (!value) return urlValidationMessages.REQUIRED_URL;

  const trimmedValue = value.trim();

  if (/\s/.test(trimmedValue)) return urlValidationMessages.NO_SPACES_URL;

  if (!externalOnly) {
    if (trimmedValue.startsWith('/') && !trimmedValue.startsWith('//')) return true;

    if (trimmedValue.startsWith('#')) {
      if (trimmedValue === '#') return urlValidationMessages.INVALID_FORMAT;
      return true;
    }
  }

  try {
    const url = new URL(trimmedValue);

    const { protocol, hostname } = url;

    if (!allowedProtocols.includes(protocol)) {
      return `${urlValidationMessages.INVALID_PROTOCOL} Use ${allowedProtocols}`;
    }

    if (protocol === 'http:' || protocol === 'https:') {
      const internationalRegex = /^(?!.*\.\.)[\p{L}\p{N}-]+(\.[\p{L}\p{N}-]+)+$/u;

      if (!hostname.includes('.')) return urlValidationMessages.NO_DOMAIN;

      if (hostname.startsWith('.') || hostname.endsWith('.')) {
        return urlValidationMessages.INVALID_DOMAIN_FORMAT;
      }

      if (!internationalRegex.test(hostname)) {
        return urlValidationMessages.INVALID_DOMAIN_CHARACTERS;
      }
    }

    return true;
  } catch {
    return urlValidationMessages.INVALID_FORMAT;
  }
};

/**
 * Validates that a value does not have leading or trailing whitespace.
 * @param value - The value to validate
 * @returns `true` if valid (no leading/trailing spaces), or an error message string if invalid
 */
export const validateNoEdgeSpaces: ValidateNoEdgeSpaces = (value) => {
  if (value === null || value === undefined) return true;
  return /^\s|\s$/.test(value.toString()) ? stringValidationMessages.NO_WHITESPACES : true;
};

/**
 * Validates that a value is a properly formatted phone number.
 * @param value - The phone number value to validate
 * @returns `true` if the phone number is valid or empty, or an error message string if the format is invalid
 */
export const validatePhoneNumber = (value: string | undefined): true | string => {
  if (!value) return true;
  return regex.phoneNumber.test(value) ? true : phoneNumberValidationMessages.INVALID_FORMAT;
};
