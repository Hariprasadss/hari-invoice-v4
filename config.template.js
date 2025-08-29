// Configuration Template
// Copy this file to config.js and fill in your actual values
// DO NOT commit config.js to Git

window.appConfig = {
    // Authentication
    auth: {
        username: 'YOUR_USERNAME_HERE',
        password: 'YOUR_PASSWORD_HERE'
    },
    
    // Supabase Configuration
    supabase: {
        url: 'YOUR_SUPABASE_URL_HERE',
        anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
    },
    
    // App Settings
    app: {
        name: 'Invoice Manager',
        version: '1.0.0',
        environment: 'production' // or 'development'
    }
};
