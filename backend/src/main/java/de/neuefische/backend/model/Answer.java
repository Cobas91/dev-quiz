package de.neuefische.backend.model;

import lombok.Data;

@Data
public class Answer {
    private String answerID;
    private String answerText;
    private boolean correct;
}
