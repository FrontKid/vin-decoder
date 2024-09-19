import { IDecodeResult } from '@/entities/decodeVin';
import { v4 as getId } from 'uuid';

const getTransformVehicleData = (
  data: IDecodeResult[] | undefined,
  isLoading: boolean,
) => {
  if (isLoading || !data) {
    return [];
  }
  return data
    .filter(dataEntity => Boolean(dataEntity.Value))
    .map(el => ({ uniqId: getId(), ...el }));
};

export { getTransformVehicleData };
