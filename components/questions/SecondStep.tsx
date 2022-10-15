import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { Checkbox } from '../common/Checkbox';
import { Radio } from '../common/Radio';
import { RegisterPayload } from '../Form';

interface Props {
    register: UseFormRegister<RegisterPayload>;
    errors: FieldErrorsImpl<RegisterPayload>;
}

export const SecondStep = ({ register, errors }: Props) => {
    return (
        <>
            <Radio
                baseKey="cleanedTax"
                displayName="האם נוכה לך מס הכנסה בתלושי השכר במהלך השנים?"
                register={{
                    ...register('cleanedTax'),
                }}
                radioOptions={[
                    {
                        displayName: 'למעולם לא',
                        value: 'never',
                    },
                    {
                        displayName: 'כן, לעיתים',
                        value: 'sometimes',
                    },
                    {
                        displayName: 'כן, באופן קבוע',
                        value: 'regularly',
                    },
                ]}
            />
            <Radio
                baseKey="compensation"
                displayName="האם קיבלת פיצויי פיטורין במהלך השנים 2016-2021 (רלוונטי רק אם השכר גבוה מ-12,000₪)?"
                register={{
                    ...register('compensation'),
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
            <Checkbox
                baseKey="payedTaxCompensation"
                displayName="האם שילמת מס על פיצויי פיטורין?"
                register={{
                    ...register('payedTaxCompensation'),
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
                ]}
            />
            <Checkbox
                baseKey="gotMoneyFromBituhLeumi"
                displayName="האם קיבלת בשנים 2016-2021 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                register={{
                    ...register('gotMoneyFromBituhLeumi'),
                }}
                checkboxOptions={[
                    {
                        displayName: 'דמי למידה',
                        value: 'dmeiLeida',
                    },
                    {
                        displayName: 'דמי מילואים',
                        value: 'dmeiMiluim',
                    },
                    {
                        displayName: 'דמי אבטלה',
                        value: 'dmeiAvtala',
                    },
                    {
                        displayName: 'דמי תאונת עבודה',
                        value: 'dmeiTeunatAvoda',
                    },
                ]}
            />
        </>
    );
};
