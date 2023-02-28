type GridProps = {
  children: React.ReactNode;
};

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid h-full flex-grow auto-rows-max grid-cols-3 gap-2 py-4 px-2 overflow-x-hidden overflow-y-auto md:grid-cols-4 sm:gap-4 lg:grid-cols-6">
      {children}
    </div>
  );
};
