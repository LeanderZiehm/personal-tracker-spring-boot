database:
	podman run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword --replace -v pgdata:/var/lib/postgresql:Z docker.io/library/postgres:18 