import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../styles/tailwind/textLabel';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
}

export const TextArea = ({ displayName, register }: Props) => {
    return (
        <div className={`${labelClassName} relative z-0 h-24 space-y-4`}>
            <label
                htmlFor="message"
                className="mb-2 block text-gray-300 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
                {displayName}
            </label>
            <textarea
                id="message"
                rows={4}
                className="block h-full w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="הקלד כאן..."
                {...register}
            ></textarea>
        </div>
    );
};
