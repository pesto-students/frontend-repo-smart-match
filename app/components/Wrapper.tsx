// import React, { ReactNode } from 'react';

// interface WrapperProps {
//   children: ReactNode;
//   className?: string;
// }

// const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
//   return (
//     <div className={`w-full ${className}`}>
//       <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Wrapper;

import React from 'react';

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

export default Wrapper;
