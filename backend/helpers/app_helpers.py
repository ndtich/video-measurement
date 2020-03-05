from flask import json

def json_response(payload, status=200):
    return (json.dumps(payload), status, {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'})