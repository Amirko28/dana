import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubmitButton } from './SubmitButton';
import { TextField } from './TextField';
import { Loading } from './Loading';
import { labelClassName } from '../styles/tailwind/textLabel';

interface RegisterPayload {
    fullName: string;
    idNumber: string;
}

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
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterPayload>();

    return (
        <form
            onSubmit={handleSubmit((data) => {
                mutation.mutate(data);
            })}
        >
            <div className="space-y-8">
                <TextField
                    key="fullName"
                    displayName="שם מלא"
                    register={{
                        ...register('fullName', { required: true }),
                    }}
                    fieldError={errors.fullName}
                />
                <TextField
                    key="id"
                    displayName="מספר ת.ז"
                    register={{
                        ...register('idNumber', {
                            required: true,
                            validate: (value) =>
                                value.toString().length === 9 && +value > 0,
                        }),
                    }}
                    fieldError={errors.idNumber}
                />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    <SubmitButton />
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
