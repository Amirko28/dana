import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubmitButton } from './SubmitButton';
import { TextField } from './common/TextField';
import { Loading } from './Loading';
import { labelClassName } from '../styles/tailwind/textLabel';
import { defaultSelectKey, Select } from './common/Select';
import { Checkbox } from './common/Checkbox';
import { FileUpload } from './common/FileUpload';
import { DateField } from './common/DateField';

interface RegisterPayload {
    fullName: string;
    idNumber: string;
    taxCheck: string;
    marriage: string;
    marriageFile: unknown[];
    independent: string;
    cleanedTax: string;
    compensation: string;
    payedTaxCompensation: string;
    gotMoneyFromBituhLeumi2016: string;
    gotMoneyFromBituhLeumi2017: string;
    gotMoneyFromBituhLeumi2018: string;
    gotMoneyFromBituhLeumi2019: string;
    gotMoneyFromBituhLeumi2020: string;
    gotMoneyFromBituhLeumi2021: string;
    withdrewMoney: string;
    depositedMoney: string;
    stockExchangeActivity: string;
    mashkanta: string;
    disabledFamily: string;
    disabledFamilyFiles: unknown[];
    familyHospitalization: string;
    donations2016: string;
    donations2017: string;
    donations2018: string;
    donations2019: string;
    donations2020: string;
    donations2021: string;
    degreeEligibility: string;
    degreeEligibilityFiles: unknown[];
    dischargeDateFromMilitary: Date;
    childrenNames: string[];
    childrenIds: string[];
    childrenBirthDates: Date[];
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
            <div className="space-y-8">
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
                <Select
                    baseKey="taxCheck"
                    displayName="האם ביצעת בדיקת החזר מס עבור השנים 2016-2021?"
                    register={{
                        ...register('taxCheck', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.taxCheck}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                        cantRemember: 'לא זוכר',
                    }}
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
                <Select
                    baseKey="independent"
                    displayName="האם במהלך השנים 2016-2022 עבדת גם כעצמאי?"
                    register={{
                        ...register('independent', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.independent}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="cleanedTax"
                    displayName="האם נוכה לך מס הכנסה בתלושי השכר במהלך השנים?"
                    register={{
                        ...register('cleanedTax', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.cleanedTax}
                    selectOptions={{
                        regularly: 'כן באופן קבוע',
                        sometimes: 'כן לעיתים',
                        never: 'מעולם לא',
                    }}
                />
                <Select
                    baseKey="compensation"
                    displayName="האם קיבלת פיצויי פיטורין במהלך השנים 2016-2021 (רלוונטי רק אם השכר גבוה מ-12,000₪)?"
                    register={{
                        ...register('compensation', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.compensation}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                    }}
                />
                <Checkbox
                    baseKey="payedTaxCompensation"
                    displayName="האם שילמת מס על פיצויי פיטורין?"
                    register={{
                        ...register('payedTaxCompensation', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.payedTaxCompensation}
                    selectOptions={{
                        2016: 'כן, בשנת 2016',
                        2017: 'כן, בשנת 2017',
                        2018: 'כן, בשנת 2018',
                        2019: 'כן, בשנת 2019',
                        2020: 'כן, בשנת 2020',
                        2021: 'כן, בשנת 2021',
                        2022: 'כן, בשנת 20226',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2016"
                    displayName="האם קיבלת בשנת 2016 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2016', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2016}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2017"
                    displayName="האם קיבלת בשנת 2017 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2017', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2017}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2018"
                    displayName="האם קיבלת בשנת 2018 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2018', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2018}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2019"
                    displayName="האם קיבלת בשנת 2019 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2019', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2019}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2020"
                    displayName="האם קיבלת בשנת 2020 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2020', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2020}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Select
                    baseKey="gotMoneyFromBituhLeumi2021"
                    displayName="האם קיבלת בשנת 2021 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)?"
                    register={{
                        ...register('gotMoneyFromBituhLeumi2021', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.gotMoneyFromBituhLeumi2021}
                    selectOptions={{
                        dmeiLeida: 'דמי לידה',
                        dmeiMiluim: 'דמי מילואים',
                        dmeiAvtala: 'דמי אבטלה',
                        dmeiTeunatAvoda: 'דמי תאונת עבודה',
                        no: 'לא',
                    }}
                />
                <Checkbox
                    baseKey="withdrewMoney"
                    displayName="האם משכת כספים מקרן השתלמות / קופת גמל (לפני הזמן המותק בחוק)?"
                    register={{
                        ...register('withdrewMoney', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.withdrewMoney}
                    selectOptions={{
                        2016: 'בשנת 2016',
                        2017: 'בשנת 2017',
                        2018: 'בשנת 2018',
                        2019: 'בשנת 2019',
                        2020: 'בשנת 2020',
                        2021: 'בשנת 2021',
                        2022: 'בשנת 2022',
                    }}
                />
                <Select
                    baseKey="depositedMoney"
                    displayName="האם משכת כספים מקרן השתלמות/קופת גמל (לפני הזמן המותר בחוק)?"
                    register={{
                        ...register('depositedMoney', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.depositedMoney}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                    }}
                />
                <Checkbox
                    baseKey="stockExchangeActivity"
                    displayName="האם הייתה לך פעילות בבורסה שהניבה רווחים/הפסדים במהלך השנה?"
                    register={{
                        ...register('stockExchangeActivity', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.stockExchangeActivity}
                    selectOptions={{
                        2016: 'בשנת 2016',
                        2017: 'בשנת 2017',
                        2018: 'בשנת 2018',
                        2019: 'בשנת 2019',
                        2020: 'בשנת 2020',
                        2021: 'בשנת 2021',
                        2022: 'בשנת 2022',
                    }}
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
                    fieldError={errors.stockExchangeActivity}
                    selectOptions={{
                        2016: 'בשנת 2016',
                        2017: 'בשנת 2017',
                        2018: 'בשנת 2018',
                        2019: 'בשנת 2019',
                        2020: 'בשנת 2020',
                        2021: 'בשנת 2021',
                    }}
                />
                <TextField
                    key="disabledFamily"
                    displayName="האם קיים במשפחה קרוב נטול יכולת (פיגור שכלי/עיוור/אוטיזם/לקוי למידה/חירש)?"
                    register={{
                        ...register('disabledFamily', { required: true }),
                    }}
                    fieldError={errors.disabledFamily}
                />
                <FileUpload
                    key="disabledFamilyFile"
                    displayName="יש לצרף אישורים מתאימים"
                    register={{
                        ...register('disabledFamilyFiles', { required: true }),
                    }}
                />
                <Select
                    baseKey="familyHospitalization"
                    displayName="האם אתה משלם כספים עבור אשפוז הורה/בן זוג במוסד שיקומי?"
                    register={{
                        ...register('familyHospitalization', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.familyHospitalization}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                    }}
                />
                <TextField
                    key="donations2016"
                    displayName="האם ביצעת תרומות במהלך שנת 2016 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2016', { required: true }),
                    }}
                    fieldError={errors.donations2016}
                />
                <TextField
                    key="donations2017"
                    displayName="האם ביצעת תרומות במהלך שנת 2017 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2017', { required: true }),
                    }}
                    fieldError={errors.donations2017}
                />
                <TextField
                    key="donations2018"
                    displayName="האם ביצעת תרומות במהלך שנת 2018 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2018', { required: true }),
                    }}
                    fieldError={errors.donations2018}
                />
                <TextField
                    key="donations2019"
                    displayName="האם ביצעת תרומות במהלך שנת 2019 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2019', { required: true }),
                    }}
                    fieldError={errors.donations2019}
                />
                <TextField
                    key="donations2020"
                    displayName="האם ביצעת תרומות במהלך שנת 2020 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2020', { required: true }),
                    }}
                    fieldError={errors.donations2020}
                />
                <TextField
                    key="donations2021"
                    displayName="האם ביצעת תרומות במהלך שנת 2021 בסכום העולה על 200 ₪ (סך התרומות במצטבר)?"
                    register={{
                        ...register('donations2021', { required: true }),
                    }}
                    fieldError={errors.donations2021}
                />
                <Select
                    baseKey="degreeEligibility"
                    displayName="האם קיימת זכאות לתואר ראשון/ שני?"
                    register={{
                        ...register('degreeEligibility', {
                            required: true,
                            validate: (value) => value !== defaultSelectKey,
                        }),
                    }}
                    fieldError={errors.degreeEligibility}
                    selectOptions={{
                        yes: 'כן',
                        no: 'לא',
                    }}
                />
                <FileUpload
                    key="degreeEligibilityFiles"
                    displayName="יש לצרף צילום זכאות לתואר"
                    register={{
                        ...register('degreeEligibilityFiles', { required: true }),
                    }}
                />
                <DateField
                    key="dischargeDateFromMilitary"
                    displayName="אנא ציין את תאריך השחרור שלך משירות בצהל (תום שירות סדיר)"
                    register={{
                        ...register('dischargeDateFromMilitary', { required: true }),
                    }}
                    fieldError={errors.fullName}
                />
                <TextField
                    key="childrenNames"
                    displayName="אנא ציין את שמות ילדיך"
                    register={{
                        ...register('childrenNames', { required: true }),
                    }}
                />
                <TextField
                    key="childrenIds"
                    displayName="אנא ציין את ת.ז. של ילדיך"
                    register={{
                        ...register('childrenIds', { required: true }),
                    }}
                />
                <DateField
                    key="childrenBirthDates"
                    displayName="אנא ציין את תאריכי הלידה של ילדיך"
                    register={{
                        ...register('childrenBirthDates', { required: true }),
                    }}
                />
                <div className="flex w-full flex-col items-center justify-center space-y-12">
                    <SubmitButton />
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
