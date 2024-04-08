# Repo with micro-frontends framework tests




### Helper commands

Monorepo: `npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo`    
Add app: `npm run nx g @nx/angular:app baseApp2`        
Add lib : `npm run nx g @nx/angular:library --name=common --buildable=true --changeDetection=OnPush --compilationMode=partial --displayBlock=true --style=less`
Init MF: `npx nx g @nx/angular:host host --remotes=base-app1,base-app2`
Init Ang-Arch MF:  
1) npm g @angular-architects/module-federation:init --project host --port 4200 --type host
2) npm g @angular-architects/module-federation:init --project base-app1 --port 4201 --type remote
3) npm g @angular-architects/module-federation:init --project base-app2 --port 4202 --type remote

