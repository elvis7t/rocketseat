import type { HttpStatusCodeEnum } from '@/constants';

export type HttpErrorProps = {
  statusCode: HttpStatusCodeEnum;
  details?: unknown;
  message: string;
};

export class HttpError extends Error {
  public readonly statusCode: HttpErrorProps['statusCode'];
  public readonly details?: HttpErrorProps['details'];

  constructor({ statusCode, message, details }: HttpErrorProps) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}
