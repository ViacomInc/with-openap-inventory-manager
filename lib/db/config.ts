import { createTypeParserPreset } from "slonik";

export default {
  captureStackTrace: true,
  connectionTimeout: 30000,
  idleTimeout: 30000,
  logValues: false,
  typeParsers: [
    ...createTypeParserPreset(),
    {
      name: "json",
      parse: (value: string): string => value,
    },
    {
      name: "timestamp",
      parse: (value: string): string => value,
    },
    {
      name: "timestamptz",
      parse: (value: string): string => value,
    },
  ],
};
