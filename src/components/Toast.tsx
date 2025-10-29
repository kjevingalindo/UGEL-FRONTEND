"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
};

export default function Toast({ message, type = "success", duration = 4000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: type === "success" ? "#4caf50" : "#f44336",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: 5,
        zIndex: 999,
      }}
    >
      {message}
    </div>
  );
}
