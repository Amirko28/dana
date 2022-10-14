import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { labelClassName } from '../../styles/tailwind/textLabel';
import { ErrorMessage } from './ErrorMessage';

interface Props {
    baseKey: string;
    displayName: string;
    register: UseFormRegisterReturn;
    fieldError?: FieldError;
    selectOptions: Record<string, string>;
}

export const defaultSelectKey = '_default';

const sortOptions = (options: string[]): string[] =>
    options.sort((first, second) => {
        if (first === defaultSelectKey) return -1;
        if (second === defaultSelectKey) return 1;
        return first > second ? 1 : -1;
    });
export const Select = ({
    baseKey,
    displayName,
    register,
    fieldError,
    selectOptions,
}: Props) => {
    selectOptions[defaultSelectKey] = 'בחר';
    const Options = () => (
        <>
            {sortOptions(Object.keys(selectOptions)).map((key) => (
                <option key={`${baseKey}-${key}`} value={key}>
                    {selectOptions[key]}
                </option>
            ))}
        </>
    );

    return (
        <div key={baseKey} className="flex flex-col space-y-3">
            <div className="flex flex-row items-center justify-start">
                <label htmlFor={displayName} className={`${labelClassName} mb-2 block`}>
                    {displayName}
                </label>
            </div>
            <select
                id={displayName}
                className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
                {...register}
            >
                <Options />
            </select>
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
