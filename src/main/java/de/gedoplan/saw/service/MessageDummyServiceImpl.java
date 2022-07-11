package de.gedoplan.saw.service;

import de.gedoplan.saw.model.dto.MessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class MessageDummyServiceImpl implements MessageDummyService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private int inputCount = 0;

    @Scheduled(cron = "*/10 * * * * *")
    private void sendMessage() {
        simpMessagingTemplate.convertAndSend("/notifier/message", new MessageDto("Received: %d messages".formatted(this.inputCount), Instant.now()));
    }

    @Override
    public void addMessage(MessageDto message) {
        this.inputCount++;
    }
}
