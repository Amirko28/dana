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
                <label className={labelClassName}>{displayName}</label>{' '}
                {fieldError?.type === 'required' ? (
                    <ErrorMessage message="שדה חובה" />
                ) : fieldError?.type === 'validate' ? (
                    <ErrorMessage message="בחר אופציה" />
                ) : (
                    <></>
                )}
            </div>
            <select className="h-8 w-72 rounded" {...register}>
                <Options />
            </select>
        </div>
    );
};
