# Basic Resilience4J circuit breaker 
## Starter example from Resilience4J


This is a Spring-boot implementation

Go to the directory containing the **pom.xml** file  <br />
Start the system <br />
``` ./mvnw spring-boot:run ```

Sanity check <br />
```curl http://localhost:8080/test ```

See the states <br />
```http://localhost:8080/actuator/metrics/resilience4j.circuitbreaker.state```

Or the call counts <br />
```http://localhost:8080/actuator/metrics/resilience4j.circuitbreaker.calls```


Bash tests that runs the actuator to get the states highlighted in DEBUG mode<br />

```
for i in {1..50}; do
  echo "Request $i"
  curl -s http://localhost:8080/test > /dev/null

  CLOSED=$(curl -s "http://localhost:8080/actuator/metrics/resilience4j.circuitbreaker.state?tag=name:myServiceCB&tag=state:closed" | jq '.measurements[0].value')
  OPEN=$(curl -s "http://localhost:8080/actuator/metrics/resilience4j.circuitbreaker.state?tag=name:myServiceCB&tag=state:open" | jq '.measurements[0].value')
  HALF=$(curl -s "http://localhost:8080/actuator/metrics/resilience4j.circuitbreaker.state?tag=name:myServiceCB&tag=state:half_open" | jq '.measurements[0].value')

  echo "State: CLOSED=$CLOSED OPEN=$OPEN HALF_OPEN=$HALF"
  echo
  sleep 0.05
done
```

Basic calls <br />

```
for i in {1..50}; do
  echo "Request $i"
  curl -s http://localhost:8080/test
  echo
  sleep 0.1
done
```

You can also make requests using a Poisson distribution using the poission_caller.py program from ChatGPT as

```
python3 poisson_curl.py http://localhost:8080/test --rate 2 --count 50
```

Can you compare with other distributions?  You may use ChatGPT or other AI.
Even if you stick with one distribution, how can you adjust the system to serve the most clients
to minimize the OPEN or HALF_OPEN states?
