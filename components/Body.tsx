import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Form } from './Form';

const queryClient = new QueryClient();

export const Body = () => {
    return (
        <div
            dir="rtl"
            className="flex h-full w-full flex-col items-center justify-center bg-zinc-800 px-8 font-body"
        >
            <QueryClientProvider client={queryClient}>
                <Form />
            </QueryClientProvider>
        </div>
    );
};
