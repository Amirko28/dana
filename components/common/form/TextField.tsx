import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../../styles/tailwind/textLabel';
import { ErrorMessage } from './ErrorMessage';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
}

export const TextField = ({ displayName, register, fieldError }: Props) => {
    return (
        <div className={`${labelClassName} relative z-0 h-20 w-full -space-y-2 lg:w-72`}>
            <input
                type="text"
                id={displayName}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent py-2.5 px-0 text-base text-white focus:border-blue-500 focus:outline-none focus:ring-0 lg:text-lg"
                placeholder=" "
                {...register}
            />
            <label
                htmlFor={displayName}
                className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 translate-x-1/4 scale-75 truncate whitespace-pre-wrap break-words text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:translate-x-1/4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-300 peer-focus:dark:text-blue-500"
            >
                {displayName}
            </label>
            <div>
                {fieldError?.type === 'required' ? (
                    <ErrorMessage message="שדה חובה" />
                ) : fieldError?.type === 'validate' ? (
                    <ErrorMessage message="מספר ת.ז לא תקין" />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
