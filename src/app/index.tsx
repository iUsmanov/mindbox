import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { RootLayout } from './components/RootLayout';
import './lib/helpers/prototypes';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootLayout />);
