# KiddieSpeech Deployment Notes

## GitHub
- Repository: `https://github.com/Omtatsat101/kiddiespeech`

## Cloudflare Pages
- Project: `kiddiespeech`
- Live deployment: `https://d2d65124.kiddiespeech.pages.dev`
- Default subdomain: `https://kiddiespeech.pages.dev`

## Domain Status
- `kiddiespeech.com` currently resolves to GoDaddy parking
- active nameservers at verification time:
  - `ns67.domaincontrol.com`
  - `ns68.domaincontrol.com`

## What is already done
- web app builds successfully as a static export
- Cloudflare Pages project is created
- deployment is live on Cloudflare Pages

## What still needs higher-permission domain work
- either:
  - switch `kiddiespeech.com` nameservers from GoDaddy to Cloudflare and finish custom domain setup in Cloudflare
- or:
  - keep GoDaddy DNS authoritative and point apex/www to the chosen production target

## Important note
- current Cloudflare token can create Pages projects and deploy, but it does not have permission to create the `kiddiespeech.com` zone
