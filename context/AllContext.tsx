import { createContext, useState, useContext } from "react";

const AllContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const AllProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <AllContext.Provider value={[showBanner, setShowBanner]}>
      {children}
    </AllContext.Provider>
  );
};

export const useBannerState = () => {
  const context = useContext(AllContext);
  if (context === undefined) {
    throw new Error("useBannerState must be used within a AllProvider");
  }
  return context;
};
