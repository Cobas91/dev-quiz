package de.neuefische.backend.model;

import lombok.Data;

import java.util.UUID;

@Data
public class Answer {
    private String answerID;
    private String answerText;
    private boolean correct;

    public Answer(String answerText, boolean correct) {
        this.answerID = UUID.randomUUID().toString();
        this.answerText = answerText;
        this.correct = correct;
    }
}
