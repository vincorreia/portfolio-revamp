type GridProps = {
  children: React.ReactNode;
};

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid h-full flex-grow auto-rows-max gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
