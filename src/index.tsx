import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import { RootLayout } from '@/app/components/RootLayout';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootLayout />);
