# Step_1: Specify the base image.(light_weight_linux_distro)
FROM alpine

# Step_2: Download and install dependencies.
RUN apk add --update redis

# Step_3: Set StartUp Command.
CMD ["redis-server"]