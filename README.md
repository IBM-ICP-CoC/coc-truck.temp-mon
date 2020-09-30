# Simple temperature monitoring service for IEAM demo

This is a simple service that is managed and deployed by the 
IBM Edge Application Management.  This demo application simulates 
the collection and reporting of temperature values in a delivery 
truck.

Environment variables to set:

HZN_ORG_ID
TRUCK_HUB_URL

Node Policies:

dev1-dev5: policy-orig.json
dev6-dev10: policy-refigerated.json
dev11-dev20: policy-simple.json

Business Policy Docs: 

Service Docs: https://github.com/open-horizon/anax/blob/master/docs/service_def.md

```
docker login 

docker build -t ibmicpcoc/coc.truck-node_amd64:1.0.2 .

hzn exchange service publish -f svc_def.json

hzn exchange business addpolicy --json-file=bus_policy.json coc.truck-node_1.0.2


```