export interface ValidateUrlOptions {
  allowedProtocols?: string[];
  externalOnly?: boolean;
}

export type ValidateUrl = (
  value: string | undefined,
  options?: ValidateUrlOptions,
) => true | string;

export type ValidateNoEdgeSpaces = (value: string | number | undefined) => true | string;

export type ValidateEndDateOrder = (
  startDate: string | undefined,
  endDate: string | undefined,
) => true | string;
