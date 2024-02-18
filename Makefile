setup:
	yarn

generate:
	wget http://localhost:4000/api-json -O ./src/services/forceupdate-swagger.json
	npx swagger-typescript-api -p ./src/services/forceupdate-swagger.json -o ./src/services -n forceupdate-base-api.ts --responses --axios --unwrap-response-data --extract-enums --type-prefix "I"
