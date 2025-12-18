# nginxLoadBalancerPythonFlask

This is a simple example nginx load balancer on Docker containers.

The load_driver makes JSON requests with "flips":n where n is an integer.
Then a server makes pseudo-randomly coin flips until there is a run of n heads.
The server returns JSON indicating the total number of coin flips required to get
the run of n heads.

The nginx load balancer sends these load_driver requests to
the backend Docker containers to do the work. Nginx distributes the load in a round-robin fashion.

To get this working:

0. sudo apt install docker-compose
1. sudo apt install python3-setuptools
2. docker-compose up
3. python3 load_driver.py
4. curl -v -X GET "http://localhost:8080/"
5. curl -H "Content-Type: application/json" -d "{\\"heads\\":6 }" -X POST "http://localhost:8080/compute"

# NOTE clear docker containers from the cache
## docker-compose down --rmi all
