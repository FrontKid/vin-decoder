import { IVehicleVariable } from '@/entities/decodeVin';

const getVariablesDetails = (
  data: IVehicleVariable[] | undefined,
  id: number,
): IVehicleVariable | undefined => {
  if (!data) {
    return;
  }

  return data.find(el => el.ID === id);
};

export { getVariablesDetails };
