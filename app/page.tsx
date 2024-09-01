"use client";

import { usePathname } from 'next/navigation';
import routes from './routes';

export default function Page() {
    const pathname = usePathname();
    console.log(pathname)
    // Get the component from the routes object based on the current path
    const PageComponent = routes[pathname] || routes['/']; // Default to homepage if path not found

    return (
        <div>
            <PageComponent />
        </div>
    );
}
