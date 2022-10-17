import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubmitButton } from './common/form';
import { labelClassName } from '../styles/tailwind/textLabel';
import { PersonalInfo } from './questions/PersonalInfo';
import { FirstStep } from './questions/FirstStep';
import { SecondStep } from './questions/SecondStep';
import { ThirdStep } from './questions/ThirdStep';
import { FourthStep } from './questions/FourthStep';
import { RegisterRequest } from '../models/request';
import { postRequest } from '../services/request';
import { useRouter } from 'next/router';

export const Form = () => {
    const { push } = useRouter();

    const { mutate, isLoading, isError, isSuccess } = useMutation(postRequest, {
        onSuccess: (data, variables, context) => {
            reset();
            push('/finish');
        },
    });

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterRequest>();

    return (
        <form
            className="my-8 h-full w-full"
            onSubmit={handleSubmit((data) => {
                mutate(data);
            })}
        >
            <div className="space-y-11">
                <FirstStep register={register} errors={errors} watch={watch} />
                <SecondStep register={register} errors={errors} />
                <ThirdStep register={register} errors={errors} />
                <FourthStep register={register} errors={errors} setValue={setValue} />
                <PersonalInfo register={register} errors={errors} />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    {isError ? <div className={labelClassName}>התרחשה שגיאה</div> : <></>}
                    <div className="h-full w-60">
                        <SubmitButton isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </form>
    );
};
