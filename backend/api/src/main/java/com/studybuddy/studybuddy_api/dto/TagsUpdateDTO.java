package com.studybuddy.studybuddy_api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TagsUpdateDTO {
    private boolean pomodoro;
    private boolean mapaMental;
    private boolean grupoGrande;
    private boolean grupoPequeno;
    private boolean duo;
}
