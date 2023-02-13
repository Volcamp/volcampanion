package org.volcampanion;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class TalkAPITest {

    @Test
    public void postTalk() {
        given()
                .body("    {\n" +
                        "        \"titre\": \"sounak\",\n" +
                        "        \"langue\": \"french\",\n" +
                        "        \"niveau\": \"Beginner\",\n" +
                        "        \"date\": \"2021-07-16T10:00:00.000+00:00\",\n" +
                        "        \"description\": \"cedric\",\n" +
                        "        \"theme\": \"keyNote\",\n" +
                        "        \"nomSalle\": \"noms2\",\n" +
                        "        \"conferenceDTO\": {\n" +
                        "            \"id\":\"17\",\n" +
                        "            \"nom\":\"nomZoro\",\n" +
                        "            \"dateDebut\":\"2021-07-16T12:00:00.000+00:00\",\n" +
                        "            \"dateFin\":\"2021-07-16T12:00:00.000+00:00\",\n" +
                        "            \"talkDTO\": []\n" +
                        "        },\n" +
                        "        \"speakers\": []\n" +
                        "    }")
                .contentType(ContentType.JSON)
                .when()
                .post("/api/talks")
                .then()
                .statusCode(201);
    }


    @Test
    public void getTalks() {
        given()
                .when().get("/api/talks/{id}", "21")
                .then()
                .statusCode(200);
    }

    @Test
    public void getAllTalks() {
        given()
                .when().get("/api/talks/")
                .then()
                .statusCode(200);
    }

    @Test
    public void updateConference() {
        given()
                .contentType(ContentType.JSON)
                .body("    {\n" +
                        "        \"titre\": \"noTitre\",\n" +
                        "        \"langue\": \"Creole\",\n" +
                        "        \"niveau\": \"Mid_level\",\n" +
                        "        \"date\": \"2022-07-16T10:00:00.000+00:00\",\n" +
                        "        \"description\": \"noDesc\",\n" +
                        "        \"theme\": \"keyNote\",\n" +
                        "        \"nomSalle\": \"noms2\",\n" +
                        "        \"conferenceDTO\": {\n" +
                        "            \"id\":\"17\",\n" +
                        "            \"nom\":\"nomZoro\",\n" +
                        "            \"dateDebut\":\"2021-07-16T12:00:00.000+00:00\",\n" +
                        "            \"dateFin\":\"2021-07-16T12:00:00.000+00:00\",\n" +
                        "            \"talkDTO\": []\n" +
                        "        },\n" +
                        "        \"speakers\": []\n" +
                        "    }")
                .when().put("/api/talks/{id}", "22")
                .then()
                .statusCode(200);

    }

    @Test
    public void DeleteTalkAPITest() {

        given()
                .when().delete("/api/talks/{id}", 23)
                .then()
                .statusCode(200);//success but no return

    }

}
