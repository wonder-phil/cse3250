package com.pgb.circuit_breaker;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;

@Service
public class ExternalApiService {

    @CircuitBreaker(name = "myServiceCB", fallbackMethod = "fallback")
    public String callApi() {
        // Simulate failure or slow external call
        if (Math.random() > 0.5) {
            throw new RuntimeException("API failed");
        }
        return "Success!";
    }

    // fallback must match signature
    public String fallback(Throwable t) {
        return "Fallback response due to: " + t.getMessage();
    }
}
