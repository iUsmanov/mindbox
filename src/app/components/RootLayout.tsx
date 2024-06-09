import { memo } from 'react';
import { ForceUpdateProvider } from '@/shared/render/ForceUpdateProvider/ForceUpdateProvider';

export const RootLayout = memo(() => {
	return (
		<ForceUpdateProvider>
			<div>APP</div>
		</ForceUpdateProvider>
	);
});
