package com.niloware.backend.service;

import com.niloware.backend.model.chapters.Chapter;
import com.niloware.backend.repository.ChapterRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

public class ChapterServiceTest {

    @Mock
    private ChapterRepository chapterRepository;

    @InjectMocks
    private ChapterService chapterService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void getAllChaptersReturnsListOfChaptersWhenChaptersExist() {
        Chapter chapter = new Chapter();
        List<Chapter> expectedChapters = Collections.singletonList(chapter);
        when(chapterRepository.findAll()).thenReturn(expectedChapters);

        List<Chapter> actualChapters = chapterService.getAllChapters();

        assertEquals(expectedChapters, actualChapters);
    }

    @Test
    public void getAllChaptersReturnsEmptyListWhenNoChaptersExist() {
        when(chapterRepository.findAll()).thenReturn(Collections.emptyList());

        List<Chapter> actualChapters = chapterService.getAllChapters();

        assertEquals(Collections.emptyList(), actualChapters);
    }
}