FROM openjdk:8u302-jdk

EXPOSE 8080

ADD ./build/libs/ app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]