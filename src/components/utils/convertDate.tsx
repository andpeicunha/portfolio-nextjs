import { useState, useEffect } from 'react';

function useConvertedDate(dateString: string) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const convertedDate = new Date(dateString);
    setDate(convertedDate);
  }, [dateString]);

  return date;
}

export default useConvertedDate;
