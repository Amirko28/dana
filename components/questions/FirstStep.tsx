import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { Checkbox } from '../common/Checkbox';
import { Radio } from '../common/Radio';
import { RegisterPayload } from '../Form';

interface Props {
    register: UseFormRegister<RegisterPayload>;
    errors: FieldErrorsImpl<RegisterPayload>;
}

export const FirstStep = ({ register, errors }: Props) => {
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
                    ...register('marriage', {
                        required: true,
                    }),
                }}
                checkboxOptions={[
                    {
                        displayName: 'ב2016',
                        value: '2016',
                    },
                    {
                        displayName: 'ב2017',
                        value: '2017',
                    },
                    {
                        displayName: 'ב2018',
                        value: '2018',
                    },
                    {
                        displayName: 'ב2019',
                        value: '2019',
                    },
                    {
                        displayName: 'ב2020',
                        value: '2020',
                    },
                    {
                        displayName: 'ב2021',
                        value: '2021',
                    },
                    {
                        displayName: 'ב2022',
                        value: '2022',
                    },
                    {
                        displayName: 'נשוי אך לא ברבנות',
                        value: 'notRabanut',
                    },
                ]}
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
