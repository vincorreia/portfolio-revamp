type GridProps = {
  children: React.ReactNode;
};

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid h-full flex-grow auto-rows-max gap-6 overflow-y-auto overflow-x-hidden py-4 px-2 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
