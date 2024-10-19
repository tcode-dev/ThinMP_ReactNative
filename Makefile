setup:
	chmod +x ./env/set_ip_env.sh
	./env/set_ip_env.sh
	docker-compose up -d

start:
	docker-compose exec -w /app/ThinMPr app npx expo start --tunnel

enter:
	docker-compose exec -w /app/ThinMPr app bash

stop:
	docker-compose stop
	docker-compose rm -f
