# set new localhost on your machine

window:
</br>

1. Open Note pad as Administrator
2. File => Open => C:\Windows\System32\Drivers\etc => All Files => hosts(Type file)
3. Add 127.0.0.1 devops-practice.com at the last line of your notepad

linux & mac:
</br>

1. Type sudo vim /etc/hosts
2. press => i
3. Add 127.0.0.1 devops-practice.com at the last line of your terminal
4. press => Esc => :wp! => Enter

## client => devops-practice.com --- server => devops-practice.com/api

```sh
kubectl apply -f .

kubectl get all

http://devops-practice.com

http://devops-practice.com/api

kubectl delete all --all
```

## if not works

run:

```sh
kubectl get pods --namespace=ingress-nginx
```

if you have response with => No resources found in ingress-nginx namespace
</br>
run:

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml
```
