setup:
	chmod +x ./env.sh
	./env.sh
	docker-compose up -d
	docker-compose exec -w /app/ThinMPr app npm install

enter:
	docker-compose exec -w /app/ThinMPr app bash

android:
	docker-compose exec -w /app/ThinMPr app eas build --platform android --profile preview

ios:
	docker-compose exec -w /app/ThinMPr app eas build --platform ios --profile preview

stop:
	docker-compose stop
	docker-compose rm -f
