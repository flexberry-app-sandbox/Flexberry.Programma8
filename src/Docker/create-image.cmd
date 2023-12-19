docker build --no-cache -f SQL\Dockerfile.PostgreSql -t programma_8/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t programma_8/app ../..
