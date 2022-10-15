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
import { useEffect } from 'react';

export type RegisterPayload = {
    fullName: string;
    idNumber: string;
    taxCheck: string;
    marriage: string;
    parallelJobs: boolean;
    independent: boolean;
    cleanedTax: string;
    compensation: boolean;
    payedTaxCompensation: string;
    gotMoneyFromBituhLeumi: string;
    withdrewMoney: string;
    depositedMoney: boolean;
    stockExchangeActivity: string;
    mashkanta: string;
    disabledFamily: string;
    familyHospitalization: boolean;
    donations: boolean;
    degreeEligibility: boolean;
    dischargeDateFromMilitary: Date;
    childrenInfo: string;
};

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
        watch,
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<RegisterPayload>();

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type)
        );

        return () => subscription.unsubscribe();
    });

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
                <Checkbox
                    baseKey="withdrewMoney"
                    displayName="האם משכת כספים מקרן השתלמות / קופת גמל (לפני הזמן המותר בחוק)?"
                    register={{
                        ...register('withdrewMoney'),
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
                <Radio
                    baseKey="depositedMoney"
                    displayName="האם משכת כספים מקרן השתלמות/קופת גמל (לפני הזמן המותר בחוק)?"
                    register={{
                        ...register('depositedMoney'),
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
                    baseKey="stockExchangeActivity"
                    displayName="האם הייתה לך פעילות בבורסה שהניבה רווחים/הפסדים במהלך השנים 2016-2021?"
                    register={{
                        ...register('stockExchangeActivity'),
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
                    baseKey="mashkanta"
                    displayName="האם בוצעו תשלומים למשכנתא במהלך השנים?"
                    register={{
                        ...register('mashkanta'),
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
                    ]}
                />
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
