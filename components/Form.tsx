import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubmitButton } from './common/form';
import { Loading } from './Loading';
import { labelClassName } from '../styles/tailwind/textLabel';
import { PersonalInfo } from './questions/PersonalInfo';
import { FirstStep } from './questions/FirstStep';
import { SecondStep } from './questions/SecondStep';
import { ThirdStep } from './questions/ThirdStep';
import { FourthStep } from './questions/FourthStep';
import { RegisterRequest } from '../models/request';
import { postRequest } from '../services/request';

export const Form = () => {
    const mutation = useMutation(postRequest, {
        onSuccess: (data, variables, context) => {
            console.log('SUCC', data, variables, context);
            reset();
        },
        onError: (error, variables, context) =>
            console.log('ERR', error, variables, context),
        onSettled: (data, error, variables, context) =>
            console.log('SETTLED', error, variables, context),
        onMutate: (variables) => console.log('MUT', variables),
    });

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<RegisterRequest>();

    return (
        <form
            className="my-8 h-full w-full"
            onSubmit={handleSubmit((data) => {
                mutation.mutate(data);
            })}
        >
            <div className="space-y-11">
                <FirstStep register={register} errors={errors} />
                <SecondStep register={register} errors={errors} />
                <ThirdStep register={register} errors={errors} />
                <FourthStep register={register} errors={errors} setValue={setValue} />
                <PersonalInfo register={register} errors={errors} />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    {mutation.isLoading ? (
                        <Loading />
                    ) : mutation.isError ? (
                        <div className={labelClassName}>התרחשה שגיאה</div>
                    ) : mutation.isSuccess ? (
                        <div className={labelClassName}>פנייה התקבלה!</div>
                    ) : (
                        <div className="h-4 w-4"></div>
                    )}
                    <div className="h-full w-60">
                        <SubmitButton />
                    </div>
                </div>
            </div>
        </form>
    );
};
