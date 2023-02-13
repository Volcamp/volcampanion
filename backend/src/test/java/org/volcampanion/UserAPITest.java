package org.volcampanion;

import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

public class UserAPITest {
    @Test
    public void postUser() {
        given()
                .body(" {\n" +
                        "    \"email\":\"Posttest@tt.ss\",\n" +
                        "    \"password\":\"123456\",\n" +
                        "    \"role\":\"ADMIN\",\n" +
                        "    \"twitter\":\"twitcher\",\n" +
                        "    \"biographie\":\"biog.\",\n" +
                        "    \"nom\":\"test D\",\n" +
                        "    \"linkPhoto\":\"link/testA/photo\"\n" +
                        "}")
                .contentType(ContentType.JSON)
                .when()
                .post("/api/users")
                .then()
                .statusCode(201);
    }

    @Test
    public void getUser() {
        given()
                .when().get("/api/users/{id}","3")
                .then()
                .statusCode(200);
    }

    @Test
    public void getUsers() {
        given()
                .when().get("/api/users/")
                .then()
                .statusCode(200);
    }

    @Test
    public void UpdateUsers() {
        given()
                .contentType(ContentType.JSON)
                .body(" {\n" +
                        "    \"email\":\"PUT@tt.ss\",\n" +
                        "    \"password\":\"123456\",\n" +
                        "    \"role\":\"VISITOR\",\n" +
                        "    \"twitter\":\"twitter\",\n" +
                        "    \"biographie\":\"top G.\",\n" +
                        "    \"nom\":\"test E\",\n" +
                        "    \"linkPhoto\":\"link/testA/photo\"\n" +
                        "}")
                .when().put("/api/users/{id}","3")
                .then()
                .statusCode(200);

    }

    @Test
    public void DeleteUsers() {

        given()
                .when().delete("/api/users/{id}",3)
                .then()
                .statusCode(200);//success but no return

    }
    @Test
    public void associateTalkToFavorites() {
        given()
                .body(" {\n" +
                        "    \"userId\":\"2\",\n" +
                        "    \"talkId\":\"22\",\n" +
                        "}")
                .contentType(ContentType.JSON)
                .when()
                .post("/api/users/{userId}/talks/{talkId}/favorite",2,21)
                .then()
                .statusCode(200);
    }

    @Test
    public void associateSpeakerToTalk() {
        given()
                .body(" {\n" +
                        "    \"speakerId\":\"2\",\n" +
                        "    \"talkId\":\"22\",\n" +
                        "}")
                .contentType(ContentType.JSON)
                .when()
                .post("/api/users/{speakerId}/talks/{talkId}/speaker",2,21)
                .then()
                .statusCode(200);
    }


}
