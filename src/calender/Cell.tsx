import clsx from 'clsx';
import React, { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
};

const Cell: FC<Props> = ({
  isActive = false,
  onClick,
  className,
  children,
}) => {
  const combinedClassName = clsx(
    'h-10 flex items-center justify-center border-b border-r',
{'text-white bg-red-500 hover:bg-red-600 active:bg-red-700':isActive},
    { 'cursor-pointer hover:bg-gray-200 active:bg-gray-300':!isActive && onClick },
    className
  );

  return (
    <div onClick= { isActive ? undefined : onClick} className={combinedClassName}>
      {children}
    </div>
  );
};

export default Cell;
