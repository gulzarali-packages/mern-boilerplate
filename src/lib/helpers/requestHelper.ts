import { validate, ValidationError } from 'class-validator';
import { Request, Response } from 'express';

export async function handleRequestValidation(req: Request, res: Response, requestObject: any, serviceFunction: any, resourceObject: any) {
  try {
    const request = new requestObject(req);
    const errors = await validate(request);

    if (errors.length > 0) {
      const errorResponse: { [key: string]: string } = {};
      errors.forEach((error: ValidationError) => {
        Object.keys(error.constraints).forEach(key => {
          errorResponse[error.property] = error.constraints[key];
        });
      });
      return res.status(422).json({ errors: errorResponse });
    }
    console.log('req:',req.body,serviceFunction);
    const result: any = await serviceFunction(req);
    return res.status(200).json(new resourceObject(result));
  } catch (error) {
    return res.status(500).json(new Error(error));
  }
}
