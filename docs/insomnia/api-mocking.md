---
layout: article-detail
title:  Insomnia API Mocking Overview
category: "Requests and Responses"
category-url: requests-and-responses
---

API mocks are useful for simulating an API endpoint. For example, when building a front end while the backend API is under construction and unstable, Insomnia allows us to customize responses from a set of API paths to simulate a static API. This mocked URL can then replace our front-end API backend URL.

## Response Extractor

From the request collection screen, on the response pane to the right, we can use the Mock Response tab to extract the most recent response and API path from the currently selected request to build an API mock.

This feature is a time-saver when we already have our response structures within Insomnia that we would like to make available from our API mock.

## Insomnia Cloud Mocks

Any logged-in user can create API mocks, accessible at [mock.insomnia.rest](https://mock.insomnia.rest). These mocks can be collaborated on with a team and accessed by anyone.

As a consumer of this mock server we can modify our environment (e.g. `BACKEND_API_URL`) to point at the Insomnia Cloud Mock server.

```bash
// Example .env file for your front-end application
BACKEND_API_URL=https://foobar.mock.insomnia.rest/
THIRD_PARTY_API_KEY=foo
```

## Self-hosted Mocks

Enterprise plans have access to self-hosted mocks, providing increased control over usage.

Configuration details can be found at [GitHub - Kong Insomnia Mockbin](https://github.com/kong/insomnia-mockbin) and a Docker image is available at [ghcr.io/kong/insomnia-mockbin:master](https://ghcr.io/kong/insomnia-mockbin:master).

Instructions for running locally with Docker or NodeJS can be found on [GitHub](https://github.com/kong/insomnia-mockbin):

```bash
// Example .env file for your front-end application
BACKEND_API_URL=https://localhost:8080/bin/foobar
THIRD_PARTY_API_KEY=foo
```

## Self-hosted Mocks (Example with Kubernetes)

### Prerequisites

1. **Kubernetes Cluster**: Ensure you have a Kubernetes cluster running.
2. **kubectl**: You need the `kubectl` command-line tool configured to interact with your cluster.
3. **Helm**: This is optional but useful if you're using Helm charts for deployments.

### Steps

1. **Create and modify the Deployment File**: Create/Open `deployment.yaml` and make sure to replace any placeholder values with actual data. You might need to set values for the number of replicas, resource limits, and Mockbin-specific environment variables.

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: insomnia-mock
     namespace: mock
   spec:
     replicas: 1  # Set the number of replicas
     selector:
       matchLabels:
         app: insomnia-mock
     template:
       metadata:
         labels:
           app: insomnia-mock
       spec:
         containers:
         - name: insomnia-mock
           image: ghcr.io/kong/insomnia-mockbin:master
           ports:
           - containerPort: 9080
           env:
             - name: MOCKBIN_PORT
               value: "9080"
             # Set other environment variables as required
   ```

2. **Deploy Mockbin**: Run the following command to create the deployment in Kubernetes:

   ```bash
   kubectl apply -f deployment.yaml
   ```

3. **Configure the Service**: Create/Open `service.yaml`. This file configures the service to expose Mockbin internally in the cluster.

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: insomnia-mock
     namespace: mock
   spec:
     type: ClusterIP
     ports:
     - name: mock
       port: 9080
       targetPort: 9080
     selector:
       app: insomnia-mock
   ```

4. **Deploy the Service**: Run the following command:

   ```bash
   kubectl apply -f service.yaml
   ```

5. **Configure the Ingress**: Create/Edit `ingress.yaml` to manage external access. This configuration will depend heavily on your specific domain and TLS requirements.

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: insomnia-mock-ingress
     namespace: mock
   spec:
     ingressClassName: nginx
     rules:
     - host: mock.your-domain.com
       http:
         paths:
         - path: /
           pathType: Prefix
           backend:
             service:
               name: insomnia-mock
               port:
                 number: 9080
     tls:
     - hosts:
       - mock.your-domain.com
       secretName: insomnia-mock-tls
   ```

6. **Deploy the Ingress**: Replace `mock.your-domain.com` with your actual domain and update the TLS secret names accordingly. Then, apply the configuration:

   ```bash
   kubectl apply -f ingress.yaml
   ```

7. **Check the Deployment Status**:

   ```bash
   kubectl get deployments -n mock
   ```

8. **Check the Service**:

   ```bash
   kubectl get services -n mock
   ```

9. **Check the Ingress**:

   ```bash
   kubectl get ingress -n mock
   ```

10. **Edit your your front-end application `.env` to point to the Ingress host**:

    ```bash
    // Example .env file for your front-end application
    BACKEND_API_URL=https://mock.your-domain.com/bin/foobar
    THIRD_PARTY_API_KEY=foo
    ```
