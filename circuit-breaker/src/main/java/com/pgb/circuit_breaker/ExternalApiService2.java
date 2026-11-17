package com.pgb.circuit_breaker;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;

@Service
public class ExternalApiService2 {
    private int numberOfConnections = 0;

    @CircuitBreaker(name = "myServiceCB", fallbackMethod = "fallback")
    public String callApiCB() {
        return callApi();
    }

    public String callApi() {
        numberOfConnections++;
        
        // Simulate quickly growing computational load
        computeWork(numberOfConnections); 
        numberOfConnections = Math.max(numberOfConnections - 1, 0);
    
        return "Success!";
    }

    // fallback must match signature
    public String fallback(Throwable t) {
        // simulate recovery time
        numberOfConnections = Math.max(numberOfConnections - 1, 0);
        // fallback after recovery
        return "Fallback response due to: " + t.getMessage();
    }

    public void computeWork(int iterations) {
        for (int i = 0; i < iterations * 50000000L; i++) {
            double x = Math.sqrt(i * 123.456); // just some CPU work
        }
    }
}
