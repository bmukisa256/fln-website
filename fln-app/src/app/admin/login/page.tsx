'use client';

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Lock, User, AlertCircle, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const error = searchParams.get("error");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(error ? "Invalid credentials" : "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError("");

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        setLoginError("Invalid username or password");
        setIsLoading(false);
      } else if (result?.ok) {
        router.push(callbackUrl);
      }
    } catch {
      setLoginError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
      {/* Logo & Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <Image
            src="/imgs/FLN logo-full color.png"
            alt="FLN"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl font-heading font-bold text-navy">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Sign in to manage subscribers and campaigns
        </p>
      </div>

      {/* Error Message */}
      {loginError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-red-700 text-sm">{loginError}</p>
        </motion.div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-navy mb-2">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-navy mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-navy text-white font-bold h-12 rounded-xl hover:bg-purple transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      {/* Back to site link */}
      <div className="mt-6 text-center">
        <a
          href="/"
          className="text-sm text-slate-500 hover:text-purple transition-colors"
        >
          ← Back to website
        </a>
      </div>
    </div>
  );
}

function LoginFormFallback() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full animate-pulse" />
        <div className="h-6 w-48 mx-auto bg-slate-100 rounded animate-pulse mb-2" />
        <div className="h-4 w-64 mx-auto bg-slate-100 rounded animate-pulse" />
      </div>
      <div className="space-y-5">
        <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy to-purple flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <Suspense fallback={<LoginFormFallback />}>
          <LoginForm />
        </Suspense>
      </motion.div>
    </div>
  );
}
