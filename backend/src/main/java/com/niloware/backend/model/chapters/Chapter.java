package com.niloware.backend.model.chapters;


import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "chapters")
public class Chapter {
    @Id
    private String id;
    private String title;
    private List<Section> sections;
}
