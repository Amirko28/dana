import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Form } from './Form';

const queryClient = new QueryClient();

export const Body = () => {
    return (
        <div
            dir="rtl"
            className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-700 font-body"
        >
            <QueryClientProvider client={queryClient}>
                <Form />
            </QueryClientProvider>
        </div>
    );
};
