package com.studybuddy.studybuddy_api.dto;

import com.studybuddy.studybuddy_api.models.Tags;
import lombok.Getter;

@Getter
public class TagsDTO {
    private boolean pomodoro;
    private boolean mapaMental;
    private boolean grupoGrande;
    private boolean grupoPequeno;
    private boolean duo;

    public TagsDTO(Tags tag) {
        this.pomodoro = tag.isPomodoro();
        this.mapaMental = tag.isMapaMental();
        this.grupoGrande = tag.isGrupoGrande();
        this.grupoPequeno = tag.isGrupoPequeno();
        this.duo = tag.isDuo();
    }
}