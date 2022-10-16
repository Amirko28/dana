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
