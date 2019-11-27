#!/usr/bin/env bash

# Retrieve the token for the gitlab-admin service account:
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep gitlab-admin | awk '{print $1}')