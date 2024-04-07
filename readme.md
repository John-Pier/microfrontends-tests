# Repo with micro-frontends framework tests




### Helper commands

Monorepo: `npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo`    
Add app: `npm run nx g @nx/angular:app baseApp2`        
Add lib : `npm run nx g @nx/angular:library --name=common --buildable=true --changeDetection=OnPush --compilationMode=partial --displayBlock=true --style=less`

npx nx g @nx/angular:host host --remotes=base-app1,base-app2

