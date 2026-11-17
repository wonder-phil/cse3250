package com.pgb.circuit_breaker;

import java.time.Instant;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class ExternalApiService {

    private static final String CB_NAME = "externalService";
    private final Random random = new Random();

    // Core unstable operation - this simulates your flaky external API/backend.
    private String unstableCall() {
        double p = random.nextDouble(); // 0.0 - 1.0

        // 30% chance of failure
        if (p < 0.30) {
            throw new RuntimeException("Simulated backend failure (p=" + p + ")");
        }

        // 40% chance of being slow (1–2 seconds)
        if (p < 0.70) {
            try {
                long delayMs = 1000 + random.nextInt(1000);
                TimeUnit.MILLISECONDS.sleep(delayMs);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        // Otherwise it succeeds quickly
        return "Successful response at " + Instant.now() + " (p=" + p + ")";
    }

    // Exposed version WITHOUT circuit breaker
    public String callWithoutCircuitBreaker() {
        return "RAW: " + unstableCall();
    }

    // Exposed version WITH circuit breaker
    @CircuitBreaker(name = CB_NAME, fallbackMethod = "fallback")
    public String callWithCircuitBreaker() {
        return "CB: " + unstableCall();
    }

    // Fallback called when circuit is OPEN or call fails
    public String fallback(Throwable t) {
        return "FALLBACK: backend unavailable (" +
                t.getClass().getSimpleName() + " - " + t.getMessage() + ")";
    }
}
