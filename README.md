# Invoice Manager - Hariprasad Sivakumar

A comprehensive invoice and expense management application for small businesses.

## 🔒 Security Setup (IMPORTANT)

**Before running the application, you must set up your configuration:**

### 1. Create Configuration File

```bash
# Copy the template to create your config
cp config.template.js config.js
```

### 2. Edit config.js with your actual credentials

Open `config.js` and replace the placeholder values:

```javascript
window.appConfig = {
    // Authentication
    auth: {
        username: 'your_actual_username',
        password: 'your_actual_password'
    },
    
    // Supabase Configuration  
    supabase: {
        url: 'https://your-project.supabase.co',
        anonKey: 'your_supabase_anon_key'
    },
    
    // App Settings
    app: {
        name: 'Invoice Manager',
        version: '1.0.0',
        environment: 'production'
    }
};
```

### 3. Never commit config.js

The `.gitignore` file is configured to exclude `config.js` from Git commits. **Never commit your actual credentials!**

## 🚀 Features

- **Invoice Management**: Create, edit, and track invoices
- **Client Management**: Maintain client database with contact information
- **Expense Tracking**: Comprehensive expense management with categories
- **Analytics**: Financial reports and insights
- **Modern UI**: Beautiful, responsive design
- **Data Export**: PDF and CSV export capabilities

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Database**: Supabase (PostgreSQL)
- **Charts**: Chart.js
- **PDF Generation**: jsPDF
- **Authentication**: Custom session-based auth

## 📱 Getting Started

1. **Set up configuration** (see Security Setup above)
2. **Open in browser**: Open `login.html` in your web browser
3. **Login**: Use the credentials you set in `config.js`
4. **Start managing**: Begin creating invoices and tracking expenses

## 🏗️ Project Structure

```
hari-invoice-v4/
├── index.html          # Main application
├── login.html          # Authentication page
├── app.js              # Core application logic
├── style.css           # Styling and themes
├── config.template.js  # Configuration template
├── config.js           # Your actual config (not in Git)
└── .gitignore          # Git ignore rules
```

## 🔧 Development

### Local Development
1. Set up your `config.js` file
2. Use a local server (e.g., Live Server extension in VS Code)
3. Navigate to `login.html`

### Adding Features
- Main application logic is in `app.js`
- UI components are in `index.html`
- Styling is in `style.css`

## 📊 Database Schema

The application uses Supabase with the following main tables:
- `clients` - Client information
- `invoices` - Invoice data with line items
- `expenses` - Expense tracking
- `expense_categories` - Expense categories
- `settings` - Application settings

## � Netlify Deployment

To deploy this application to Netlify:

### 1. Set Environment Variables in Netlify

Go to your Netlify site settings > Environment Variables and add:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
APP_USERNAME=your_app_username
APP_PASSWORD=your_app_password
```

### 2. Deploy Configuration

The `netlify.toml` file is already configured with:
- Build command: `node build.js`
- Automatic environment variable injection
- Redirect from root to login page

### 3. Build Process

The build script (`build.js`) automatically:
- Reads environment variables from Netlify
- Injects them as meta tags into HTML files
- Keeps sensitive data secure (not in source code)

### 4. Manual Deployment Steps

1. Push your changes to GitHub
2. Connect your GitHub repo to Netlify
3. Set the environment variables in Netlify dashboard
4. Deploy!

## �🚨 Security Notes

- **Never commit sensitive credentials to Git**
- **Use strong passwords for authentication**
- **Keep your Supabase keys secure**
- **Regularly review access logs**
- **Consider implementing 2FA for production use**
- **Environment variables are secure in Netlify**

## 📈 Analytics Features

- Income vs Expenses tracking
- Monthly/Quarterly/Yearly reports
- Client revenue distribution
- Expense category breakdown
- Growth trend analysis

## 💡 Tips

- **Regular Backups**: Export your data regularly
- **Browser Compatibility**: Use modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile**: Application is responsive and works on mobile devices
- **Performance**: Clear browser cache if you experience issues
- **Local Development**: Use `config.js` for local development
- **Production**: Use Netlify environment variables for production

## 🤝 Support

For issues or questions, please check the console for error messages and ensure your `config.js` is properly set up for local development or environment variables are set for production.

---

**© 2025 Hariprasad Sivakumar. All rights reserved.**
