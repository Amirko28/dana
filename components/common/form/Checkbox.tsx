import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form';
import { RegisterRequest } from '../../../models/request';
import { labelClassName } from '../../../styles/tailwind/textLabel';
import { TextArea } from './TextArea';

interface Props {
    baseKey: keyof RegisterRequest;
    displayName: string;
    register: UseFormRegisterReturn;
    registerComment?: UseFormRegisterReturn;
    commentFieldId?: keyof RegisterRequest;
    watch?: UseFormWatch<RegisterRequest>;
    checkboxOptions: CheckboxOption[];
}

interface CheckboxOption {
    displayName: string;
    value: string;
    openTextField?: boolean;
}

interface OptionalFieldProps {
    watch: UseFormWatch<RegisterRequest>;
    value: string;
    watchedFieldId: keyof RegisterRequest;
    fieldId: keyof RegisterRequest;
    register: UseFormRegisterReturn;
}

const OptionalField = ({
    watch,
    value,
    register,
    fieldId,
    watchedFieldId,
}: OptionalFieldProps) => {
    const watchedValue = watch(watchedFieldId) as string | string[];

    if (
        (typeof watchedValue === 'string' || Array.isArray(watchedValue)) &&
        (watchedValue === value || watchedValue.includes(value))
    )
        return <TextArea key={fieldId} placeHolder="פרט כאן..." register={register} />;
    return <></>;
};

export const Checkbox = ({
    baseKey,
    displayName,
    register,
    checkboxOptions,
    commentFieldId,
    registerComment,
    watch,
}: Props) => {
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
                        className="h-4 w-4 text-secondary focus:ring-2 focus:ring-secondary "
                        {...register}
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
            {watch && commentFieldId && registerComment ? (
                <OptionalField
                    watchedFieldId={baseKey}
                    fieldId={commentFieldId}
                    register={registerComment}
                    value={checkboxOptions[checkboxOptions.length - 1].value}
                    watch={watch}
                />
            ) : (
                <></>
            )}
        </div>
    );
};
