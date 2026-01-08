# 🚀 SC BUCHAREST - PRODUCTION DEPLOYMENT GUIDE

## 📦 QUICK START

```bash
# 1. Clone or upload files to server
git clone <repository> /var/www/scbucharest

# 2. Install dependencies (if using Docker)
docker-compose up -d

# 3. Or use simple HTTP server
npx http-server -p 8000 -c-1
```

---

## ⚙️ CONFIGURATION REQUIRED

### **1. Contact Information**
Update in all HTML files:

```html
Phone: +40 (0) XXX XXX XXX  →  +40 721 XXX XXX (real)
Email: info@scbucharest.ro  →  (verify mailbox exists)
```

### **2. Google Analytics**
Replace in `index.html` line ~142:

```javascript
gtag('config', 'G-XXXXXXXXXX')  →  'G-YOUR-REAL-GA-ID'
```

### **3. Social Media Links**
Update in floating buttons:

```javascript
WhatsApp: https://wa.me/40XXXXXXXXX
Telegram: https://t.me/scbucharest  (verify handle exists)
```

### **4. Google Maps**
Replace iframe in contact section with real location

---

## 🌐 DNS CONFIGURATION

### **Domain:** scbucharest.ro

```
A Record:
scbucharest.ro  →  YOUR_SERVER_IP

CNAME:
www  →  scbucharest.ro
```

### **SSL Certificate (Let's Encrypt)**

```bash
sudo certbot --nginx -d scbucharest.ro -d www.scbucharest.ro
```

---

## 📊 MONITORING SETUP

### **Google Services**
1. **Google Analytics** - Track visitors, conversions
2. **Google Search Console** - Monitor search performance
3. **Google My Business** - Local SEO

### **Uptime Monitoring**
- UptimeRobot (free tier: 50 monitors)
- Pingdom
- StatusCake

### **Performance**
- PageSpeed Insights
- GTmetrix
- WebPageTest

---

## 🔒 SECURITY CHECKLIST

```
✅ HTTPS enabled (SSL certificate)
✅ GDPR privacy policy
✅ Terms & conditions
✅ Secure forms (validation)
✅ No exposed credentials
✅ Safe external links (target="_blank" + rel="noopener")
```

---

## 📱 TESTING CHECKLIST

After deployment, test:

```
[ ] Homepage loads correctly
[ ] All internal links work
[ ] Calculator functionality
[ ] Contact form submission
[ ] Booking form submission  
[ ] Language switcher (UK ↔ RO)
[ ] Mobile responsive (test on real device)
[ ] WhatsApp/Telegram links
[ ] Dark mode toggle (if enabled)
[ ] Google Maps integration
[ ] Analytics tracking (check Real-Time)
```

---

## 🎯 POST-LAUNCH TASKS

### **Week 1**
- Monitor Analytics daily
- Check for broken links
- Verify form submissions working
- Test on multiple devices
- Gather initial user feedback

### **Month 1**
- Review Search Console data
- Optimize based on user behavior
- Add more testimonials
- Update service prices if needed
- Create blog/news section (optional)

### **Ongoing**
- Weekly Analytics review
- Monthly content updates
- Quarterly SEO audit
- Regular backups
- Security updates

---

## 📈 SUCCESS METRICS

Track these KPIs:

```
Visitors/month:      Target: 500+
Booking rate:        Target: 30%
Avg. session:        Target: 2+ minutes
Bounce rate:         Target: <50%
Page load time:      Target: <2s
Mobile traffic:      Expected: 60%+
```

---

## 🛠️ TROUBLESHOOTING

### **Site not loading?**
- Check DNS propagation (48h max)
- Verify server is running
- Check firewall rules (port 80, 443)

### **Forms not working?**
- Configure form backend (Formspree/EmailJS)
- Check email server settings
- Verify SMTP credentials

### **Analytics not tracking?**
- Replace placeholder GA ID
- Check ad blockers
- Verify gtag.js loading

---

## 📞 SUPPORT

**Technical Issues:** Refer to documentation in project folder  
**Content Updates:** Edit HTML files directly  
**Design Changes:** Modify readability-fix-2026.css

---

## 🎊 PROJECT FILES

```
📄 Core Pages:     7 HTML files
🎨 Styles:         1 CSS file (readability-first)
🌐 Translation:    translations.js (UK/RO)
🔍 SEO:            sitemap.xml, robots.txt
📋 Documentation:  4 comprehensive guides
🐳 Deployment:     Docker ready
```

**Total:** 30+ optimized files

---

**Version:** 1.0.0  
**Last Updated:** January 8, 2026  
**Status:** ✅ PRODUCTION READY







