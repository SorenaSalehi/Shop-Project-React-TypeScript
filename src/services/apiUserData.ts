import { UseUserItemsProps } from "../types/user";
import supabase from "./supabase";

export async function fetchUserItemsFromDatabase({
  userId,
  from,
}: UseUserItemsProps) {
  if (!userId || !from) return;
  const { data, error } = await supabase.from(from).select("*");

  if (error) throw new Error("something wrong to fetch user items");

  return data;
}
