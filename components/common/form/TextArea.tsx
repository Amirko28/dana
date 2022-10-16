import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../../styles/tailwind/textLabel';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
}

export const TextArea = ({ displayName, register }: Props) => {
    return (
        <div className={`${labelClassName} space-y-4`}>
            <label
                htmlFor="message"
                className="mb-2 block text-gray-300 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
                {displayName}
            </label>
            <textarea
                id="message"
                rows={4}
                className="h-full w-full resize-none rounded-lg border border-gray-600 bg-zinc-900 p-2.5 text-base text-white transition ease-in-out placeholder:text-gray-400 focus:border-blue-500 focus:outline-none lg:text-lg"
                placeholder="הקלד כאן..."
                {...register}
            ></textarea>
        </div>
    );
};
