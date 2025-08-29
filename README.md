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

## 🚨 Security Notes

- **Never commit sensitive credentials to Git**
- **Use strong passwords for authentication**
- **Keep your Supabase keys secure**
- **Regularly review access logs**
- **Consider implementing 2FA for production use**

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

## 🤝 Support

For issues or questions, please check the console for error messages and ensure your `config.js` is properly set up.

---

**© 2025 Hariprasad Sivakumar. All rights reserved.**
