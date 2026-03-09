import { supabase } from "@/lib/supabase";

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { ok: !error, error: error?.message };
}

export async function signUpWithEmail(
  email: string,
  password: string,
  role: "teacher" | "student" = "student"
) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { ok: false, error: error.message };
  }

  const user = data.user;

  if (!user) {
    return { ok: false, error: "User was created but not returned." };
  }

  const { error: insertError } = await supabase.from("users").insert({
    id: user.id,
    email: user.email,
    role,
  });

  if (insertError) {
    return { ok: false, error: insertError.message };
  }

  return { ok: true, error: undefined };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { ok: !error, error: error?.message };
}