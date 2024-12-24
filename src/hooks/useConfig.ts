import { useEffect, useState } from 'react';
import type { Config } from '../types/config';

export const useConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (!response.ok) throw new Error('Failed to load configuration');
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  return { config, loading, error };
};