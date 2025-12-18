#!/usr/bin/env python3
import numpy as np
import subprocess
import time
import argparse

def poisson_curl(url, rate, total_requests=None, duration=None, verbose=True):
    """
    Send curl requests according to a Poisson process.

    rate (λ): expected number of requests per second.
    total_requests: stop after this many requests (optional).
    duration: stop after this many seconds (optional).
    """

    if not total_requests and not duration:
        raise ValueError("You must specify either total_requests or duration.")

    start_time = time.time()
    count = 0

    while True:

        # If running for fixed duration, check time
        if duration and (time.time() - start_time) > duration:
            if verbose:
                print("Finished fixed-duration run.")
            break

        # If running for fixed count, check count
        if total_requests and count >= total_requests:
            if verbose:
                print(f"Sent {count} requests.")
            break

        # Sample next inter-arrival time (Exponential with rate λ)
        wait = np.random.exponential(scale=1.0 / rate)
        time.sleep(wait)

        # Perform the curl
        try:
            result = subprocess.run(
                ["curl", "-s", url],
                capture_output=True,
                text=True
            )
            if verbose:
                print(f"[{count}] waited {wait:.4f}s → response len={len(result.stdout)}", result.stdout)
        except Exception as e:
            print(f"Error: {e}")

        count += 1


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Poisson-process curl generator")
    parser.add_argument("url", type=str, help="URL to curl")
    parser.add_argument("--rate", type=float, default=1.0,
                        help="Poisson rate λ (requests per second)")
    parser.add_argument("--count", type=int, default=None,
                        help="Total number of requests (optional)")
    parser.add_argument("--duration", type=float, default=None,
                        help="Duration in seconds (optional)")
    parser.add_argument("--quiet", action="store_true",
                        help="Suppress verbose output")

    args = parser.parse_args()

    poisson_curl(
        url=args.url,
        rate=args.rate,
        total_requests=args.count,
        duration=args.duration,
        verbose=not args.quiet
    )
