import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    displayName: string;
    register: UseFormRegisterReturn;
}

export const labelClassName = 'text-2xl font-bold text-gray-300';

export const TextField = ({ displayName, register }: Props) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className={labelClassName}>{displayName}</label>
            <input className="h-8 w-60 rounded" {...register} />
        </div>
    );
};
