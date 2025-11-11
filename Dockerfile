# === STAGE 1: BUILD (Vytvoření statických souborů pomocí Node.js) ===
# Použijeme Node.js 20 ve verzi Alpine pro menší velikost
FROM node:20-alpine AS builder

WORKDIR /app

# Kopírování a instalace závislostí
COPY package.json package-lock.json ./
# Použijte npm ci pro rychlejší a spolehlivější instalaci v CI/CD
RUN npm ci

# Kopírování kódu a spuštění Vite buidlu
COPY . .
# Příkaz, který vytvoří finální soubory ve složce /app/dist
RUN npm run build 

# === STAGE 2: PRODUCTION (Doručení statických souborů pomocí Nginx) ===
# Použijeme lehký, stabilní Nginx image
FROM nginx:stable-alpine

# Zkopírování našeho konfiguračního souboru Nginx (včetně hlaviček)
# Cesta musí odpovídat, proto je potřeba složka nginx/
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Zkopírování finálního buildu z buildovací fáze do Nginx složky
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html
# Spuštění Nginx na portu 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]