FROM openjdk:8u302-jdk

EXPOSE 8080

ADD ./build/libs/ /qna-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/qna-0.0.1-SNAPSHOT.jar"]