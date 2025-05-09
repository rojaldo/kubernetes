# Primera etapa: compilación
FROM golang:1.16-alpine AS build
WORKDIR /app
COPY . .
# compila el código Go
RUN go build -o myapp main.go

# Segunda etapa: imagen final
FROM alpine:3.14
WORKDIR /app
COPY --from=build /app/myapp .
CMD ["./myapp"]