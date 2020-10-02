# Simple temperature monitoring service for IEAM demo

This is a simple service that is managed and deployed by the 
IBM Edge Application Management.  This demo application simulates 
the collection and reporting of temperature values in a delivery 
truck.

Environment variables to set:

HZN_ORG_ID
TRUCK_HUB_URL
HZN_HUB_URL



```

cloudctl login -a $HZN_HUB_URL -n default

cloudctl iam api-key-create  <IEAM userid>-edge-node-apikey 



hzn exchange node updatepolicy -f policy-refrigerated.json dev2

export DOCKER_REPOSITORY_BASE=jconallen

docker login 

docker build -t $DOCKER_REPOSITORY_BASE/coc-truck.temp-mon_amd64:1.0.2 .

hzn exchange service publish -f svc_def.json

hzn exchange business addpolicy --json-file=bus_policy.json coc-truck.temp-mon_1.0.2

sudo hzn service log coc-truck.temp-mon 

```

Business Policy Docs: 

Service Docs: https://github.com/open-horizon/anax/blob/master/docs/service_def.md

```
docker login 

docker build -t ibmicpcoc/coc.truck-node_amd64:1.0.2 .

hzn exchange service publish -f svc_def.json

hzn exchange business addpolicy --json-file=bus_policy.json coc.truck-node_1.0.2


```