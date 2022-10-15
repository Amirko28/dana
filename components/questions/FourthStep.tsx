import { UseFormRegister, FieldErrorsImpl, UseFormSetValue } from 'react-hook-form';
import { DateField } from '../common/DateField';
import { Radio } from '../common/Radio';
import { TextArea } from '../common/TextArea';
import { TextField } from '../common/TextField';
import { RegisterPayload } from '../Form';

interface Props {
    register: UseFormRegister<RegisterPayload>;
    errors: FieldErrorsImpl<RegisterPayload>;
    setValue: UseFormSetValue<RegisterPayload>;
}

export const FourthStep = ({ register, errors, setValue }: Props) => {
    return (
        <>
            <TextField
                key="disabledFamily"
                displayName="האם קיים קרוב משפחה נטול יכולת (פיגור שכלי / עיוור / אוטיזם / לקוי למידה / חירש)?"
                register={{
                    ...register('disabledFamily'),
                }}
                variant="long"
            />
            <Radio
                baseKey="familyHospitalization"
                displayName="האם אתה משלם כספים עבור אשפוז הורה/בן זוג במוסד שיקומי?"
                register={{
                    ...register('familyHospitalization'),
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
                baseKey="donations"
                displayName="האם ביצעת תרומות במהלך השנים 2016-2021 בסכום העולה על 200₪ ?"
                register={{
                    ...register('donations'),
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
                baseKey="degreeEligibility"
                displayName="האם קיימת זכאות לתואר ראשון / שני?"
                register={{
                    ...register('degreeEligibility'),
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
            <DateField
                key="dischargeDateFromMilitary"
                displayName="אנא ציין את תאריך השחרור שלך משירות בצהל (תום שירות סדיר)"
                fieldValue="dischargeDateFromMilitary"
                setValue={setValue}
            />
            <TextArea
                key="childrenInfo"
                displayName="אנא ציין את שמות, ת.ז ותאריכי הלידה של ילדיך"
                register={{
                    ...register('childrenInfo'),
                }}
            />
        </>
    );
};
