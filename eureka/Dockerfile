FROM openjdk:8u302-jdk

EXPOSE 8761

ADD ./build/libs/ eureka-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/eureka-0.0.1-SNAPSHOT.jar"]