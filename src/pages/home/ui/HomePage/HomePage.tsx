import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useLocalStorage } from 'usehooks-ts';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import cn from 'classnames';

import { useGetVehicleSpecsQuery } from '@/entities/decodeVin';

import { List } from '@/shared/ui';

import { getTransformVehicleData } from '../../utils/getTransformVehicleData';
import { vinCodeShema } from '../../shemas/vinCodeShema';

const HomePage = () => {
  const [vinCode, setVinCode] = useState('');
  const [lastDecodedVin, setLastDecodedVin] = useLocalStorage<string[]>(
    'lastDocodedVin',
    [],
  );

  const { data: specs, isLoading } = useGetVehicleSpecsQuery(
    vinCode || skipToken,
  );

  const transformedSpecs = getTransformVehicleData(specs, isLoading);

  const handleFormSubmit = ({ vinCode }: { vinCode: string }) => {
    setVinCode(vinCode);

    setLastDecodedVin(prev => {
      const filteredPrev = prev.filter(el => el !== vinCode);

      if (filteredPrev.length === 3) {
        return [vinCode, ...filteredPrev.slice(0, -1)];
      }

      return [vinCode, ...filteredPrev];
    });
  };

  return (
    <section className="mx-auto">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-3xl font-bold mb-6">Enter code:</h2>

        <Formik
          initialValues={{ vinCode: '' }}
          validationSchema={vinCodeShema}
          onSubmit={handleFormSubmit}
        >
          {({ values, setFieldValue }) => {
            return (
              <>
                <Form className="mb-8">
                  <label className="block mb-2 text-lg relative pb-2">
                    <Field
                      name="vinCode"
                      type="text"
                      value={values.vinCode}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue('vinCode', e.target.value.toUpperCase())
                      }
                      className="border p-2 rounded w-full mb-4 text-base sm:text-lg"
                      placeholder="1HGCM82633A123456"
                    />
                    <ErrorMessage
                      className="absolute bottom-0 text-red-500 text-sm"
                      name="vinCode"
                      component="p"
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded text-base sm:text-lg hover:bg-blue-600 transition-colors"
                  >
                    Decode
                  </button>
                </Form>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 transition-all duration-300">
                  {!!lastDecodedVin.length && (
                    <article className="w-full sm:w-1/3">
                      <List
                        label="Latest decoded VIN codes:"
                        className="mb-8 max-w-md"
                      >
                        {lastDecodedVin.map(vin => (
                          <li
                            key={vin}
                            onClick={() => setFieldValue('vinCode', vin)}
                            className={cn(
                              'border p-2 rounded bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors',
                              {
                                'bg-gray-200': vin === values.vinCode,
                              },
                            )}
                          >
                            <span>{vin}</span>
                          </li>
                        ))}
                      </List>
                    </article>
                  )}

                  {isLoading && <p className="text-left">Loading...</p>}
                  {!!transformedSpecs.length && (
                    <article className="w-full sm:w-2/3">
                      <List label="Decoding results:" className="max-w-3xl">
                        {transformedSpecs.map(({ Value, Variable, uniqId }) => (
                          <li
                            key={uniqId}
                            className="border p-2 rounded bg-gray-50 transition-all duration-300"
                          >
                            <span className="font-semibold">{Variable}:</span>
                            <span>{Value}</span>
                          </li>
                        ))}
                      </List>
                    </article>
                  )}
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export { HomePage };
