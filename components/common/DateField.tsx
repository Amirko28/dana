import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../styles/tailwind/textLabel';
import { ErrorMessage } from './ErrorMessage';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
}

export const DateField = ({ displayName, register, fieldError }: Props) => {
    return (
        <div
            key={displayName}
            dir="rtl"
            className={`${labelClassName} flex flex-col space-y-3`}
        >
            <div className="flex flex-row items-center justify-start">
                <label htmlFor={displayName} className={`${labelClassName} mb-2 block`}>
                    {displayName}
                </label>
            </div>
            <input
                type={'date'}
                id={displayName}
                className={`w-1/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
                {...register}
            />
            <div className={`${labelClassName} mr-1`}>
                {fieldError?.type === 'required' ? (
                    <ErrorMessage message="שדה חובה" />
                ) : fieldError?.type === 'validate' ? (
                    <ErrorMessage message="בחר אופציה" />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
