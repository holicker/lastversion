FROM openjdk:8u302-jdk

EXPOSE 8080

ADD ./build/libs/ gateway-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/gateway-0.0.1-SNAPSHOT.jar"]