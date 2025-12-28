# Best DJ in Vizag - Website

Professional DJ, Sound & Lighting Services for Weddings, Parties & Corporate Events in Visakhapatnam.

## 🚀 Deployment

This is a static website deployed on GitHub Pages.

**Live Site:** [Your Custom Domain Here]

## 📝 How to Update Content

All website content is managed through the `data.json` file. To make changes:

1. Open `data.json` in a text editor
2. Edit the content (phone numbers, services, social links, etc.)
3. Save the file
4. Commit and push to GitHub:
   ```bash
   git add data.json
   git commit -m "Update content"
   git push
   ```
5. Changes will appear on your live site within 1-2 minutes

## 📂 Project Structure

```
├── index.html          # Main website page
├── data.json          # All dynamic content (EDIT THIS TO UPDATE SITE)
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Images and media
│   └── music/         # Background music files
└── CNAME              # Custom domain configuration
```

## 🎨 Customization Guide

### Update Contact Information
Edit `data.json` → `general_info` section:
- `phone`: Phone number
- `email`: Email address
- `address`: Business address

### Update Services
Edit `data.json` → `services` array. Each service has:
- `title`: Service name
- `description`: Service description
- `category`: Service category
- `image`: Path to image/video

### Update Social Media Links
Edit `data.json` → `social_links` section:
- `instagram`
- `facebook`
- `whatsapp`
- `youtube`

## 🌐 Custom Domain Setup

1. In your domain registrar's DNS settings, add a CNAME record:
   - Name: `www` (or `@` for root domain)
   - Value: `yourusername.github.io`

2. Update the `CNAME` file in this repository with your domain name

3. In GitHub repository settings:
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Enable "Enforce HTTPS"

4. Wait 5-30 minutes for DNS propagation

## 📱 Local Development

Simply open `index.html` in your browser. No server required!

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript
- GSAP for animations
- Responsive design for all devices

## 📞 Support

For technical support or questions, contact: [Your Email]
