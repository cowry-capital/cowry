API
===

this is the API for the COWRY NETWORK

IT HAS ENDPOINTS THAT MAP TO DAPR SERVICE ENDPOINTS WITH DIFFERENT FUNCTIONALITY

```
INCOMING | OUTGOING

POST /get-wallet-balance | {"data": {"balance": 2000 }}
POST /a-custom-webhook-on-event | {"data": {"message": "a message"}}

```