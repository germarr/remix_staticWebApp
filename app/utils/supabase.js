import { createClient } from "@supabase/supabase-js";

const isServer = typeof window === "undefined";

let SUPABASE_URL = "https://tfatbvqvpnnftzcaoewb.supabase.co";
let SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmYXRidnF2cG5uZnR6Y2FvZXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0MTM2MTcsImV4cCI6MTk3Mzk4OTYxN30.DDdCpzNrmsf7DYH0iCL8-YAvno2hsn_HKuFMk-g-OgM";

const supabaseUrl = isServer ? SUPABASE_URL : SUPABASE_URL;

const supabaseKey = isServer ? SUPABASE_KEY : SUPABASE_KEY;

export default createClient(supabaseUrl, supabaseKey);
