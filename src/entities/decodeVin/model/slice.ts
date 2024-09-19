import { baseApi } from '@/shared/api';

interface IDecodeResult {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
}

interface IDecodedInfo {
  Results: IDecodeResult[];
}

interface IVehicleVariable {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
}
interface IVehicleVariableList {
  Results: IVehicleVariable[];
}

const BASE_ENDPOINT = 'vehicles';
const DECODE_ENDPOINT = 'decodevin';
const VARS_LIST_ENDPOINT = 'getvehiclevariablelist';
const RESPONSE_FORMAT = 'format=json';

const decodeVinApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVehicleSpecs: builder.query<IDecodeResult[], string>({
      query: vin =>
        `${BASE_ENDPOINT}/${DECODE_ENDPOINT}/${vin}?${RESPONSE_FORMAT}`,
      keepUnusedDataFor: 30,
      transformResponse: (response: IDecodedInfo) => response.Results,
    }),
    getVehicleVariables: builder.query<IVehicleVariable[], void>({
      query: () => `${BASE_ENDPOINT}/${VARS_LIST_ENDPOINT}?${RESPONSE_FORMAT}`,
      keepUnusedDataFor: 30,
      transformResponse: (response: IVehicleVariableList) => response.Results,
    }),
  }),

  overrideExisting: false,
});

export type { IDecodeResult, IDecodedInfo, IVehicleVariable };
export const { useGetVehicleSpecsQuery, useGetVehicleVariablesQuery } =
  decodeVinApi;
