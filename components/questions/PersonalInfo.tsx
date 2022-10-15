import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { TextField } from '../common/TextField';
import { RegisterPayload } from '../Form';

interface Props {
    register: UseFormRegister<RegisterPayload>;
    errors: FieldErrorsImpl<RegisterPayload>;
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
                key="id"
                displayName="מספר ת.ז"
                register={{
                    ...register('idNumber', {
                        required: true,
                        validate: (value) => value.toString().length === 9 && +value > 0,
                    }),
                }}
                fieldError={errors.idNumber}
            />
        </>
    );
};
