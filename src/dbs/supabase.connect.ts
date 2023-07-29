import { createClient } from "@supabase/supabase-js";
import { Database as typeSapabase } from "./db_types";

class Supabase {
  private static instance: any;

  constructor() {
    Supabase.instance = createClient<typeSapabase>(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_KEY as string
    );
  }

  static getInstance() {
    if (!Supabase.instance)
      Supabase.instance = createClient<typeSapabase>(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_KEY as string
      );
    return Supabase.instance;
  }

  public getSupabaseClient() {
    return Supabase;
  }
}

// const test = createClient<typeSapabase>(
//   process.env.SUPABASE_URL as string,
//   process.env.SUPABASE_KEY as string
// );

export default Supabase;
