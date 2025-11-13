import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface NotificationContextValue {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: NotificationData | null;
  id: number;
  showNotification: (newData: NotificationData) => void;
}

interface NotificationData {
  status: "ok" | "error";
  message: string;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(
  undefined
);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [data, setData] = useState<NotificationData | null>(null);
  const [id, setId] = useState(0);
  const location = useLocation();

  function showNotification(newData: NotificationData) {
    setId((prev) => prev + 1);
    setData(newData);
    setIsVisible(true);
  }
  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  useEffect(() => {
    if (!isVisible || !data) return;
    const timeout = setTimeout(() => setIsVisible(false), 3000);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <NotificationContext.Provider
      value={{
        isVisible,
        setIsVisible,
        data,
        id,
        showNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useNotification(): NotificationContextValue {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
}
