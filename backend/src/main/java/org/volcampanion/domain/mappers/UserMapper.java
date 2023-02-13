package org.volcampanion.domain.mappers;

import org.volcampanion.domain.User;
import org.volcampanion.dto.BasicUserDTO;
import org.volcampanion.dto.UserDto;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserMapper {

    @Inject
    TalkMapper talkMapper;

    public User dtoToDomain(BasicUserDTO dto) {
        // Omit ID
        User dom = new User();
        dom.setEmail(dto.getEmail());
        dom.setPassword(dto.getPassword());
        dom.setNom(dto.getNom());
        dom.setRole(dto.getRole());
        dom.setBiographie(dto.getBiographie());
        dom.setTwitter(dto.getTwitter());
        dom.setLinkPhoto(dto.getLinkPhoto());
        return dom;
    }

    public User dtoToDomain(UserDto dto) {
        User dom = new User();
        dom.setId(dto.getId());
        dom.setEmail(dto.getEmail());
        dom.setPassword(dto.getPassword());
        dom.setNom(dto.getNom());
        dom.setRole(dto.getRole());
        dom.setBiographie(dto.getBiographie());
        dom.setTwitter(dto.getTwitter());
        dom.setLinkPhoto(dto.getLinkPhoto());
        dom.setFavTalks(talkMapper.listDtosToDomain(dto.getFavoriteTalks()));
        return dom;
    }

    public UserDto domainToDto(User dom) {
        UserDto dto = new UserDto();
        dto.setId(dom.getId());
        dto.setEmail(dom.getEmail());
        dto.setPassword(dom.getPassword());
        dto.setNom(dom.getNom());
        dto.setRole(dom.getRole());
        dto.setBiographie(dom.getBiographie());
        dto.setTwitter(dom.getTwitter());
        dto.setLinkPhoto(dom.getLinkPhoto());
        dto.setFavoriteTalks(talkMapper.listDomainsToDto(dom.getFavTalks()));
        return dto;
    }

    public List<User> listDtosToDomains(List<UserDto> dtoList) {
        List<User> list = new ArrayList<>();
        for (UserDto userDto : dtoList) {
            list.add(dtoToDomain(userDto));

        }
        return list;
    }

    public List<UserDto> listDomainsToDtos(List<User> users) {
        List<UserDto> list = new ArrayList<>();
        for (User user : users) {
            list.add(domainToDto(user));
        }
        return list;
    }
}
