import { UseFormRegister, FieldErrorsImpl, UseFormWatch } from 'react-hook-form';
import { Checkbox } from '../common/form/Checkbox';
import { Radio } from '../common/form';
import { RegisterRequest } from '../../models/request';

interface Props {
    register: UseFormRegister<RegisterRequest>;
    errors: FieldErrorsImpl<RegisterRequest>;
    watch: UseFormWatch<RegisterRequest>;
}

export const FirstStep = ({ register, errors, watch }: Props) => {
    return (
        <>
            <Radio
                baseKey="taxCheck"
                displayName="האם ביצעת בדיקת החזר מס עבור השנים 2016-2021?"
                register={{
                    ...register('taxCheck'),
                }}
                radioOptions={[
                    {
                        displayName: 'לא',
                        value: 'no',
                    },
                    {
                        displayName: 'כן',
                        value: 'yes',
                    },
                    {
                        displayName: 'לא זוכר',
                        value: 'cantRemember',
                    },
                ]}
            />
            <Checkbox
                baseKey="marriage"
                displayName="האם התחתנת (ברבנות) במהלך השנים 2016-2022?"
                register={{
                    ...register('marriage'),
                }}
                checkboxOptions={[
                    {
                        displayName: 'כן',
                        value: 'yes',
                    },
                    {
                        displayName: 'לא',
                        value: 'no',
                    },
                    {
                        displayName: 'נשוי אך לא ברבנות',
                        value: 'notRabanut',
                    },
                    {
                        displayName: 'אחר',
                        value: 'other',
                    },
                ]}
                watch={watch}
                commentFieldId={'marriageComment'}
                key="marriage"
                registerComment={{
                    ...register('marriageComment'),
                }}
            />
            <Radio
                baseKey="parallelJobs"
                displayName="האם במהלך השנים 2016-2021 עבדת במספר עבודות במקביל, או פחות מ-12 חודשים בשנה?"
                register={{
                    ...register('parallelJobs'),
                }}
                radioOptions={[
                    {
                        displayName: 'לא',
                        value: false,
                    },
                    {
                        displayName: 'כן',
                        value: true,
                    },
                ]}
            />
            <Radio
                baseKey="independent"
                displayName="האם במהלך השנים 2016-2022 עבדת גם כעצמאי?"
                register={{
                    ...register('independent'),
                }}
                radioOptions={[
                    {
                        displayName: 'לא',
                        value: false,
                    },
                    {
                        displayName: 'כן',
                        value: true,
                    },
                ]}
            />
        </>
    );
};
