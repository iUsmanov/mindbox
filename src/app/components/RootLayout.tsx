import { memo } from 'react';
import { TodosManager } from '@/widgets/todosManager';

export const RootLayout = memo(() => {
	return <TodosManager />;
});
