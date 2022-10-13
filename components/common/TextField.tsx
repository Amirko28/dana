import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../styles/tailwind/textLabel';
import { ErrorMessage } from './ErrorMessage';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
}

export const TextField = ({ displayName, register, fieldError }: Props) => {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center justify-start">
                <label className={labelClassName}>{displayName}</label>{' '}
                {fieldError?.type === 'required' ? (
                    <ErrorMessage message="שדה חובה" />
                ) : fieldError?.type === 'validate' ? (
                    <ErrorMessage message="מספר ת.ז לא תקין" />
                ) : (
                    <></>
                )}
            </div>
            <input className="h-8 w-72 rounded" {...register} />
        </div>
    );
};
