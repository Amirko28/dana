import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../styles/tailwind/textLabel';
import { ErrorMessage } from './ErrorMessage';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
    variant?: 'regular' | 'long';
}

const getWidth = (variant: 'regular' | 'long'): string =>
    variant === 'regular' ? 'w-72' : 'w-11/12';

export const TextField = ({
    displayName,
    register,
    fieldError,
    variant = 'regular',
}: Props) => {
    return (
        <div
            className={`${labelClassName} relative z-0 h-20 ${getWidth(
                variant
            )} -space-y-4`}
        >
            <input
                type="text"
                id="floating_standard"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                {...register}
            />
            <label
                htmlFor="floating_standard"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 translate-x-1/4 scale-75 truncate text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:translate-x-1/4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
                {displayName}
            </label>
            <div className="-mt-8">
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
