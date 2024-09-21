
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjpikfrlpgcozpllmuuh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcGlrZnJscGdjb3pwbGxtdXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NzUzNzIsImV4cCI6MjA0MjQ1MTM3Mn0.3xfMWwtoD4fkIJwtwzq13mcDKSAJXDjabtPHTKtTbWQ'

export const supabaseInstance = createClient(supabaseUrl, supabaseKey)
