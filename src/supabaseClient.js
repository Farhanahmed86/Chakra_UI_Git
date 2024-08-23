
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qhlofudvdpmiszwaquuw.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobG9mdWR2ZHBtaXN6d2FxdXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MTg2ODcsImV4cCI6MjAzOTk5NDY4N30.7n8hVqne_neGeRohIy1rj2OrTQrh_ypnbDzPbNUQ4Gs'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;