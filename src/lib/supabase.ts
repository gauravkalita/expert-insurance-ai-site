
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://caqudrpcjanvziavudmj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcXVkcnBjamFudnppYXZ1ZG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDI0NzMsImV4cCI6MjA2MTc3ODQ3M30.B9ov_QcnM6NE3ZnoG24oL-_ru8MPcgfLu56zGAaMnBQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
