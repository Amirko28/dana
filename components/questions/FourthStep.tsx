import { UseFormRegister, FieldErrorsImpl, UseFormSetValue } from 'react-hook-form';
import { RegisterRequest } from '../../models/request';
import { DateField, Radio, TextArea } from '../common/form';

interface Props {
    register: UseFormRegister<RegisterRequest>;
    errors: FieldErrorsImpl<RegisterRequest>;
    setValue: UseFormSetValue<RegisterRequest>;
}

export const FourthStep = ({ register, errors, setValue }: Props) => {
    return (
        <>
            <TextArea
                key="disabledFamily"
                displayName="האם קיים קרוב משפחה נטול יכולת (פיגור שכלי / עיוור / אוטיזם / לקוי למידה / חירש)?"
                register={register('disabledFamily')}
            />
            <Radio
                baseKey="familyHospitalization"
                displayName="האם אתה משלם כספים עבור אשפוז הורה / בן זוג במוסד שיקומי?"
                register={register('familyHospitalization')}
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
                displayName="האם ביצעת תרומות במהלך השנים 2016-2021 בסכום העולה על 200₪?"
                register={register('donations')}
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
                register={register('degreeEligibility')}
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
                displayName="אנא ציין את שנת השחרור שלך משירות בצהל (תום שירות סדיר) "
                fieldValue="dischargeDateFromMilitary"
                setValue={setValue}
            />
            <TextArea
                key="childrenInfo"
                displayName="אנא ציין את שמות, ת.ז ותאריכי הלידה של ילדיך"
                register={register('childrenInfo')}
            />
        </>
    );
};
