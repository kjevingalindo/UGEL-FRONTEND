"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await register(name, email, password, passwordConfirm);
      setMessage("✅ Registro exitoso. Redirigiendo...");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err: any) {
      const error =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        "❌ Error al registrar. Revisa los campos.";
      setMessage(
        typeof error === "string"
          ? error
          : Object.values(error).flat().join(" ")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Crear Cuenta</h1>

        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white font-semibold transition ${
            loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Registrando..." : "Registrar"}
        </button>

        {message && (
          <p className="text-center mt-2 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
