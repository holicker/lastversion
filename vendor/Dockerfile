FROM openjdk:8u302-jdk

EXPOSE 8080

ADD ./build/libs/ vendor-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/vendor-0.0.1-SNAPSHOT.jar"]