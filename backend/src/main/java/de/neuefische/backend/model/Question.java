package de.neuefische.backend.model;

import lombok.Data;

import java.util.List;

@Data
public class Question {
    private String questionID;
    private String questionText;
    private List<Answer> answers;
}
