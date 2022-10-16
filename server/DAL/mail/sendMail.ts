import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { RequestType } from '../../model/Request';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_ADDRESS,
    port: 587,
    auth: {
        user: process.env.SMTP_FROM,
        pass: process.env.SMTP_PASS,
    },
});

const formatDischargeDate = (date: Date) => format(date, 'dd/MM/yyyy');

export const sendMail = async (request: RequestType) => {
    await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: 'פנייה חדשה מהאתר!',
        html: `
        <div dir="rtl">
            <p>פנייה חדשה!</p>
            <p>שם: ${request.fullName}</p>
            <p>ת.ז: ${request.idNumber}</p>
            <br/>
            <p>האם ביצעת בדיקת החזר מס עבור השנים 2016-2021? ${request.taxCheck}</p>
            <p>האם התחתנת (ברבנות) במהלך השנים 2016-2022? ${request.marriage}</p>
            <p>האם במהלך השנים 2016-2021 עבדת במספר עבודות במקביל, או פחות מ-12 חודשים בשנה? ${
                request.parallelJobs ? 'כן' : 'לא'
            }</p>
            <p>האם במהלך השנים 2016-2022 עבדת גם כעצמאי?  ${
                request.independent ? 'כן' : 'לא'
            }</p>
            <p>האם נוכה לך מס הכנסה בתלושי השכר במהלך השנים? ${
                request.cleanedTax === 'never'
                    ? 'לא'
                    : request.cleanedTax === 'sometimes'
                    ? 'כן, לעיתים'
                    : 'כן, באופן קבוע'
            }</p>
            <p>האם קיבלת פיצויי פיטורין במהלך השנים 2016-2021 (רלוונטי רק אם השכר גבוה מ-12,000₪)? ${
                request.compensation ? 'כן' : 'לא'
            }</p>
            <p>האם שילמת מס על פיצויי פיטורין? ${request.payedTaxCompensation}</p>
            <p>האם קיבלת בשנים 2016-2021 כספים מהמוסד לביטוח לאומי (לא דרך תלוש שכר)? ${
                request.gotMoneyFromBituhLeumi
            }</p>
            <p>האם משכת כספים מקרן השתלמות / קופת גמל (לפני הזמן המותר בחוק)? ${
                request.withdrewMoney
            }</p>
            <p>האם הפקדת כספים באופן עצמאי (לא דרך מקום העבודה) לקופת גמל / קרן פנסיה? ${
                request.depositedMoney ? 'כן' : 'לא'
            }</p>
            <p>האם הייתה לך פעילות בבורסה שהניבה רווחים/הפסדים במהלך השנים 2016-2021? ${
                request.stockExchangeActivity
            }</p>
            <p>האם בוצעו תשלומים למשכנתא במהלך השנים? ${request.mashkanta}</p>
            <p>האם קיים קרוב משפחה נטול יכולת (פיגור שכלי / עיוור / אוטיזם / לקוי למידה / חירש)? ${
                request.disabledFamily
            }</p>
            <p>האם אתה משלם כספים עבור אשפוז הורה/בן זוג במוסד שיקומי? ${
                request.familyHospitalization ? 'כן' : 'לא'
            }</p>
            <p>האם ביצעת תרומות במהלך השנים 2016-2021 בסכום העולה על 200₪? ${
                request.donations ? 'כן' : 'לא'
            }</p>
            <p>האם קיימת זכאות לתואר ראשון / שני? ${
                request.degreeEligibility ? 'כן' : 'לא'
            }</p>
            <p>אנא ציין את תאריך השחרור שלך משירות בצהל (תום שירות סדיר) ${formatDischargeDate(
                request.dischargeDateFromMilitary
            )}</p>
            <p>אנא ציין את שמות, ת.ז ותאריכי הלידה של ילדיך ${request.childrenInfo}</p>
        </div>
        `,
    });
};
