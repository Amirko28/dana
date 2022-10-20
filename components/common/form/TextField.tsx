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
        <div className={`${labelClassName} relative z-0 h-20 w-40 -space-y-2 lg:w-72`}>
            <input
                type="text"
                id={displayName}
                className="peer mr-1 block w-full appearance-none border-0 border-b-2 border-tertiary bg-transparent py-2.5 px-0 text-base font-normal text-secondary focus:border-secondary focus:outline-none focus:ring-0 lg:text-lg"
                placeholder=" "
                {...register}
            />
            <label
                htmlFor={displayName}
                className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 translate-x-1/4 scale-75 truncate whitespace-pre-wrap break-words text-secondary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:translate-x-1/4 peer-focus:scale-75 peer-focus:text-secondary"
            >
                {displayName}
            </label>
            <div className="mr-1">
                {fieldError?.type === 'required' ? (
                    <ErrorMessage message="שדה חובה" />
                ) : fieldError?.type === 'validate' ? (
                    <ErrorMessage message="לא תקין" />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
