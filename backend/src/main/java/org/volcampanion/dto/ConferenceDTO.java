package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;
import java.util.List;
@Data
@Accessors(chain = true)
public class ConferenceDTO
{
private Long id;
private String nom;
private Date dateDebut;
private Date dateFin;
private List<TalkDto> talkDTO;

}
