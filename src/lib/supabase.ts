
import { createClient } from '@supabase/supabase-js';

// For development purposes, provide fallback values
// In production, these should be set as environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-placeholder';

// Create a mock client for development if credentials are not available
const isMissingCredentials = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

if (isMissingCredentials) {
  console.warn('Using mock Supabase client. Please set up your Supabase environment variables for full functionality.');
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add a warning log when operations are attempted without proper credentials
if (isMissingCredentials) {
  const originalFrom = supabase.from.bind(supabase);
  supabase.from = (table) => {
    console.warn(`Attempting to access table '${table}' with mock Supabase client. Connect to a real Supabase instance for proper functionality.`);
    return originalFrom(table);
  };
}
