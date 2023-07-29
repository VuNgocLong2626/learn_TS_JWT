import { createClient } from "@supabase/supabase-js";
import { Database as typeSapabase } from "./db_types";


const test = createClient<typeSapabase>(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export default test;
