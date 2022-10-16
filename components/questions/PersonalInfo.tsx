import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { RegisterRequest } from '../../models/request';
import { TextField } from '../common/form';

interface Props {
    register: UseFormRegister<RegisterRequest>;
    errors: FieldErrorsImpl<RegisterRequest>;
}

export const PersonalInfo = ({ register, errors }: Props) => {
    return (
        <>
            <TextField
                key="fullName"
                displayName="שם מלא"
                register={{
                    ...register('fullName', { required: true }),
                }}
                fieldError={errors.fullName}
            />
            <TextField
                key="email"
                displayName="אימייל"
                register={{
                    ...register('email', {
                        required: true,
                        validate: (value) =>
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                value.toString()
                            ),
                    }),
                }}
                fieldError={errors.email}
            />
        </>
    );
};
