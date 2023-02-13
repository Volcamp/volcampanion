package org.volcampanion.domain.mappers;

import org.volcampanion.domain.User;
import org.volcampanion.dto.TalkDto;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class EmbedUserDTOMapper {

    public User dtoToDomain(TalkDto.EmbedUserDTO dto) {
        User dom = new User();
        dom.setId(dto.getId());
        dom.setEmail(dto.getEmail());
        dom.setNom(dto.getNom());
        dom.setBiographie(dto.getBiographie());
        dom.setTwitter(dto.getTwitter());
        dom.setLinkPhoto(dto.getLinkPhoto());
        return dom;
    }

    public TalkDto.EmbedUserDTO domainToDto(User dom) {
        TalkDto.EmbedUserDTO dto = new TalkDto.EmbedUserDTO();
        dto.setId(dom.getId());
        dto.setEmail(dom.getEmail());
        dto.setNom(dom.getNom());
        dto.setBiographie(dom.getBiographie());
        dto.setTwitter(dom.getTwitter());
        dto.setLinkPhoto(dom.getLinkPhoto());
        return dto;
    }

    public List<User> listDtosToDomains(List<TalkDto.EmbedUserDTO> dtoList) {
        List<User> list = new ArrayList<>();
        for (TalkDto.EmbedUserDTO userDto : dtoList) {
            list.add(dtoToDomain(userDto));

        }
        return list;
    }

    public List<TalkDto.EmbedUserDTO> listDomainsToDtos(List<User> users) {
        List<TalkDto.EmbedUserDTO> list = new ArrayList<>();
        for (User user : users) {
            list.add(domainToDto(user));
        }
        return list;
    }
}
