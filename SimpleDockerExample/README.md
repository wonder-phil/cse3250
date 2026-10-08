
>  docker build -t server1 -f Docker.file .
>
> docker image ls
>
> 
> docker ps
>
> docker run -p 3001:5000 server1
> 
> docker ps
> IMAGE=xyz
>
> docker exec -it xyz /bin/sh
>
> curl -d "text=Hello!&param2=value2" -X POST http://localhost:3001/echo
>
> docker stop xyz
>
> docker image prune -a
>
> docker images
>
> docker rmi -f $(docker images -aq)
>
> 
