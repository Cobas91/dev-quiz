package de.neuefische.backend.controller;

import de.neuefische.backend.model.Answer;
import de.neuefische.backend.model.Question;
import de.neuefische.backend.repo.QuestionRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.List;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class QuestionControllerTest {

    @Autowired
    private TestRestTemplate rest;

    @Autowired
    private QuestionRepo repo;

    @BeforeEach
    void clearRepo(){
        repo.clear();
    }

    @Test
    void getAllQuestions() {
        //GIVEN
        Answer answer = new Answer("Ja!", true);
        Question toAdd = new Question("1","Funktioniert der Test?", List.of(answer));
        Question toAdd2 = new Question("2","Funktioniert der Test?", List.of(answer));
        repo.addQuestion(toAdd);
        repo.addQuestion(toAdd2);
        //WHEN
        ResponseEntity<Question[]> response = rest.getForEntity("/api/question", Question[].class);
        //THEN

        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(toAdd, toAdd2));
    }

    @Test
    void addNewQuestion() {
        //GIVEN
        Answer answer = new Answer("Ja!", true);
        Question toAdd = new Question("1","Funktioniert der Test?", List.of(answer));
        Question toAdd2 = new Question("2","Funktioniert der Test?", List.of(answer));
        repo.addQuestion(toAdd);
        //WHEN
        ResponseEntity<Question[]> response = rest.postForEntity("/api/question",toAdd2, Question[].class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(toAdd, toAdd2));
    }
}