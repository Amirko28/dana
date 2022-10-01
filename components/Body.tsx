import { useForm } from 'react-hook-form';
import { SubmitButton } from './SubmitButton';
import { TextField } from './TextField';

export const Body = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            id: '',
        },
    });

    return (
        <div
            dir="rtl"
            className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-700 font-body"
        >
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(JSON.stringify(data));
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
                            ...register('id', {
                                required: true,
                                valueAsNumber: true,
                                validate: (value) =>
                                    value.toString().length === 9 && +value > 0,
                            }),
                        }}
                        fieldError={errors.id}
                    />
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
};
