import { supabase } from "@/lib/supabase";

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { ok: !error, error: error?.message };
}

export async function signUpWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signUp({ email, password });
  return { ok: !error, error: error?.message };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { ok: !error, error: error?.message };
}
