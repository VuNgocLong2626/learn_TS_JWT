import { IRequest, IResponse, INext } from '@interface-vendors/index';

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// export const asyncHandler = (fn: Function) => {
//     return (req: IRequest, res: IResponse, next: INext) => {
//         fn(req, res, next).catch(next);
//     }
// }

export const asyncHandler = (fn: Function) => (req: IRequest, res: IResponse, next: INext) => fn(req, res, next).catch(next);