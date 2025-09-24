# k8s-labs
Exemplos no Minikube:
- 01-pods: Pod nginx
- 02-deployments: app Node.js com Deployment, Service (NodePort), probes, escala e rolling update.

## Como rodar
minikube start
minikube image build -t hello-node:1.1 .\02-deployments
kubectl apply -f .\02-deployments\deployment-node.yaml
minikube service hello-node-service --url

## Escalar
kubectl scale deployment hello-node --replicas=5

## Rolling update
minikube image build -t hello-node:1.2 .\02-deployments
# edite app.js p/ mudar resposta
kubectl set image deploy/hello-node hello-node=hello-node:1.2
kubectl rollout status deploy/hello-node
# rollback (opcional)
kubectl rollout undo deploy/hello-node
