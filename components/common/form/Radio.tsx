import { UseFormRegisterReturn } from 'react-hook-form';
import { labelClassName } from '../../../styles/tailwind/textLabel';

interface Props {
    baseKey: string;
    displayName: string;
    register: UseFormRegisterReturn;
    radioOptions: RadioOption[];
}

interface RadioOption {
    displayName: string;
    value: string | boolean;
}

export const Radio = ({ baseKey, displayName, register, radioOptions }: Props) => {
    const Options = () => (
        <div className="flex flex-row flex-wrap">
            {radioOptions.map((option, index) => (
                <div
                    className="mb-4 ml-6 flex items-center"
                    key={`${baseKey}-${option.displayName}`}
                >
                    <input
                        id={`${baseKey}-${option.value}`}
                        type="radio"
                        value={option.value.toString()}
                        className="h-4 w-4 focus:ring-2 focus:ring-secondary"
                        {...register}
                        defaultChecked={index === 0}
                    />
                    <label
                        htmlFor={`${baseKey}-${option.value}`}
                        className="mr-2 text-base font-normal text-secondary lg:text-2xl"
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
