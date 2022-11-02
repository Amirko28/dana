import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { labelClassName } from '../../../styles/tailwind/textLabel';

interface Props {
    displayName?: string;
    placeHolder?: string;
    register: UseFormRegisterReturn;
}

export const TextArea = ({ displayName, placeHolder, register }: Props) => {
    return (
        <div className={`${labelClassName} space-y-4`}>
            {displayName ? (
                <label
                    htmlFor="message"
                    className="mb-2 block text-secondary peer-focus:text-primary"
                >
                    {displayName}
                </label>
            ) : (
                <></>
            )}
            <textarea
                id="message"
                rows={4}
                className="h-full w-full resize-none rounded-lg border border-tertiary bg-background p-2.5 text-base font-normal text-secondary transition ease-in-out placeholder:text-secondary focus:border-secondary focus:outline-none lg:text-lg"
                placeholder={placeHolder ?? 'הקלד כאן...'}
                {...register}
            ></textarea>
        </div>
    );
};
