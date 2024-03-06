package com.niloware.backend.dto.chapters;

import lombok.Data;

import java.util.List;

@Data
public class ChapterDTO {
    private String id;
    private String title;
    private List<SectionDTO> sections;
}
