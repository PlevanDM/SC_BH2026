# NEXX GSM Development

This is a premium service center website with:
- Docker support (nginx:alpine)
- Multiple pages (index, about, faq, privacy, terms, 404)
- SEO optimization
- Mobile responsive design

## Quick Start

### Option 1: Docker (Recommended)
```bash
# Windows - Double click:
START-HERE.bat

# Or PowerShell:
.\start-fixed.ps1
```

### Option 2: Local Server
```bash
npm start
# Opens on http://localhost:8000
```

## Project Structure
- `/` - HTML pages
- `/estimates/` - Business data/calculations
- Docker files: Dockerfile, docker-compose.yml, nginx.conf
- Start scripts: START-HERE.bat, start-fixed.ps1

## Development
- Main site: index.html
- All pages have SEO meta tags
- Responsive design with animations
- Ukrainian language

## Docker Info
- Container: sc-bucharest-website
- Port: 8080:80
- Server: nginx:alpine
- Auto-restart enabled

