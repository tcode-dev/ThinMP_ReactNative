start:
	$(call setup)
	docker-compose exec -w /app/ThinMPr app npx expo start --tunnel

enter-container:
	$(call setup)
	docker-compose exec -w /app/ThinMPr app bash

define setup
	chmod +x ./env/set_ip_env.sh
	./env/set_ip_env.sh
	docker-compose up -d
endef
