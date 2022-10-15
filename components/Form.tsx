import { useEffect } from 'react';
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

export type RegisterPayload = {
    fullName: string;
    idNumber: string;
    taxCheck: string;
    marriage: string;
    parallelJobs: boolean;
    independent: boolean;
    cleanedTax: string;
    compensation: boolean;
    payedTaxCompensation: string;
    gotMoneyFromBituhLeumi: string;
    withdrewMoney: string;
    depositedMoney: boolean;
    stockExchangeActivity: string;
    mashkanta: string;
    disabledFamily: string;
    familyHospitalization: boolean;
    donations: boolean;
    degreeEligibility: boolean;
    dischargeDateFromMilitary: Date;
    childrenInfo: string;
};

export const Form = () => {
    const mutation = useMutation(
        (registerPayload: RegisterPayload) => {
            return axios.post('/api/request', registerPayload);
        },
        {
            onSuccess: (data, variables, context) => reset(),
        }
    );

    const {
        watch,
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<RegisterPayload>();

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type)
        );

        return () => subscription.unsubscribe();
    });

    return (
        <form
            className="mt-8"
            onSubmit={handleSubmit((data) => {
                mutation.mutate(data);
            })}
        >
            <div className="space-y-11">
                <PersonalInfo register={register} errors={errors} />
                <FirstStep register={register} errors={errors} />
                <SecondStep register={register} errors={errors} />
                <ThirdStep register={register} errors={errors} />
                <FourthStep register={register} errors={errors} setValue={setValue} />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    <div className="h-full w-60">
                        <SubmitButton />
                    </div>
                    {mutation.isLoading ? (
                        <Loading />
                    ) : mutation.isError ? (
                        <div className={labelClassName}>התרחשה שגיאה...</div>
                    ) : mutation.isSuccess ? (
                        <div className={labelClassName}>פנייה התקבלה!</div>
                    ) : (
                        <div className="h-4 w-4"></div>
                    )}
                </div>
            </div>
        </form>
    );
};
