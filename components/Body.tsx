import { useForm } from 'react-hook-form';
import { labelClassName, TextField } from './TextField';

export const Body = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                        register={{ ...register('fullName', { required: true }) }}
                    />
                    <TextField
                        key="id"
                        displayName="מספר ת.ז"
                        register={{ ...register('id', { required: true }) }}
                    />
                    <div className="flex w-full justify-center">
                        <input
                            className={`
                                ${labelClassName}
                                mt-6
                                w-full
                                cursor-pointer
                                rounded
                                border-none
                                bg-pink-400
                                p-5
                                font-extrabold
                                tracking-widest
                                shadow-md
                                transition
                                duration-150
                                ease-in-out
                                hover:bg-pink-500
                                hover:shadow-lg 
                                focus:shadow-lg
                                focus:outline-none
                                focus:ring-0
                                active:bg-pink-600
                                active:shadow-lg
                                `}
                            value="שלח"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
