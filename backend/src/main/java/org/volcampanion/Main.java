package org.volcampanion;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.info.License;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

@OpenAPIDefinition(
        tags = {
                @Tag(name = "Users", description = "User API."),
                @Tag(name = "Talks", description = "Talk API."),
                @Tag(name = "Conference", description = "Conference API."),
                @Tag(name = "Feedbacks", description = "Feedback API."),
        },
        info = @Info(
                title = "Volcampanion API",
                version = "1.0.0",
                contact = @Contact(
                        name = "API Support",
                        email = "contact@volcamp.io"),
                license = @License(
                        name = "Apache 2.0",
                        url = "https://www.apache.org/licenses/LICENSE-2.0.html"))
)
@QuarkusMain
public class Main {
    public static void main(String... args) {
        Quarkus.run(Application.class, args);
    }

    public static class Application implements QuarkusApplication {

        @Override
        public int run(String... args) {
            System.out.println("Do startup logic here");
            Quarkus.waitForExit();
            return 0;
        }
    }
}
