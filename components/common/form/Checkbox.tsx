import { UseFormRegisterReturn } from 'react-hook-form';
import { labelClassName } from '../../../styles/tailwind/textLabel';

interface Props {
    baseKey: string;
    displayName: string;
    register: UseFormRegisterReturn;
    checkboxOptions: CheckboxOption[];
}

interface CheckboxOption {
    displayName: string;
    value: string;
}

export const Checkbox = ({ baseKey, displayName, register, checkboxOptions }: Props) => {
    const Options = () => (
        <div className="flex flex-row  flex-wrap">
            {checkboxOptions.map((option) => (
                <div
                    className="mb-4 ml-6 flex items-center"
                    key={`${baseKey}-${option.displayName}`}
                >
                    <input
                        id={`${baseKey}-${option.value}`}
                        type="checkbox"
                        value={option.value}
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        {...register}
                    />
                    <label
                        htmlFor={`${baseKey}-${option.value}`}
                        className="mr-2 text-base font-bold text-gray-900 dark:text-gray-300 lg:text-2xl"
                    >
                        {option.displayName}
                    </label>
                </div>
            ))}
        </div>
    );

    return (
        <div key={baseKey} className="flex flex-col space-y-3">
            <div className="flex flex-row items-center justify-start">
                <label className={labelClassName}>{displayName}</label>{' '}
            </div>
            <Options />
        </div>
    );
};
