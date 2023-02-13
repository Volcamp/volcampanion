package org.volcampanion;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class ConferenceAPITest {
    @Test
    public void postConference() {
        given()
                .body("{\n" +
                        "\"nom\":\"sss\",\n" +
                        "\"dateDebut\":\"2020-07-16T10:00:00\",\n" +
                        "\"dateFin\":\"2021-07-16T10:00:00\",\n" +
                        "\"talkDTO\":[]\n" +
                        "}")
                .contentType(ContentType.JSON)
                .when()
                .post("/api/conference")
                .then()
                .statusCode(200);
    }


    @Test
    public void getConference() {
        given()
                .when().get("/api/conference/{id}", "1")
                .then()
                .statusCode(200);
    }

    @Test
    public void getConferenceAll() {
        given()
                .when().get("/api/conference/")
                .then()
                .statusCode(200);
    }

    @Test
    public void updateConference() {
        given()
                .contentType(ContentType.JSON)
                .body("{\n" +
                        "\"nom\":\"Bouhours\",\n" +
                        "\"dateDebut\":\"2050-07-16T10:00:00\",\n" +
                        "\"dateFin\":\"2052-07-16T10:00:00\",\n" +
                        "\"talkDTO\":[]\n" +
                        "}")
                .when().put("/api/conference/{id}", "1")
                .then()
                .statusCode(204);//success but no return

    }

    @Test
    public void DeleteConference() {
        given()
                .when().delete("/api/conference/{id}", "1")
                .then()
                .statusCode(200);//success but no return

    }


}
