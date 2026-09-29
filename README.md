# Dinesh Gurjar — Cloud & DevOps Portfolio

Modern React/Vite portfolio designed for GitHub + Docker + AWS EC2 deployment.

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 2. Build

```bash
npm run build
```

## 3. Run with Docker

```bash
docker build -t dinesh-portfolio .
docker run -d --name dinesh-portfolio -p 80:80 dinesh-portfolio
```

Or:

```bash
docker compose up -d --build
```

Open http://localhost

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/dinesh-gurjar94/dinesh-portfolio.git
git push -u origin main
```

Create the GitHub repository first if it does not already exist.

## 5. Deploy on AWS EC2

Recommended: Ubuntu EC2 instance.

Install Docker:

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Reconnect to SSH after the group change.

Clone your repository:

```bash
git clone https://github.com/dinesh-gurjar94/dinesh-portfolio.git
cd dinesh-portfolio
```

Build and run:

```bash
docker compose up -d --build
```

In the EC2 Security Group, allow inbound:
- TCP 22 — SSH — your IP
- TCP 80 — HTTP — 0.0.0.0/0

Then open:

```text
http://YOUR_EC2_PUBLIC_IP
```

## Important before publishing

1. Replace `your-email@example.com` in `src/main.jsx`.
2. Replace the LinkedIn URL in `src/main.jsx` with your real profile.
3. Add your real `public/resume.pdf`.
4. Replace the project GitHub/live-demo links with the actual URLs.
5. Add real project screenshots later if desired.

## Suggested next DevOps upgrade

After the basic deployment works, add:
- Docker Hub image publishing
- GitHub Actions CI/CD
- automatic deployment to EC2
- custom domain
- HTTPS with Let's Encrypt
- Nginx reverse proxy
