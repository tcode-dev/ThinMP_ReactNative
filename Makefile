setup:
	chmod +x ./env.sh
	./env.sh
	docker-compose up -d
	docker-compose exec -w /app/ThinMPr app npm install

start:
	docker-compose exec -w /app/ThinMPr app npx expo start --tunnel

enter:
	docker-compose exec -w /app/ThinMPr app bash

stop:
	docker-compose stop
	docker-compose rm -f
