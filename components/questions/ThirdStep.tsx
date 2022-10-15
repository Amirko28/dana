import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { Checkbox, Radio } from '../common/form';
import { RegisterPayload } from '../Form';

interface Props {
    register: UseFormRegister<RegisterPayload>;
    errors: FieldErrorsImpl<RegisterPayload>;
}

export const ThirdStep = ({ register, errors }: Props) => {
    return (
        <>
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
        </>
    );
};
