# SimpleDockerWebsite <br/>
# <br/>



Ubuntu> git clone https://github.com/wonder-phil/SimpleDockerWebsite <br/> <br/>

Test before you launch the docker instance: <br/> <br/>

Host> cd SimpleDockerWebsite <br/>
Host> npm install <br/>
Host> node index.js   <br/>  <br/>
Host> node index.js   <br/>  <br/>
Verify it works on Ubuntu instance  <br/>
---

Host> docker build -t server1 -f Docker.file .  <br/>
Host> docker image ls  <br/>
Host> docker ps  <br/>
Host> <br/>
Host> docker run -p 5000:3000 server1  <br/>




