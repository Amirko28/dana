import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubmitButton } from './SubmitButton';
import { TextField } from './common/TextField';
import { Loading } from './Loading';
import { labelClassName } from '../styles/tailwind/textLabel';
import { defaultSelectKey, Select } from './common/Select';
import { Checkbox } from './common/Checkbox';
import { DateField } from './common/DateField';
import { TextArea } from './common/TextArea';
import { Radio } from './common/Radio';

interface RegisterPayload {
    fullName: string;
    idNumber: string;
    taxCheck: string;
    marriage: string;
    independent: string;
    parallelJobs: string;
    cleanedTax: string;
    compensation: string;
    payedTaxCompensation: string;
    gotMoneyFromBituhLeumi: string;
    withdrewMoney: string;
    depositedMoney: string;
    stockExchangeActivity: string;
    mashkanta: string;
    disabledFamily: string;
    familyHospitalization: string;
    donations: string;
    degreeEligibility: string;
    dischargeDateFromMilitary: Date;
    childrenInfo: string;
}

export const Form = () => {
    const mutation = useMutation(
        (registerPayload: RegisterPayload) => {
            return axios.post('/api/request', registerPayload);
        },
        {
            onSuccess: (data, variables, context) => reset(),
        }
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterPayload>();

    return (
        <form
            className="mt-8"
            onSubmit={handleSubmit((data) => {
                mutation.mutate(data);
            })}
        >
            <div className="space-y-11">
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
                            validate: (value) =>
                                value.toString().length === 9 && +value > 0,
                        }),
                    }}
                    fieldError={errors.idNumber}
                />
                <Radio
                    baseKey="taxCheck"
                    displayName="האם ביצעת בדיקת החזר מס עבור השנים 2016-2021?"
                    register={{
                        ...register('taxCheck', {
                            required: true,
                        }),
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
                <Select
                    baseKey="marriage"
                    displayName="האם התחתנת (ברבנות) במהלך השנים 2016-2022?"
                    register={{
                        ...register('marriage', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.marriage}
                    selectOptions={{
                        2016: 'בשנת 2016',
                        2017: 'בשנת 2017',
                        2018: 'בשנת 2018',
                        2019: 'בשנת 2019',
                        2020: 'בשנת 2020',
                        2021: 'בשנת 2021',
                        2022: 'בשנת 2022',
                        notRabanut: 'נשוי אך לא דרך הרבנות',
                        notMarried: 'רווק / פרוד / אלמן / גרוש',
                    }}
                />
                <Radio
                    baseKey="parallelJobs"
                    displayName="האם במהלך השנים 2016-2021 עבדת במספר עבודות במקביל, או פחות מ-12 חודשים בשנה?"
                    register={{
                        ...register('parallelJobs', {
                            required: true,
                        }),
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
                    ]}
                />
                <Radio
                    baseKey="independent"
                    displayName="האם במהלך השנים 2016-2022 עבדת גם כעצמאי?"
                    register={{
                        ...register('independent', {
                            required: true,
                        }),
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
                    ]}
                />
                <Radio
                    baseKey="cleanedTax"
                    displayName="האם נוכה לך מס הכנסה בתלושי השכר במהלך השנים?"
                    register={{
                        ...register('cleanedTax', {
                            required: true,
                        }),
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
                        ...register('compensation', {
                            required: true,
                        }),
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
                    ]}
                />
                <Checkbox
                    baseKey="payedTaxCompensation"
                    displayName="האם שילמת מס על פיצויי פיטורין?"
                    register={{
                        ...register('payedTaxCompensation', {
                            required: true,
                        }),
                    }}
                    checkboxOptions={[
                        {
                            displayName: 'בשנת 2016',
                            value: '2016',
                        },
                        {
                            displayName: 'בשנת 2017',
                            value: '2017',
                        },
                        {
                            displayName: 'בשנת 2018',
                            value: '2018',
                        },
                        {
                            displayName: 'בשנת 2019',
                            value: '2019',
                        },
                        {
                            displayName: 'בשנת 2020',
                            value: '2020',
                        },
                        {
                            displayName: 'בשנת 2021',
                            value: '2021',
                        },
                        {
                            displayName: 'בשנת 2022',
                            value: '2022',
                        },
                    ]}
                />
                <Radio
                    baseKey="gotMoneyFromBituhLeumi"
                    displayName="האם קיבלת בשנים 2016-2021 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi', {
                            required: true,
                        }),
                    }}
                    radioOptions={[
                        {
                            displayName: 'לא',
                            value: 'no',
                        },
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
                <Checkbox
                    baseKey="withdrewMoney"
                    displayName="האם משכת כספים מקרן השתלמות / קופת גמל (לפני הזמן המותר בחוק)?"
                    register={{
                        ...register('withdrewMoney', {
                            required: true,
                        }),
                    }}
                    checkboxOptions={[
                        {
                            displayName: 'בשנת 2016',
                            value: '2016',
                        },
                        {
                            displayName: 'בשנת 2017',
                            value: '2017',
                        },
                        {
                            displayName: 'בשנת 2018',
                            value: '2018',
                        },
                        {
                            displayName: 'בשנת 2019',
                            value: '2019',
                        },
                        {
                            displayName: 'בשנת 2020',
                            value: '2020',
                        },
                        {
                            displayName: 'בשנת 2021',
                            value: '2021',
                        },
                        {
                            displayName: 'בשנת 2022',
                            value: '2022',
                        },
                    ]}
                />
                <Radio
                    baseKey="depositedMoney"
                    displayName="האם משכת כספים מקרן השתלמות/קופת גמל (לפני הזמן המותר בחוק)?"
                    register={{
                        ...register('depositedMoney', {
                            required: true,
                        }),
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
                    ]}
                />
                <Checkbox
                    baseKey="stockExchangeActivity"
                    displayName="האם הייתה לך פעילות בבורסה שהניבה רווחים/הפסדים במהלך השנים 2016-2021?"
                    register={{
                        ...register('stockExchangeActivity', {
                            required: true,
                        }),
                    }}
                    checkboxOptions={[
                        {
                            displayName: 'בשנת 2016',
                            value: '2016',
                        },
                        {
                            displayName: 'בשנת 2017',
                            value: '2017',
                        },
                        {
                            displayName: 'בשנת 2018',
                            value: '2018',
                        },
                        {
                            displayName: 'בשנת 2019',
                            value: '2019',
                        },
                        {
                            displayName: 'בשנת 2020',
                            value: '2020',
                        },
                        {
                            displayName: 'בשנת 2021',
                            value: '2021',
                        },
                        {
                            displayName: 'בשנת 2022',
                            value: '2022',
                        },
                    ]}
                />
                <Checkbox
                    baseKey="mashkanta"
                    displayName="האם בוצעו תשלומים למשכנתא במהלך השנים?"
                    register={{
                        ...register('mashkanta', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    checkboxOptions={[
                        {
                            displayName: 'בשנת 2016',
                            value: '2016',
                        },
                        {
                            displayName: 'בשנת 2017',
                            value: '2017',
                        },
                        {
                            displayName: 'בשנת 2018',
                            value: '2018',
                        },
                        {
                            displayName: 'בשנת 2019',
                            value: '2019',
                        },
                        {
                            displayName: 'בשנת 2020',
                            value: '2020',
                        },
                        {
                            displayName: 'בשנת 2021',
                            value: '2021',
                        },
                    ]}
                />
                <TextField
                    key="disabledFamily"
                    displayName="האם קיים קרוב משפחה נטול יכולת (פיגור שכלי / עיוור / אוטיזם / לקוי למידה / חירש)?"
                    register={{
                        ...register('disabledFamily', { required: true }),
                    }}
                    fieldError={errors.disabledFamily}
                    variant="long"
                />
                <Radio
                    baseKey="familyHospitalization"
                    displayName="האם אתה משלם כספים עבור אשפוז הורה/בן זוג במוסד שיקומי?"
                    register={{
                        ...register('familyHospitalization', {
                            required: true,
                        }),
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
                    ]}
                />
                <TextField
                    key="donations"
                    displayName="האם ביצעת תרומות במהלך השנים 2016-2021 בסכום העולה על 200₪ ?"
                    register={{
                        ...register('donations', { required: true }),
                    }}
                    fieldError={errors.donations}
                    variant="long"
                />
                <Radio
                    baseKey="degreeEligibility"
                    displayName="האם קיימת זכאות לתואר ראשון/ שני?"
                    register={{
                        ...register('degreeEligibility', {
                            required: true,
                        }),
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
                    ]}
                />
                <DateField
                    key="dischargeDateFromMilitary"
                    displayName="אנא ציין את תאריך השחרור שלך משירות בצהל (תום שירות סדיר)"
                    register={{
                        ...register('dischargeDateFromMilitary', { required: true }),
                    }}
                    fieldError={errors.fullName}
                />
                <TextArea
                    key="childrenInfo"
                    displayName="אנא ציין את שמות, ת.ז ותאריכי הלידה של ילדיך"
                    register={{
                        ...register('childrenInfo'),
                    }}
                />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    <div className="h-full w-60">
                        <SubmitButton />
                    </div>
                    {mutation.isLoading ? (
                        <Loading />
                    ) : mutation.isError ? (
                        <div className={labelClassName}>התרחשה שגיאה...</div>
                    ) : mutation.isSuccess ? (
                        <div className={labelClassName}>פנייה התקבלה!</div>
                    ) : (
                        <div className="h-4 w-4"></div>
                    )}
                </div>
            </div>
        </form>
    );
};
