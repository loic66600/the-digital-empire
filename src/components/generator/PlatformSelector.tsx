
import React from 'react';

interface PlatformOption {
  value: string;
  label: string;
}

interface PlatformSelectorProps {
  selectedPlatform: string;
  onChange: (platform: string) => void;
  options: PlatformOption[];
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatform,
  onChange,
  options,
}) => {
  return (
    <div className="mb-8">
      <label htmlFor="platform" className="block text-lg font-medium text-gray-700 mb-3">
        Choisissez votre plateforme
      </label>
      <select
        id="platform"
        value={selectedPlatform}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-custom-blue text-lg"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
