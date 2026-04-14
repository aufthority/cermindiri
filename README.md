# BodyCheck — Health Risk App

A standalone web app that calculates BMI, abdominal obesity, and waist-to-height ratio using WHO Asia-Pacific cutoffs, with AI-powered interpretation via Claude.

## Project Structure

```
/
├── index.html        ← Frontend app
├── api/
│   └── interpret.js  ← Vercel serverless function (Claude API proxy)
├── vercel.json       ← Vercel deployment config
└── README.md
```

## Deployment to Vercel (Step by Step)

### 1. Push to GitHub
- Create a new GitHub repo (e.g. `bodycheck-app`)
- Upload all three files: `index.html`, `api/interpret.js`, `vercel.json`

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com) and log in
- Click **"Add New Project"**
- Import your GitHub repo
- Vercel will auto-detect the config

### 3. Add your API Key
- In Vercel project settings, go to **Environment Variables**
- Add: `ANTHROPIC_API_KEY` = your Claude API key
- Make sure it's set for **Production** environment

### 4. Deploy
- Click Deploy — your app will be live at `yourproject.vercel.app`
- Every push to GitHub auto-redeploys

## Data Sources
- **WHO Asia-Pacific BMI cutoffs** — overweight ≥23, obese ≥27.5
- **WHO waist circumference thresholds** — Asian men ≥90cm, women ≥80cm
- **Our World in Data** — Malaysia obesity/overweight prevalence (2022)
- **NHMS 2019** — Malaysia National Health and Morbidity Survey context stats
- **WHtR universal threshold** — 0.5 (Browning et al., multiple meta-analyses)
