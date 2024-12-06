import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCpf(_validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    console.log('\n❓ ~_validationOptions:', _validationOptions, '❗\n');
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName: propertyName,
      options: { message: 'invalid cpf' },
      validator: {
        validate(value: any, _args: ValidationArguments) {
          return typeof value === 'string' && cpf.isValid(value);
        },
      },
    });
  };
}
