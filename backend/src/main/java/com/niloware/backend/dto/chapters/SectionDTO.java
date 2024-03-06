package com.niloware.backend.dto.chapters;

import lombok.Data;

import java.util.List;

@Data
public class SectionDTO {
    private String title;
    private String content;
    private List<SubSectionDTO> subsections;
}
