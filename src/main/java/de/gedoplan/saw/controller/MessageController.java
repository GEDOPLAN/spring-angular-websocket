package de.gedoplan.saw.controller;

import de.gedoplan.saw.model.dto.MessageDto;
import de.gedoplan.saw.service.MessageDummyService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class MessageController {

    private final MessageDummyService messageDummyService;

    @SendTo("/notifier/new-message")
    @MessageMapping("/message")
    public MessageDto addMessage(MessageDto message) {
        messageDummyService.addMessage(message);
        return message;
    }

}
