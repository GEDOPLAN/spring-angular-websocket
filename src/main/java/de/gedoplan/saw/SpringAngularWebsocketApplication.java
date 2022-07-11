package de.gedoplan.saw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class SpringAngularWebsocketApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAngularWebsocketApplication.class, args);
	}

}
