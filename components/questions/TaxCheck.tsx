import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
}

export const TaxCheck = ({ displayName, register, fieldError }: Props) => {};
