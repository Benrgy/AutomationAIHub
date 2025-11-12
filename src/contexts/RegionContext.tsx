import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';

export type Region = 'US' | 'UK' | 'CA';

interface RegionContextType {
  region: Region;
  detectedRegion: Region | null;
  setRegion: (region: Region | null) => void;
  isManualOverride: boolean;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const { location } = useGeolocation();
  const [manualRegion, setManualRegion] = useState<Region | null>(() => {
    const stored = localStorage.getItem('preferred-region');
    return stored as Region | null;
  });

  const detectedRegion = location?.region || 'US';
  const region = manualRegion || detectedRegion;

  const handleSetRegion = (newRegion: Region | null) => {
    setManualRegion(newRegion);
    if (newRegion) {
      localStorage.setItem('preferred-region', newRegion);
    } else {
      localStorage.removeItem('preferred-region');
    }
  };

  return (
    <RegionContext.Provider
      value={{
        region,
        detectedRegion,
        setRegion: handleSetRegion,
        isManualOverride: !!manualRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};
