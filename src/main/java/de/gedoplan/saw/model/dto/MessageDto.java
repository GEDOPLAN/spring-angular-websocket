package de.gedoplan.saw.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@AllArgsConstructor
public class MessageDto {
    private String message;
    private Instant instant;
}
