import { createContext, Dispatch, SetStateAction } from 'react';
import { Params, ParamSetters } from './hooks/useParams';
import { CalculationMode, ObjectData, Point3D } from './types';

interface AppContext {
  setErrorText: (text: string, timeout?: number) => void;
  forceRerender: () => void;
  readFile: (file: Blob) => void;
  objectData: ObjectData | undefined;
  lightPosition: Point3D;
  params: Params;
  paramSetters: ParamSetters;
  calculationMode: CalculationMode;
  setCalculationMode: Dispatch<SetStateAction<CalculationMode>>;
  supportsOffscreenCanvas: boolean | undefined;
}

const appContextDefaultValue: AppContext = {
  setErrorText: () => {},
  forceRerender: () => {},
  readFile: () => {},
  objectData: undefined,
  lightPosition: { x: 0, y: 0, z: 0 },
  params: {
    kd: 0,
    ks: 0,
    m: 0,
  },
  paramSetters: {
    setKd: () => {},
    setKs: () => {},
    setM: () => {},
  },
  calculationMode: CalculationMode.InterpolateColor,
  setCalculationMode: () => {},
  supportsOffscreenCanvas: undefined,
};

export const AppContext = createContext<AppContext>(appContextDefaultValue);
