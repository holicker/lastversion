FROM openjdk:8u302-jdk

EXPOSE 8761

ADD ./build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]