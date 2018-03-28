#return
```
{
    "scope": [
        "realm:admin",
        "realm:user",
        "account:view-profile"
    ],
    "sub": "6248f6a3-4ee7-44f6-9c2b-ccb3fa98cbf3",
    "name": "Sample User",
    "email": "sample-user@nodejs-example"
}
```
#request
```
curl -X GET \
  http://192.168.0.71:8000/ \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGSjg2R2NGM2pUYk5MT2NvNE52WmtVQ0lVbWZZQ3FvcXRPUWVNZmJoTmxFIn0.eyJqdGkiOiJjNzY5YmFlMC0xNGE3LTQzNjUtYjUxYy01OGYzNDg5Yjk2MDYiLCJleHAiOjE1MjIyMjQ1ODUsIm5iZiI6MCwiaWF0IjoxNTIyMjI0Mjg1LCJpc3MiOiJodHRwOi8vMTkyLjE2OC42NC4xOTo4MDgwL2F1dGgvcmVhbG1zL25vZGVqcy1leGFtcGxlIiwiYXVkIjoibm9kZWpzLWNvbm5lY3QiLCJzdWIiOiI2MjQ4ZjZhMy00ZWU3LTQ0ZjYtOWMyYi1jY2IzZmE5OGNiZjMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJub2RlanMtY29ubmVjdCIsImF1dGhfdGltZSI6MTUyMjIyMTUwOSwic2Vzc2lvbl9zdGF0ZSI6ImYxYjIyYzA4LWZkZjYtNDRiNy04MTg1LWVkY2FhY2FkY2Y1MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJ2aWV3LXByb2ZpbGUiXX19LCJuYW1lIjoiU2FtcGxlIFVzZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIiwiZ2l2ZW5fbmFtZSI6IlNhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoic2FtcGxlLXVzZXJAbm9kZWpzLWV4YW1wbGUifQ.jk4qQgYOKPpO5JBbrvWhVYn1jz9zjtf8Nn5sv30_RW0dObm1qyN2TAG9k2ojYOjB3JOp7d6UmVFtALIVe9Wy3guyVrot-RV1AjgULNYKqxdrhx0SMvyi7eV2zcy1UbA13t0Jj3eob7kPIBfuBSERMx0T3u0flXHBgm4M1Va91IE' \
  -H 'cache-control: no-cache'
```
# token expired
```
{
    "statusCode": 401,
    "error": "Unauthorized",
    "message": "invalid token (expired)",
    "attributes": {
        "strategy": "keycloak-jwt",
        "error": "invalid token (expired)"
    }
}
```
