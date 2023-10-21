import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovcufispnwbqekfltvsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Y3VmaXNwbndicWVrZmx0dnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MDcxOTIsImV4cCI6MjAxMzI4MzE5Mn0._2eDVIlBXQSOkH80EZLDF1SrH0yX7IznzYki-QFYg1k";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
