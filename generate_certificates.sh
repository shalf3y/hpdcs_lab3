#!/bin/bash

# Create a directory to store certificates
mkdir tls
cd tls

# Generate CA private key
openssl genpkey -algorithm RSA -out ca-key.pem

# Generate CA certificate
openssl req -new -x509 -key ca-key.pem -out ca.pem -days 365

# Generate server private key
openssl genpkey -algorithm RSA -out tls-key.pem

# Generate certificate signing request for the server
openssl req -new -key tls-key.pem -out tls-csr.pem

# Sign the server certificate with the CA
openssl x509 -req -in tls-csr.pem -CA ca.pem -CAkey ca-key.pem -out tls-cluster.pem -days 365

# Clean up temporary files
rm tls-csr.pem

echo "TLS certificates generated successfully in the 'tls' directory."
