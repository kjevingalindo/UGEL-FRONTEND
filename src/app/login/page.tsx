"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await login(email, password);
      setMessage("✅ Inicio de sesión exitoso. Redirigiendo...");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message ||
        "❌ Error: Verifica tus credenciales.";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Iniciar Sesión</h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white font-semibold transition ${
            loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Iniciando..." : "Iniciar Sesión"}
        </button>

        {message && (
          <p className="text-center mt-2 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
