#!/bin/bash

# ローカルIPアドレスを取得
LOCAL_IPS=$(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{ print $2 }')

# プライベートネットワークのIPアドレスをフィルタリング
for IP in $LOCAL_IPS; do
  if [[ $IP =~ ^10\..* ]] || [[ $IP =~ ^172\.16\..* ]] || [[ $IP =~ ^192\.168\..* ]]; then
    HOST_IP=$IP
    break
  fi
done

# .envファイルに書き込み
if [ -n "$HOST_IP" ]; then
  echo "REACT_NATIVE_PACKAGER_HOSTNAME=$HOST_IP" > .env
else
  echo "Dockerが動作するIPアドレスが見つかりませんでした。"
fi